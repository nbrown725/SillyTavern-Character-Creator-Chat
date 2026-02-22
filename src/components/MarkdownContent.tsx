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
    const codeBlocks = ref.current.querySelectorAll('pre code');
    codeBlocks.forEach((block) => {
      hljs.highlightElement(block as HTMLElement);
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
