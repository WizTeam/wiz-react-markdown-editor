"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderLeafBlock;

var _katex = _interopRequireDefault(require("katex"));

var _prism = _interopRequireWildcard(require("../../../prism/"));

var _config = require("../../../config");

var _ = require("../../");

var _utils = require("../../../utils");

var _snabbdom = require("../snabbdom");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// todo@jocs any better solutions?
const MARKER_HASK = {
  '<': "%".concat((0, _utils.getLongUniqueId)(), "%"),
  '>': "%".concat((0, _utils.getLongUniqueId)(), "%"),
  '"': "%".concat((0, _utils.getLongUniqueId)(), "%"),
  "'": "%".concat((0, _utils.getLongUniqueId)(), "%")
};

const getHighlightHtml = (text, highlights, escape = false, handleLineEnding = false) => {
  let code = '';
  let pos = 0;

  const getEscapeHTML = (className, content) => {
    return "".concat(MARKER_HASK['<'], "span class=").concat(MARKER_HASK['"']).concat(className).concat(MARKER_HASK['"']).concat(MARKER_HASK['>']).concat(content).concat(MARKER_HASK['<'], "/span").concat(MARKER_HASK['>']);
  };

  for (const highlight of highlights) {
    const {
      start,
      end,
      active
    } = highlight;
    code += text.substring(pos, start);
    const className = active ? 'ag-highlight' : 'ag-selection';
    let highlightContent = text.substring(start, end);

    if (handleLineEnding && text.endsWith('\n') && end === text.length) {
      highlightContent = highlightContent.substring(start, end - 1) + (escape ? getEscapeHTML('ag-line-end', '\n') : '<span class="ag-line-end">\n</span>');
    }

    code += escape ? getEscapeHTML(className, highlightContent) : "<span class=\"".concat(className, "\">").concat(highlightContent, "</span>");
    pos = end;
  }

  if (pos !== text.length) {
    if (handleLineEnding && text.endsWith('\n')) {
      code += text.substring(pos, text.length - 1) + (escape ? getEscapeHTML('ag-line-end', '\n') : '<span class="ag-line-end">\n</span>');
    } else {
      code += text.substring(pos);
    }
  }

  return code;
};

const hasReferenceToken = tokens => {
  let result = false;

  const travel = tokens => {
    for (const token of tokens) {
      if (/reference_image|reference_link/.test(token.type)) {
        result = true;
        break;
      }

      if (Array.isArray(token.children) && token.children.length) {
        travel(token.children);
      }
    }
  };

  travel(tokens);
  return result;
};

function renderLeafBlock(parent, block, activeBlocks, matches, useCache = false) {
  const {
    loadMathMap
  } = this;
  const {
    cursor
  } = this.muya.contentState;
  let selector = this.getSelector(block, activeBlocks); // highlight search key in block

  const highlights = matches.filter(m => m.key === block.key);
  const {
    text,
    type,
    checked,
    key,
    lang,
    functionType,
    editable
  } = block;
  const data = {
    props: {},
    attrs: {},
    dataset: {},
    style: {}
  };
  let children = '';

  if (text) {
    let tokens = [];

    if (highlights.length === 0 && this.tokenCache.has(text)) {
      tokens = this.tokenCache.get(text);
    } else if (_config.HAS_TEXT_BLOCK_REG.test(type) && functionType !== 'codeContent' && functionType !== 'languageInput') {
      const hasBeginRules = /paragraphContent|atxLine/.test(functionType);
      tokens = (0, _.tokenizer)(text, {
        highlights,
        hasBeginRules,
        labels: this.labels,
        options: this.muya.options
      });
      const hasReferenceTokens = hasReferenceToken(tokens);

      if (highlights.length === 0 && useCache && _config.DEVICE_MEMORY >= 4 && !hasReferenceTokens) {
        this.tokenCache.set(text, tokens);
      }
    }

    children = tokens.reduce((acc, token) => [...acc, ...this[(0, _utils.snakeToCamel)(token.type)](_snabbdom.h, cursor, block, token)], []);
  }

  if (editable === false) {
    Object.assign(data.attrs, {
      spellcheck: 'false',
      contenteditable: 'false'
    });
  }

  if (type === 'div') {
    const code = this.codeCache.get(block.preSibling);

    switch (functionType) {
      case 'html':
        {
          selector += ".".concat(_config.CLASS_OR_ID.AG_HTML_PREVIEW);
          Object.assign(data.attrs, {
            spellcheck: 'false'
          });
          const htmlContent = (0, _utils.sanitize)(code, _config.PREVIEW_DOMPURIFY_CONFIG); // handle empty html bock

          if (/^<([a-z][a-z\d]*)[^>]*?>(\s*)<\/\1>$/.test(htmlContent.trim())) {
            children = (0, _snabbdom.htmlToVNode)('<div class="ag-empty">&lt;Empty HTML Block&gt;</div>');
          } else {
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlContent, 'text/html');
            const imgs = doc.documentElement.querySelectorAll('img');

            for (const img of imgs) {
              const src = img.getAttribute('src');
              const imageInfo = (0, _utils.getImageInfo)(src);
              img.setAttribute('src', imageInfo.src);
            }

            children = (0, _snabbdom.htmlToVNode)(doc.documentElement.querySelector('body').innerHTML);
          }

          break;
        }

      case 'multiplemath':
        {
          const key = "".concat(code, "_display_math");
          selector += ".".concat(_config.CLASS_OR_ID.AG_CONTAINER_PREVIEW);
          Object.assign(data.attrs, {
            spellcheck: 'false'
          });

          if (code === '') {
            children = '< Empty Mathematical Formula >';
            selector += ".".concat(_config.CLASS_OR_ID.AG_EMPTY);
          } else if (loadMathMap.has(key)) {
            children = loadMathMap.get(key);
          } else {
            try {
              const html = _katex.default.renderToString(code, {
                displayMode: true
              });

              children = (0, _snabbdom.htmlToVNode)(html);
              loadMathMap.set(key, children);
            } catch (err) {
              children = '< Invalid Mathematical Formula >';
              selector += ".".concat(_config.CLASS_OR_ID.AG_MATH_ERROR);
            }
          }

          break;
        }

      case 'mermaid':
        {
          selector += ".".concat(_config.CLASS_OR_ID.AG_CONTAINER_PREVIEW);
          Object.assign(data.attrs, {
            spellcheck: 'false'
          });

          if (code === '') {
            children = '< Empty Mermaid Block >';
            selector += ".".concat(_config.CLASS_OR_ID.AG_EMPTY);
          } else {
            children = 'Loading...';
            this.mermaidCache.set("#".concat(block.key), {
              code,
              functionType
            });
          }

          break;
        }

      case 'flowchart':
      case 'sequence':
      case 'vega-lite':
        {
          selector += ".".concat(_config.CLASS_OR_ID.AG_CONTAINER_PREVIEW);
          Object.assign(data.attrs, {
            spellcheck: 'false'
          });

          if (code === '') {
            children = '< Empty Diagram Block >';
            selector += ".".concat(_config.CLASS_OR_ID.AG_EMPTY);
          } else {
            children = 'Loading...';
            this.diagramCache.set("#".concat(block.key), {
              code,
              functionType
            });
          }

          break;
        }
    }
  } else if (type === 'input') {
    const {
      fontSize,
      lineHeight
    } = this.muya.options;
    Object.assign(data.attrs, {
      type: 'checkbox',
      style: "top: ".concat((fontSize * lineHeight / 2 - 11).toFixed(2), "px")
    });
    selector = "".concat(type, "#").concat(key, ".").concat(_config.CLASS_OR_ID.AG_TASK_LIST_ITEM_CHECKBOX);

    if (checked) {
      Object.assign(data.attrs, {
        checked: true
      });
      selector += ".".concat(_config.CLASS_OR_ID.AG_CHECKBOX_CHECKED);
    }

    children = '';
  } else if (type === 'span' && functionType === 'codeContent') {
    const code = (0, _utils.escapeHtml)(getHighlightHtml(text, highlights, true, true)).replace(new RegExp(MARKER_HASK['<'], 'g'), '<').replace(new RegExp(MARKER_HASK['>'], 'g'), '>').replace(new RegExp(MARKER_HASK['"'], 'g'), '"').replace(new RegExp(MARKER_HASK["'"], 'g'), "'"); // transfrom alias to original language

    const transformedLang = (0, _prism.transfromAliasToOrigin)([lang])[0];

    if (transformedLang && /\S/.test(code) && _prism.loadedCache.has(transformedLang)) {
      const wrapper = document.createElement('div');
      wrapper.classList.add("language-".concat(transformedLang));
      wrapper.innerHTML = code;

      _prism.default.highlightElement(wrapper, false, function () {
        const highlightedCode = this.innerHTML;
        selector += ".language-".concat(transformedLang);
        children = (0, _snabbdom.htmlToVNode)(highlightedCode);
      });
    } else {
      children = (0, _snabbdom.htmlToVNode)(code);
    }
  } else if (type === 'span' && functionType === 'languageInput') {
    const html = getHighlightHtml(text, highlights);
    children = (0, _snabbdom.htmlToVNode)(html);
  } else if (type === 'span' && functionType === 'footnoteInput') {
    Object.assign(data.attrs, {
      spellcheck: 'false'
    });
  }

  if (!block.parent) {
    return (0, _snabbdom.h)(selector, data, [this.renderIcon(block), ...children]);
  } else {
    return (0, _snabbdom.h)(selector, data, children);
  }
}