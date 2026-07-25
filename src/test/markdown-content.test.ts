// @vitest-environment jsdom
import { describe, it, expect, beforeAll } from 'vitest';
import { createElement as h, useState, act, FC } from 'react';
import { createRoot } from 'react-dom/client';

/**
 * MarkdownContent enhances its rendered html imperatively (syntax highlighting + a copy button per
 * code block). Those enhancements used to be wiped by any ancestor re-render, because React
 * re-applies dangerouslySetInnerHTML every time. Guard that they survive re-renders.
 */

let MarkdownContent: FC<{ content: string }>;

beforeAll(async () => {
  (globalThis as any).IS_REACT_ACT_ENVIRONMENT = true;
  (globalThis as any).SillyTavern = {
    libs: {
      showdown: {
        Converter: class {
          makeHtml(md: string) {
            // Enough of showdown's behaviour for this test: fenced block -> <pre><code>
            return md.replace(/```\n([\s\S]*?)```/g, (_m, code) => `<pre><code>${code}</code></pre>`);
          }
        },
      },
      DOMPurify: { sanitize: (html: string) => html },
      hljs: {
        highlightElement: (el: HTMLElement) => el.setAttribute('data-highlighted', 'yes'),
      },
    },
  };

  MarkdownContent = (await import('../components/MarkdownContent.js')).MarkdownContent;
});

const CONTENT = 'text\n```\nconst a = 1;\n```';

const renderInParent = async () => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);

  const Parent = () => {
    const [n, setN] = useState(0);
    return h(
      'div',
      null,
      h('button', { id: 'bump', onClick: () => setN((v) => v + 1) }, `bump ${n}`),
      h(MarkdownContent, { content: CONTENT }),
    );
  };

  await act(async () => {
    root.render(h(Parent));
  });

  return {
    container,
    rerenderParent: () =>
      act(async () => {
        (container.querySelector('#bump') as HTMLButtonElement).click();
      }),
  };
};

describe('MarkdownContent', () => {
  it('adds a copy button and highlights code blocks', async () => {
    const { container } = await renderInParent();

    expect(container.querySelectorAll('.code-copy-button')).toHaveLength(1);
    expect(container.querySelector('code')?.getAttribute('data-highlighted')).toBe('yes');
  });

  it('keeps the copy button and highlighting when an ancestor re-renders', async () => {
    const { container, rerenderParent } = await renderInParent();
    await rerenderParent();

    expect(container.querySelectorAll('.code-copy-button')).toHaveLength(1);
    expect(container.querySelector('code')?.getAttribute('data-highlighted')).toBe('yes');
  });

  it('rebuilds the enhancements when the content changes', async () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);

    await act(async () => {
      root.render(h(MarkdownContent, { content: CONTENT }));
    });
    await act(async () => {
      root.render(h(MarkdownContent, { content: '```\nconst b = 2;\n```' }));
    });

    expect(container.querySelectorAll('.code-copy-button')).toHaveLength(1);
    expect(container.querySelector('code')?.textContent).toContain('const b = 2;');
    expect(container.querySelector('code')?.getAttribute('data-highlighted')).toBe('yes');
  });
});
