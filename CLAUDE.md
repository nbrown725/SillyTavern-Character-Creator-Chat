# CLAUDE.md — Character Creator Extension

## Overview

AI-powered SillyTavern extension for generating and iterating on character cards. Uses LLMs (via SillyTavern's connection manager) to create character fields — name, description, personality, scenario, first message, example dialogue, alternate greetings — with rich context from chat history, world info, and user persona. Supports single-field generation, batch generation, multi-turn "revise sessions," multi-turn "brainstorm sessions" (freeform chat with image support), draft fields, and field comparison.

**Author:** bmen25124 | **Version:** 0.3.0 | **License:** MIT

## Tech Stack

- **Language:** TypeScript + React 19 (JSX)
- **Build:** Vite 7, output to `dist/index.js` (ES module) + `dist/style.css`
- **Styling:** SCSS (`src/styles/main.scss`)
- **Validation:** Zod 4 (runtime schema validation for structured LLM responses)
- **Templating:** Handlebars (prompt construction)
- **Parsing:** fast-xml-parser (XML response parsing)
- **Diffing:** diff (field comparison UI)
- **Integration:** sillytavern-utils-lib (ST component library, connection manager, prompt builder)
- **Testing:** Vitest + jsdom

## Commands

```bash
# Install dependencies
npm install

# Development build (watch mode with sourcemaps)
npm run dev

# Production build (no sourcemaps)
npm run build

# Run tests
npm test

# Format code
npm run prettify
```

## Code Style

- **Prettier-enforced:** 2-space indentation, single quotes, semicolons, 120 char line width
- **HTML overrides:** 4-space indentation, double quotes
- **TypeScript:** strict mode, ESNext target, bundler module resolution, `react-jsx` transform
- **No unused locals** (`noUnusedLocals: true`)

## Architecture

### Entry Point & Build

`src/index.tsx` is the entry point, compiled by Vite into `dist/index.js`. SillyTavern loads it as declared in `manifest.json`. A custom Vite plugin (`sillyTavernExternalsPlugin`) marks upstream ST imports (`../../../*` paths from sillytavern-utils-lib) as external so the browser resolves them at runtime.

### File Map

```
src/
├── index.tsx                  # Extension init: renders settings, creates popup trigger icons
├── settings.ts                # ExtensionSettingsManager, migration strategies (F_1.4 → F_1.11)
├── constants.ts               # Default Handlebars prompt templates (14 configurable prompts)
├── generate.ts                # Core generation: builds context, compiles templates, calls LLM, parses response
├── request.ts                 # API wrappers: makeRequest (streaming), makePlainRequest, makeStructuredRequest<T>
├── parsers.ts                 # Response parsing: XML, JSON, plain text with graceful fallback
├── brainstorm-types.ts        # TypeScript interfaces for brainstorm sessions and messages (BrainstormSession, BrainstormMessage, ImageAttachment)
├── brainstorm-prompt-builder.ts # Builds initial brainstorm messages: system prompt + context blocks via Handlebars
├── image-utils.ts             # Image utilities: fileToDataUrl, uploadImage (/api/images/upload), imageUrlToDataUrl
├── revise-prompt-builder.ts   # Constructs multi-turn revise session prompts
├── revise-types.ts            # Zod schemas for revise session structured responses
├── schema-to-example.ts       # Generates example JSON/XML from Zod schemas
├── hooks/
│   └── useForceUpdate.ts      # Custom React hook for manual re-renders
├── components/
│   ├── PopupManager.tsx       # React root, popup lifecycle, global openCharacterCreatorPopup()
│   ├── MainPopup.tsx          # Main UI: 3 tabs (Core Fields / Draft Fields / Brainstorm), generation controls, state management
│   ├── CharacterField.tsx     # Single field input with generate/compare/revise actions
│   ├── AlternateGreetings.tsx # Tab-based UI for managing multiple first messages
│   ├── BrainstormSessionManager.tsx # Session CRUD: saved vs unsaved lists, max 5 unsaved, create/select/delete/save
│   ├── BrainstormChat.tsx     # Chat UI: message display, image paste/upload, streaming LLM responses, message editing
│   ├── ReviseSessionManager.tsx  # Create/load/save multi-turn revise sessions
│   ├── ReviseSessionChat.tsx  # Chat UI for iterative character refinement
│   ├── CompareFieldPopup.tsx  # Diff view for a single field vs loaded character
│   ├── CompareStatePopup.tsx  # Diff view for entire character state
│   ├── CurrentStatePopup.tsx  # Read-only view of current character card state
│   ├── MarkdownContent.tsx    # Markdown rendering with syntax highlighting (showdown, DOMPurify, hljs)
│   └── Settings.tsx           # Extension settings panel (React component)
├── styles/
│   └── main.scss              # Styles using ST CSS variables (--SmartTheme*)
└── test/
    ├── parser.test.ts         # Vitest unit tests for response parsers
    └── image-api-messages.test.ts # Tests for image API message handling
```

### Request Flow

```
User clicks Generate → generate.ts
  → Builds Handlebars context (char data, world info, persona, chat history)
  → Compiles prompt templates from settings
  → ConnectionManagerRequestService.sendRequest() (sillytavern-utils-lib)
  → SillyTavern backend proxies to selected LLM provider
  → parsers.ts extracts content (XML/JSON/plain text)
  → Result displayed in CharacterField component
```

### State Management

- **React hooks** (`useState`, `useEffect`, `useCallback`, `useMemo`) for component state
- **localStorage** for persistence:
  - `charCreator` — current session (character fields, drafts, selections)
  - `charCreator_brainstormSessions` — brainstorm chat session histories (saved + unsaved)
  - `charCreator_reviseSessions` — multi-turn revise chat histories
- **ExtensionSettingsManager** (sillytavern-utils-lib) for extension settings with versioned migrations

### SillyTavern Integration

- **No backend component** — purely client-side extension
- **No direct API calls** — all LLM requests go through `ConnectionManagerRequestService`
- **Context access:** `SillyTavern.getContext()` for characters, chat, world info, personas
- **UI injection:** Popup trigger icons inserted into `.form_create_bottom_buttons_block`, `#GroupFavDelOkBack`, and `#rm_buttons_container`
- **Global function:** `window.openCharacterCreatorPopup()` for external triggering
- **ST UI components:** Uses `STButton`, `STTextarea`, `STConnectionProfileSelect`, `Popup`, etc. from sillytavern-utils-lib

### Key Settings

The extension has 14 configurable Handlebars prompt templates and context controls:
- `profileId` — selected LLM connection profile
- `outputFormat` — `xml` | `json` | `none` (response format)
- `contextToSend` — toggles for char card, world info, persona, messages, existing fields
- `prompts.*` — customizable system/task/format prompts (each has `isDefault` flag for migration safety)
- `promptPresets` / `mainContextTemplatePresets` — user-defined prompt ordering presets

### Brainstorm Sessions

Multi-turn freeform chat for developing character concepts. The "Brainstorm" tab in MainPopup provides a full chat interface.

**Data types** (`brainstorm-types.ts`):
- `BrainstormMessage` — extends Message with `id`, `images?: ImageAttachment[]`, `isInitial?: boolean`
- `BrainstormSession` — `id` (bs-{timestamp}), `name`, `createdAt`, `messages`, `contextConfig`, `saved` flag
- `ImageAttachment` — `url` (server path or data URL), `name`, and optional `mediaType` (`'image' | 'video'`)

**Session management** (`BrainstormSessionManager.tsx`):
- Two lists: saved sessions and unsaved "workspace" sessions (max 5 unsaved enforced)
- Create new session → `buildInitialBrainstormMessages()` constructs context from current character data, world info, persona, chat history
- Save action moves session from workspace to saved list with a user-provided name

**Chat UI** (`BrainstormChat.tsx`):
- Sends messages via `makePlainRequest()` (non-streaming; the reply renders once complete)
- Image support: paste from clipboard, file upload, or file picker → uploaded to `/api/images/upload`
- Image data URLs cached in-memory (`imageDataUrlCache` ref) and converted on session load for persistence
- Message editing: user can edit prior messages, triggering re-send with updated history
- Context rebuilding: when `contextToSend` settings change, initial messages are rebuilt via `buildInitialBrainstormMessages()`
- AbortController for cancelling in-flight requests

**Prompt construction** (`brainstorm-prompt-builder.ts`):
- `buildInitialBrainstormMessages()` compiles Handlebars templates with context data
- Context blocks ordered by `mainContextTemplatePreset` setting
- Respects `contextToSend` toggles (char card, world info, persona, messages, existing fields)
- All initial messages flagged with `isInitial: true`

### Revise Sessions

Multi-turn conversations for iterative character refinement. Each session:
- Targets a specific field or the entire character
- Maintains a persistent message history
- Uses Zod schemas for structured response validation
- Supports both field-specific and global (all-fields) revision modes
- Tracks state snapshots after each AI response for undo/comparison
