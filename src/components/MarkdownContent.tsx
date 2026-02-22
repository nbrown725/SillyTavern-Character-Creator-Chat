import { FC, useEffect, useRef, useMemo } from 'react';

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
    ref.current.querySelectorAll('pre').forEach((pre) => {
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

  return (
    <div ref={ref} className="message-content markdown-rendered" dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
  );
};
