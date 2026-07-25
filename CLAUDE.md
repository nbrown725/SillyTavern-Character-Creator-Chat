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
├── settings.ts                # ExtensionSettingsManager, migration strategies (F_1.4 → F_1.13)
├── constants.ts               # Default Handlebars prompt templates (14 configurable prompts)
├── generate.ts                # Core generation: builds context, compiles templates, calls LLM, parses response
├── request.ts                 # API wrappers: makeRequest (streaming), makePlainRequest, makeStructuredRequest<T>
├── parsers.ts                 # Response parsing: XML, JSON, plain text with graceful fallback
├── browser-storage.ts         # Single persistence layer: localforage/IndexedDB + localStorage migration
├── handlebars-helpers.ts      # Shared Handlebars helpers (add, join, is_not_empty, indent, json, xmlEscape)
├── world-info-entries.ts      # Reads world info entries, optionally including disabled ones
├── world-info-export.ts       # Builds the character object passed to the WI entry template
├── world-info-selection.ts    # Dropdown items for world info, retaining renamed/missing selections
├── brainstorm-types.ts        # TypeScript interfaces for brainstorm sessions and messages (BrainstormSession, BrainstormMessage, ImageAttachment)
├── brainstorm-prompt-builder.ts # Builds initial brainstorm messages: system prompt + context blocks via Handlebars
├── brainstorm-extract.ts      # "Draft Card": extraction schema, instruction rendering, proposal rows, per-row filtering
├── character-fields.ts        # Side-effect-free field IDs/labels/naming (importable by pure logic + tests)
├── character-state.ts         # Shared state applier for revise sessions and brainstorm extraction
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
│   ├── CompareStatePopup.tsx  # Diff view for entire character state (exports the shared DiffView)
│   ├── ExtractReviewPopup.tsx # Per-field accept/reject review of a brainstorm card extraction
│   ├── CurrentStatePopup.tsx  # Read-only view of current character card state
│   ├── MarkdownContent.tsx    # Markdown rendering with syntax highlighting (showdown, DOMPurify, hljs)
│   └── Settings.tsx           # Settings panel; ContextTemplateEditor renders both context templates
├── styles/
│   └── main.scss              # Styles using ST CSS variables (--SmartTheme*)
└── test/
    ├── parser.test.ts         # Vitest unit tests for response parsers
    ├── character-state.test.ts # State application: greeting renumbering, draft creation/collision
    ├── brainstorm-extract.test.ts # Extraction prompt, schema constraints, selective apply
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
- **IndexedDB via localforage** for persistence, behind `browser-storage.ts` — components never touch
  a storage API directly. Each key transparently migrates from its old `localStorage` entry on first
  read, then deletes the legacy copy:
  - `charCreator` — current session (character fields, drafts, selections)
  - `charCreator_reviseSessions` — multi-turn revise chat histories
  - `charCreator_brainstormSessions` — brainstorm chat session histories (saved + unsaved)
  Loads report `migrated`/`recovered` and saves report `persisted`, so a corrupt payload or a full
  quota surfaces as a toast instead of an exception.
- **ExtensionSettingsManager** (sillytavern-utils-lib) for extension settings with versioned migrations

### SillyTavern Integration

- **No backend component** — purely client-side extension
- **No direct API calls** — all LLM requests go through `ConnectionManagerRequestService`
- **Context access:** `SillyTavern.getContext()` for characters, chat, world info, personas
- **UI injection:** Popup trigger icons inserted into `.form_create_bottom_buttons_block`, `#GroupFavDelOkBack`, and `#rm_buttons_container`
- **Global function:** `window.openCharacterCreatorPopup()` for external triggering
- **ST UI components:** Uses `STButton`, `STTextarea`, `STConnectionProfileSelect`, `Popup`, etc. from sillytavern-utils-lib

### Key Settings

The extension has 16 configurable Handlebars prompt templates and context controls:
- `profileId` — selected LLM connection profile
- `outputFormat` — `xml` | `json` | `none` (response format)
- `contextToSend` — toggles for char card, world info, persona, messages, existing fields
- `prompts.*` — customizable system/task/format prompts (each has `isDefault` flag for migration safety)
- `promptPresets` / `mainContextTemplatePresets` — user-defined prompt ordering presets
- `brainstormContextTemplatePresets` — the same shape, ordering the opening context of brainstorm
  sessions independently of field generation

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

**Card extraction — "Draft Card"** (`brainstorm-extract.ts`, `ExtractReviewPopup.tsx`):
- Header button in `BrainstormChat`, enabled once the model has replied at least once
- Sends the full transcript (images included, via `buildApiMessages`) plus a rendered
  `brainstormExtractPrompt` instruction, through `makeStructuredRequest` so it works on models
  without native structured output
- The instruction lists field **IDs alongside labels** (`` `first_mes` (First_Message) ``) because
  the schema enum takes IDs while the rest of the extension's templates are label-keyed
- `char`/`user` render as the literal `{{char}}`/`{{user}}` macros — the prompt instructs the model
  to write them into the card, so substituting real names would corrupt the instruction
- Response is **additive only**: no `greetings_to_remove` / `draft_fields_to_remove`. Extraction can
  never delete existing work, which also sidesteps the fact that the apply path merges rather than
  replaces field maps
- `buildProposalItems()` flattens the response into reviewable rows paired with the values they
  would replace; the user accepts/rejects per row, and `filterExtractionResponse()` narrows the
  response before `calculateNewState()` applies it — selection is exact, not diff-derived
- A hint box + "Redo" re-runs extraction with `{{extractionHint}}` set, for when the model picks
  the wrong thread out of a long conversation
- Uses `max(maxResponseToken, 4096)`; the 1024 default truncates a whole-card response

**Prompt construction** (`brainstorm-prompt-builder.ts`):
- `buildInitialBrainstormMessages()` compiles Handlebars templates with context data
- Context blocks ordered by `brainstormContextTemplatePreset` — a template **separate from**
  `mainContextTemplatePreset`. The main template is shared by field generation and revise sessions,
  neither of which filters exhaustively, so a brainstorm-only prompt placed there would leak into
  Generate and Revise. The separate list also means `brainstormSystemPrompt` is an ordinary movable
  entry rather than a hardcoded first message
- `chatHistory` is ignored whatever the template says — no placeholder mechanism exists, so
  "Messages to Include" has no effect on brainstorm
- `brainstormExtractPrompt` is also skipped here, but it *is* a member of this template:
  `resolveExtractionBlock()` reads its `role` and `enabled` flag for the Draft Card request.
  Disabling it (or deleting it from the template) disables the Draft Card button. Its **position
  has no effect** — it is always appended after the transcript — which the settings list spells out
  in the entry's label
- Respects `contextToSend` toggles (char card, world info, persona, existing fields)
- All initial messages flagged with `isInitial: true`

### Revise Sessions

Multi-turn conversations for iterative character refinement. Each session:
- Targets a specific field or the entire character
- Maintains a persistent message history
- Uses Zod schemas for structured response validation
- Supports both field-specific and global (all-fields) revision modes
- Tracks state snapshots after each AI response for undo/comparison
- Applies responses via the shared `calculateNewState()` in `character-state.ts` — the same applier
  brainstorm extraction uses, so greeting renumbering and draft handling cannot drift between them
