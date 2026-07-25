import { FC, useLayoutEffect, useRef, useMemo } from 'react';

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

  // The markdown is written imperatively instead of via dangerouslySetInnerHTML: React re-applies
  // that prop on every re-render (the `{ __html }` object is a fresh identity each time), which
  // replaced the subtree and silently dropped the highlighting and copy buttons added below
  // whenever an ancestor re-rendered — switching tabs in the main popup, for instance. Owning the
  // subtree keeps React out of it, so the enhancements only ever get rebuilt when the html changes.
  useLayoutEffect(() => {
    const container = ref.current;
    if (!container) return;
    container.innerHTML = sanitizedHtml;

    container.querySelectorAll('pre').forEach((pre) => {
      const codeEl = pre.querySelector('code');
      if (codeEl) {
        hljs.highlightElement(codeEl as HTMLElement);
      }

      if (pre.querySelector('.code-copy-button')) return;

      const btn = document.createElement('button');
      btn.className = 'code-copy-button';
      btn.title = 'Copy code';
      btn.innerHTML = '<i class="fa-solid fa-clipboard"></i>';
      btn.addEventListener('click', () => {
        const text = pre.querySelector('code')?.textContent ?? '';
        navigator.clipboard.writeText(text);
        btn.innerHTML = '<i class="fa-solid fa-check"></i>';
        setTimeout(() => {
          btn.innerHTML = '<i class="fa-solid fa-clipboard"></i>';
        }, 1500);
      });
      pre.style.position = 'relative';
      pre.appendChild(btn);
    });
  }, [sanitizedHtml]);

  return <div ref={ref} className="message-content markdown-rendered" />;
};
