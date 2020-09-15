'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = exports.getSanitizeHtml = void 0;

var _marked = _interopRequireDefault(require('../parser/marked'));

var _prismjs = _interopRequireDefault(require('prismjs'));

var _katex = _interopRequireDefault(require('katex'));

var _renderers = _interopRequireDefault(require('../renderers'));

var _githubMarkdown = _interopRequireDefault(require('github-markdown-css/github-markdown.css'));

var _exportStyle = _interopRequireDefault(require('../assets/styles/exportStyle.css'));

var _prism = _interopRequireDefault(require('prismjs/themes/prism.css'));

var _katex2 = _interopRequireDefault(require('katex/dist/katex.css'));

var _headerFooterStyle = _interopRequireDefault(require('../assets/styles/headerFooterStyle.css'));

var _config = require('../config');

var _utils = require('../utils');

var _emojis = require('../ui/emojis');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

const getSanitizeHtml = (markdown, options) => {
  const html = (0, _marked.default)(markdown, options);
  return (0, _utils.sanitize)(html, _config.EXPORT_DOMPURIFY_CONFIG);
};

exports.getSanitizeHtml = getSanitizeHtml;
const DIAGRAM_TYPE = ['mermaid', 'flowchart', 'sequence', 'vega-lite'];

class ExportHtml {
  constructor(markdown, muya) {
    _defineProperty(this, 'mathRenderer', (math, displayMode) => {
      this.mathRendererCalled = true;

      try {
        return _katex.default.renderToString(math, {
          displayMode
        });
      } catch (err) {
        return displayMode
          ? '<pre class="multiple-math invalid">\n'.concat(math, '</pre>\n')
          : '<span class="inline-math invalid" title="invalid math">'.concat(math, '</span>');
      }
    });

    this.markdown = markdown;
    this.muya = muya;
    this.exportContainer = null;
    this.mathRendererCalled = false;
  }

  async renderMermaid() {
    const codes = this.exportContainer.querySelectorAll('code.language-mermaid');

    for (const code of codes) {
      const preEle = code.parentNode;
      const mermaidContainer = document.createElement('div');
      mermaidContainer.innerHTML = code.innerHTML;
      mermaidContainer.classList.add('mermaid');
      preEle.replaceWith(mermaidContainer);
    }

    const mermaid = await (0, _renderers.default)('mermaid'); // We only export light theme, so set mermaid theme to `default`, in the future, we can choose whick theme to export.

    mermaid.initialize({
      theme: 'default'
    });
    mermaid.init(undefined, this.exportContainer.querySelectorAll('div.mermaid'));

    if (this.muya) {
      mermaid.initialize({
        theme: this.muya.options.mermaidTheme
      });
    }
  }

  async renderDiagram() {
    const selector = 'code.language-vega-lite, code.language-flowchart, code.language-sequence';
    const RENDER_MAP = {
      flowchart: await (0, _renderers.default)('flowchart'),
      sequence: await (0, _renderers.default)('sequence'),
      'vega-lite': await (0, _renderers.default)('vega-lite')
    };
    const codes = this.exportContainer.querySelectorAll(selector);

    for (const code of codes) {
      const rawCode = (0, _utils.unescapeHtml)(code.innerHTML);
      const functionType = /sequence/.test(code.className)
        ? 'sequence'
        : /flowchart/.test(code.className)
        ? 'flowchart'
        : 'vega-lite';
      const render = RENDER_MAP[functionType];
      const preParent = code.parentNode;
      const diagramContainer = document.createElement('div');
      diagramContainer.classList.add(functionType);
      preParent.replaceWith(diagramContainer);
      const options = {};

      if (functionType === 'sequence') {
        Object.assign(options, {
          theme: this.muya.options.sequenceTheme
        });
      } else if (functionType === 'vega-lite') {
        Object.assign(options, {
          actions: false,
          tooltip: false,
          renderer: 'svg',
          theme: 'latimes' // only render light theme
        });
      }

      try {
        if (functionType === 'flowchart' || functionType === 'sequence') {
          const diagram = render.parse(rawCode);
          diagramContainer.innerHTML = '';
          diagram.drawSVG(diagramContainer, options);
        }

        if (functionType === 'vega-lite') {
          await render(diagramContainer, JSON.parse(rawCode), options);
        }
      } catch (err) {
        diagramContainer.innerHTML = '< Invalid Diagram >';
      }
    }
  }

  // render pure html by marked
  async renderHtml() {
    this.mathRendererCalled = false;
    let html = (0, _marked.default)(this.markdown, {
      superSubScript: this.muya ? this.muya.options.superSubScript : false,
      footnote: this.muya ? this.muya.options.footnote : false,

      highlight(code, lang) {
        // Language may be undefined (GH#591)
        if (!lang) {
          return code;
        }

        if (DIAGRAM_TYPE.includes(lang)) {
          return code;
        }

        const grammar = _prismjs.default.languages[lang];

        if (!grammar) {
          console.warn('Unable to find grammar for "'.concat(lang, '".'));
          return code;
        }

        return _prismjs.default.highlight(code, grammar, lang);
      },

      emojiRenderer(emoji) {
        const validate = (0, _emojis.validEmoji)(emoji);

        if (validate) {
          return validate.emoji;
        } else {
          return ':'.concat(emoji, ':');
        }
      },

      mathRenderer: this.mathRenderer
    });
    html = (0, _utils.sanitize)(html, _config.EXPORT_DOMPURIFY_CONFIG);
    const exportContainer = (this.exportContainer = document.createElement('div'));
    exportContainer.classList.add('ag-render-container');
    exportContainer.innerHTML = html;
    document.body.appendChild(exportContainer); // render only render the light theme of mermaid and diragram...

    await this.renderMermaid();
    await this.renderDiagram();
    let result = exportContainer.innerHTML;
    exportContainer.remove(); // hack to add arrow marker to output html

    const pathes = document.querySelectorAll('path[id^=raphael-marker-]');
    const def = '<defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">';
    result = result.replace(def, () => {
      let str = '';

      for (const path of pathes) {
        str += path.outerHTML;
      }

      return ''.concat(def).concat(str);
    });
    this.exportContainer = null;
    return result;
  }
  /**
   * Get HTML with style
   *
   * @param {*} options Document options
   */

  async generate(options) {
    const { printOptimization } = options; // WORKAROUND: Hide Prism.js style when exporting or printing. Otherwise the background color is white in the dark theme.

    const highlightCssStyle = printOptimization
      ? '@media print { '.concat(_prism.default, ' }')
      : _prism.default;

    const html = this._prepareHtml(await this.renderHtml(), options);

    const katexCssStyle = this.mathRendererCalled ? _katex2.default : '';
    this.mathRendererCalled = false; // `extraCss` may changed in the mean time.

    const { title, extraCss } = options;
    return '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>'
      .concat(
        (0, _utils.sanitize)(title, _config.EXPORT_DOMPURIFY_CONFIG),
        '</title>\n  <style>\n  '
      )
      .concat(_githubMarkdown.default, '\n  </style>\n  <style>\n  ')
      .concat(highlightCssStyle, '\n  </style>\n  <style>\n  ')
      .concat(
        katexCssStyle,
        '\n  </style>\n  <style>\n    .markdown-body {\n      box-sizing: border-box;\n      min-width: 200px;\n      max-width: 980px;\n      margin: 0 auto;\n      padding: 45px;\n    }\n\n    @media not print {\n      .markdown-body {\n        padding: 45px;\n      }\n\n      @media (max-width: 767px) {\n        .markdown-body {\n          padding: 15px;\n        }\n      }\n    }\n\n    .hf-container {\n      color: #24292e;\n      line-height: 1.3;\n    }\n\n    .markdown-body .highlight pre,\n    .markdown-body pre {\n      white-space: pre-wrap;\n    }\n    .markdown-body table {\n      display: table;\n    }\n    .markdown-body img[data-align="center"] {\n      display: block;\n      margin: 0 auto;\n    }\n    .markdown-body img[data-align="right"] {\n      display: block;\n      margin: 0 0 0 auto;\n    }\n    .markdown-body li.task-list-item {\n      list-style-type: none;\n    }\n    .markdown-body li > [type=checkbox] {\n      margin: 0 0 0 -1.3em;\n    }\n    .markdown-body input[type="checkbox"] ~ p {\n      margin-top: 0;\n      display: inline-block;\n    }\n    .markdown-body ol ol,\n    .markdown-body ul ol {\n      list-style-type: decimal;\n    }\n    .markdown-body ol ol ol,\n    .markdown-body ol ul ol,\n    .markdown-body ul ol ol,\n    .markdown-body ul ul ol {\n      list-style-type: decimal;\n    }\n  </style>\n  <style>'
      )
      .concat(_exportStyle.default, '</style>\n  <style>')
      .concat(extraCss, '</style>\n</head>\n<body>\n  ')
      .concat(html, '\n</body>\n</html>');
  }
  /**
   * @private
   *
   * @param {string} html The converted HTML text.
   * @param {*} options The export options.
   */

  _prepareHtml(html, options) {
    const { header, footer } = options;
    const appendHeaderFooter = !!header || !!footer;

    if (!appendHeaderFooter) {
      return createMarkdownArticle(html);
    }

    if (!options.extraCss) {
      options.extraCss = _headerFooterStyle.default;
    } else {
      options.extraCss = _headerFooterStyle.default + options.extraCss;
    }

    let output = HF_TABLE_START;

    if (header) {
      output += createTableHeader(options);
    }

    if (footer) {
      output += HF_TABLE_FOOTER;
      output = createRealFooter(options) + output;
    }

    output = output + createTableBody(html) + HF_TABLE_END;
    return (0, _utils.sanitize)(output, _config.EXPORT_DOMPURIFY_CONFIG);
  }
} // Variables and function to generate the header and footer.

const HF_TABLE_START = '<table class="page-container">';

const createTableBody = (html) => {
  return '<tbody><tr><td>\n  <div class="main-container">\n    '.concat(
    createMarkdownArticle(html),
    '\n  </div>\n</td></tr></tbody>'
  );
};

const HF_TABLE_END = '</table>'; /// The header at is shown at the top.

const createTableHeader = (options) => {
  const { header, headerFooterStyled } = options;
  const { type, left, center, right } = header;
  let headerClass = type === 1 ? 'single' : '';
  headerClass += getHeaderFooterStyledClass(headerFooterStyled);
  return '<thead class="page-header '
    .concat(
      headerClass,
      '"><tr><th>\n  <div class="hf-container">\n    <div class="header-content-left">'
    )
    .concat(left, '</div>\n    <div class="header-content">')
    .concat(center, '</div>\n    <div class="header-content-right">')
    .concat(right, '</div>\n  </div>\n</th></tr></thead>');
}; /// Fake footer to reserve space.

const HF_TABLE_FOOTER =
  '<tfoot class="page-footer-fake"><tr><td>\n  <div class="hf-container">\n    &nbsp;\n  </div>\n</td></tr></tfoot>'; /// The real footer at is shown at the bottom.

const createRealFooter = (options) => {
  const { footer, headerFooterStyled } = options;
  const { type, left, center, right } = footer;
  let footerClass = type === 1 ? 'single' : '';
  footerClass += getHeaderFooterStyledClass(headerFooterStyled);
  return '<div class="page-footer '
    .concat(footerClass, '">\n  <div class="hf-container">\n    <div class="footer-content-left">')
    .concat(left, '</div>\n    <div class="footer-content">')
    .concat(center, '</div>\n    <div class="footer-content-right">')
    .concat(right, '</div>\n  </div>\n</div>');
}; /// Generate the mardown article HTML.

const createMarkdownArticle = (html) => {
  return '<article class="markdown-body">'.concat(html, '</article>');
}; /// Return the class whether a header/footer should be styled.

const getHeaderFooterStyledClass = (value) => {
  if (value === undefined) {
    // Prefer theme settings.
    return '';
  }

  return !value ? ' simple' : ' styled';
};

var _default = ExportHtml;
exports.default = _default;
