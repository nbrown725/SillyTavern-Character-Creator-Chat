# Markdown Rendering in Chat Sessions

## Goal

Add full markdown rendering to assistant messages in both BrainstormChat and ReviseSessionChat components, using SillyTavern's globally available Showdown.js, DOMPurify, and Highlight.js libraries.

## Approach

Use `SillyTavern.libs.showdown` + `SillyTavern.libs.DOMPurify` (zero new dependencies). Create a reusable `MarkdownContent` React component.

## Component: `MarkdownContent`

**File:** `src/components/MarkdownContent.tsx`

- Creates a `showdown.Converter` with ST-matching options: `emoji`, `tables`, `strikethrough`, `simpleLineBreaks`, `literalMidWordUnderscores`, `parseImgDimensions`, `underline`
- Converts content string to HTML via `converter.makeHtml(content)`
- Sanitizes output with `DOMPurify.sanitize(html)`
- Renders via `dangerouslySetInnerHTML` with class `markdown-rendered`
- Applies `hljs.highlightElement()` to code blocks in a `useEffect`

## Integration

### BrainstormChat.tsx

Replace `<div className="message-content">{msg.content}</div>` with `<MarkdownContent content={msg.content} />` for **assistant messages only**. User messages remain plain text.

### ReviseSessionChat.tsx

Same pattern — assistant messages get `<MarkdownContent />`, user messages stay as plain text.

## CSS

Add to `main.scss`:
- Override `white-space: pre-wrap` to `normal` for `.markdown-rendered`
- Style h1-h4, ul/ol/li, pre/code, blockquote, table, a, strong/em
- Use ST theme variables for consistent look
- Style hljs code blocks with background/border/padding

## Scope

| Rendered as markdown | Stays as plain text |
|---|---|
| Assistant chat messages | User chat messages |
| | Initial context messages |
| | Message editing (raw text) |
