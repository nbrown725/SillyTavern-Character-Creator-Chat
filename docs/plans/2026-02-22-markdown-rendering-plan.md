# Markdown Rendering Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add full markdown rendering to assistant messages in BrainstormChat and ReviseSessionChat, using SillyTavern's globally available Showdown.js, DOMPurify, and Highlight.js.

**Architecture:** Create a reusable `MarkdownContent` React component that converts markdown to sanitized HTML using `SillyTavern.libs.showdown` and `SillyTavern.libs.DOMPurify`. Use it in both chat components for assistant messages only. Add CSS for markdown elements.

**Tech Stack:** Showdown.js (via `SillyTavern.libs`), DOMPurify (via `SillyTavern.libs`), Highlight.js (via `SillyTavern.libs`), React 19, SCSS

---

### Task 1: Create MarkdownContent Component

**Files:**
- Create: `src/components/MarkdownContent.tsx`

**Step 1: Create the component file**

The component accesses Showdown and DOMPurify from `SillyTavern.libs` (typed via `sillytavern-utils-lib`). It creates a converter instance once (module-level), converts content to HTML, sanitizes it, and renders via `dangerouslySetInnerHTML`. A `useEffect` + `useRef` applies `hljs.highlightElement()` to any `<pre><code>` blocks after render.

```tsx
import { FC, useRef, useEffect, useMemo } from 'react';

const { showdown, DOMPurify, hljs } = SillyTavern.libs;

const converter = new showdown.Converter({
  emoji: true,
  literalMidWordUnderscores: true,
  parseImgDimensions: true,
  tables: true,
  underline: true,
  simpleLineBreaks: true,
  strikethrough: true,
  disableForced4SpacesIndentedSublists: true,
});

interface MarkdownContentProps {
  content: string;
}

export const MarkdownContent: FC<MarkdownContentProps> = ({ content }) => {
  const ref = useRef<HTMLDivElement>(null);

  const sanitizedHtml = useMemo(() => {
    const html = converter.makeHtml(content);
    return DOMPurify.sanitize(html);
  }, [content]);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.querySelectorAll<HTMLElement>('pre code').forEach((block) => {
      hljs.highlightElement(block);
    });
  }, [sanitizedHtml]);

  return (
    <div
      ref={ref}
      className="message-content markdown-rendered"
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  );
};
```

**Step 2: Verify TypeScript compiles**

Run: `cd /home/nitechno/Apps/Test-Builds/SillyTavern/public/scripts/extensions/third-party/SillyTavern-Character-Creator-Chat && npx tsc --noEmit`
Expected: No errors

**Step 3: Commit**

```bash
git add src/components/MarkdownContent.tsx
git commit -m "feat: add MarkdownContent component for markdown rendering"
```

---

### Task 2: Integrate into BrainstormChat

**Files:**
- Modify: `src/components/BrainstormChat.tsx`

**Step 1: Add import**

At the top of the file (after existing imports), add:

```tsx
import { MarkdownContent } from './MarkdownContent.js';
```

**Step 2: Replace assistant message rendering in the chat messages section**

Find line 315 inside the `chatMsgs.map()` block:
```tsx
<div className="message-content">{msg.content}</div>
```

Replace with:
```tsx
{msg.role === 'assistant' ? (
  <MarkdownContent content={msg.content} />
) : (
  <div className="message-content">{msg.content}</div>
)}
```

**Step 3: Verify TypeScript compiles**

Run: `cd /home/nitechno/Apps/Test-Builds/SillyTavern/public/scripts/extensions/third-party/SillyTavern-Character-Creator-Chat && npx tsc --noEmit`
Expected: No errors

**Step 4: Commit**

```bash
git add src/components/BrainstormChat.tsx
git commit -m "feat: use MarkdownContent for assistant messages in BrainstormChat"
```

---

### Task 3: Integrate into ReviseSessionChat

**Files:**
- Modify: `src/components/ReviseSessionChat.tsx`

**Step 1: Add import**

At the top of the file (after existing imports), add:

```tsx
import { MarkdownContent } from './MarkdownContent.js';
```

**Step 2: Replace assistant message rendering in the chat messages section**

Find line 816 inside the `chatMsgs.map()` block:
```tsx
<div className="message-content">{msg.content}</div>
```

Replace with:
```tsx
{msg.role === 'assistant' ? (
  <MarkdownContent content={msg.content} />
) : (
  <div className="message-content">{msg.content}</div>
)}
```

**Step 3: Verify TypeScript compiles**

Run: `cd /home/nitechno/Apps/Test-Builds/SillyTavern/public/scripts/extensions/third-party/SillyTavern-Character-Creator-Chat && npx tsc --noEmit`
Expected: No errors

**Step 4: Commit**

```bash
git add src/components/ReviseSessionChat.tsx
git commit -m "feat: use MarkdownContent for assistant messages in ReviseSessionChat"
```

---

### Task 4: Add Markdown CSS Styles

**Files:**
- Modify: `src/styles/main.scss`

**Step 1: Add markdown styles**

After the existing `.message-bubble` styles (around line 558, after the `&.loading` block), add markdown rendering styles inside the `.revise-session-chat, .brainstorm-chat` block:

```scss
    .markdown-rendered {
      white-space: normal;

      > *:first-child {
        margin-top: 0;
      }

      > *:last-child {
        margin-bottom: 0;
      }

      h1, h2, h3, h4, h5, h6 {
        margin: 0.6em 0 0.3em;
        font-weight: 600;
        line-height: 1.3;
      }

      h1 { font-size: 1.4em; }
      h2 { font-size: 1.25em; }
      h3 { font-size: 1.1em; }
      h4, h5, h6 { font-size: 1em; }

      p {
        margin: 0.4em 0;
      }

      ul, ol {
        margin: 0.4em 0;
        padding-left: 1.5em;
      }

      li {
        margin: 0.2em 0;
      }

      code {
        background-color: var(--black30a);
        padding: 0.15em 0.4em;
        border-radius: 4px;
        font-family: monospace;
        font-size: 0.9em;
      }

      pre {
        margin: 0.5em 0;
        padding: 10px;
        background-color: var(--black30a);
        border: 1px solid var(--SmartThemeBorderColor);
        border-radius: 6px;
        overflow-x: auto;

        code {
          background: none;
          padding: 0;
          border-radius: 0;
          font-size: 0.85em;
          white-space: pre;
        }
      }

      blockquote {
        margin: 0.5em 0;
        padding: 0.3em 0.8em;
        border-left: 3px solid var(--SmartThemeBorderColor);
        color: var(--SmartThemeEmColor);
      }

      table {
        border-collapse: collapse;
        margin: 0.5em 0;
        width: 100%;
        font-size: 0.9em;

        th, td {
          border: 1px solid var(--SmartThemeBorderColor);
          padding: 6px 10px;
          text-align: left;
        }

        th {
          background-color: var(--black30a);
          font-weight: 600;
        }
      }

      a {
        color: var(--SmartThemeQuoteColor);
        text-decoration: underline;

        &:hover {
          opacity: 0.8;
        }
      }

      strong {
        font-weight: 600;
      }

      hr {
        border: none;
        border-top: 1px solid var(--SmartThemeBorderColor);
        margin: 0.8em 0;
      }

      img {
        max-width: 100%;
        border-radius: 4px;
      }
    }
```

**Step 2: Verify build compiles**

Run: `cd /home/nitechno/Apps/Test-Builds/SillyTavern/public/scripts/extensions/third-party/SillyTavern-Character-Creator-Chat && npx vite build --mode development`
Expected: Build succeeds, `dist/style.css` includes the new styles

**Step 3: Commit**

```bash
git add src/styles/main.scss
git commit -m "feat: add CSS styles for markdown rendering in chat messages"
```

---

### Task 5: Build and Verify

**Step 1: Run full production build**

Run: `cd /home/nitechno/Apps/Test-Builds/SillyTavern/public/scripts/extensions/third-party/SillyTavern-Character-Creator-Chat && npm run build`
Expected: `tsc` and `vite build` both succeed without errors

**Step 2: Run existing tests**

Run: `cd /home/nitechno/Apps/Test-Builds/SillyTavern/public/scripts/extensions/third-party/SillyTavern-Character-Creator-Chat && npm test -- --run`
Expected: All existing parser tests pass

**Step 3: Final commit with build output**

```bash
git add dist/
git commit -m "build: compile markdown rendering changes"
```
