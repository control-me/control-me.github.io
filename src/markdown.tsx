
import Markup from 'preact-markup';
import marked from 'marked';
import highlighter from 'highlight.js';

const renderer = new marked.Renderer();
renderer.options = {
  highlight: function(code, lang) {
    const language = highlighter.getLanguage(lang) ? lang : 'plaintext';
    console.log(language,highlighter.highlight(code, { language }).value);
    return highlighter.highlight(code, { language }).value;
  },
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
}

export default function Markdown({markdown, markupOpts}: {markdown: string, markupOpts?: object}) {
  const markupOptions = markupOpts || {};

  const markdownOpts:  marked.MarkedOptions = {
    renderer,
  };

  return h(Markup, Object.assign({
    markup: marked(markdown, markdownOpts),
    trim: false,
    type: 'html',
  }, markupOptions));
}