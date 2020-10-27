"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _selection = _interopRequireDefault(require("../selection"));

var _config = require("../config");

var _utils = require("../utils");

var _exportHtml = require("../utils/exportHtml");

var _exportMarkdown = _interopRequireDefault(require("../utils/exportMarkdown"));

var _marked = _interopRequireDefault(require("../parser/marked"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const copyCutCtrl = ContentState => {
  ContentState.prototype.docCutHandler = function (event) {
    const {
      selectedTableCells
    } = this;

    if (selectedTableCells) {
      event.preventDefault();
      return this.deleteSelectedTableCells(true);
    }
  };

  ContentState.prototype.cutHandler = function () {
    if (this.selectedTableCells) {
      return;
    }

    const {
      selectedImage
    } = this;

    if (selectedImage) {
      const {
        key,
        token
      } = selectedImage;
      this.deleteImage({
        key,
        token
      });
      return;
    }

    const {
      start,
      end
    } = _selection.default.getCursorRange();

    if (!start || !end) {
      return;
    }

    const startBlock = this.getBlock(start.key);
    const endBlock = this.getBlock(end.key);
    startBlock.text = startBlock.text.substring(0, start.offset) + endBlock.text.substring(end.offset);

    if (start.key !== end.key) {
      this.removeBlocks(startBlock, endBlock);
    }

    this.cursor = {
      start,
      end: start
    };
    this.checkInlineUpdate(startBlock);
    this.partialRender();
  };

  ContentState.prototype.getClipBoradData = function () {
    const {
      start,
      end
    } = _selection.default.getCursorRange();

    if (!start || !end) {
      return {
        html: '',
        text: ''
      };
    }

    if (start.key === end.key) {
      const startBlock = this.getBlock(start.key);
      const {
        type,
        text,
        functionType
      } = startBlock; // Fix issue #942

      if (type === 'span' && functionType === 'codeContent') {
        const selectedText = (0, _utils.escapeHtml)(text.substring(start.offset, end.offset));
        return {
          html: (0, _marked.default)(selectedText, this.muya.options),
          text: selectedText
        };
      }
    }

    const html = _selection.default.getSelectionHtml();

    const wrapper = document.createElement('div');
    wrapper.innerHTML = html;
    const removedElements = wrapper.querySelectorAll(".".concat(_config.CLASS_OR_ID.AG_TOOL_BAR, ",\n      .").concat(_config.CLASS_OR_ID.AG_MATH_RENDER, ",\n      .").concat(_config.CLASS_OR_ID.AG_RUBY_RENDER, ",\n      .").concat(_config.CLASS_OR_ID.AG_HTML_PREVIEW, ",\n      .").concat(_config.CLASS_OR_ID.AG_MATH_PREVIEW, ",\n      .").concat(_config.CLASS_OR_ID.AG_COPY_REMOVE, ",\n      .").concat(_config.CLASS_OR_ID.AG_LANGUAGE_INPUT, ",\n      .").concat(_config.CLASS_OR_ID.AG_HTML_TAG, " br,\n      .").concat(_config.CLASS_OR_ID.AG_FRONT_ICON));

    for (const e of removedElements) {
      e.remove();
    } // Fix #1678 copy task list, and the first list item is not task list item.


    const taskListItems = wrapper.querySelectorAll('li.ag-task-list-item');

    for (const item of taskListItems) {
      const firstChild = item.firstElementChild;

      if (firstChild && firstChild.nodeName !== 'INPUT') {
        const originItem = document.querySelector("#".concat(item.id));
        let checked = false;

        if (originItem && originItem.firstElementChild && originItem.firstElementChild.nodeName === 'INPUT') {
          checked = originItem.firstElementChild.checked;
        }

        const input = document.createElement('input');
        input.setAttribute('type', 'checkbox');

        if (checked) {
          input.setAttribute('checked', true);
        }

        item.insertBefore(input, firstChild);
      }
    }

    const images = wrapper.querySelectorAll('span.ag-inline-image img');

    for (const image of images) {
      const src = image.getAttribute('src');
      let originSrc = null;

      for (const [sSrc, tSrc] of this.stateRender.urlMap.entries()) {
        if (tSrc === src) {
          originSrc = sSrc;
          break;
        }
      }

      if (originSrc) {
        image.setAttribute('src', originSrc);
      }
    }

    const hrs = wrapper.querySelectorAll('[data-role=hr]');

    for (const hr of hrs) {
      hr.replaceWith(document.createElement('hr'));
    }

    const headers = wrapper.querySelectorAll('[data-head]');

    for (const header of headers) {
      const p = document.createElement('p');
      p.textContent = header.textContent;
      header.replaceWith(p);
    } // replace inline rule element: code, a, strong, em, del, auto_link to span element
    // in order to escape turndown translation


    const inlineRuleElements = wrapper.querySelectorAll("a.".concat(_config.CLASS_OR_ID.AG_INLINE_RULE, ",\n      code.").concat(_config.CLASS_OR_ID.AG_INLINE_RULE, ",\n      strong.").concat(_config.CLASS_OR_ID.AG_INLINE_RULE, ",\n      em.").concat(_config.CLASS_OR_ID.AG_INLINE_RULE, ",\n      del.").concat(_config.CLASS_OR_ID.AG_INLINE_RULE));

    for (const e of inlineRuleElements) {
      const span = document.createElement('span');
      span.textContent = e.textContent;
      e.replaceWith(span);
    }

    const aLinks = wrapper.querySelectorAll(".".concat(_config.CLASS_OR_ID.AG_A_LINK));

    for (const l of aLinks) {
      const span = document.createElement('span');
      span.innerHTML = l.innerHTML;
      l.replaceWith(span);
    }

    const codefense = wrapper.querySelectorAll('pre[data-role$=\'code\']');

    for (const cf of codefense) {
      const id = cf.id;
      const block = this.getBlock(id);
      const language = block.lang || '';
      const codeContent = cf.querySelector('.ag-code-content');
      const value = (0, _utils.escapeHtml)(codeContent.textContent);
      cf.innerHTML = "<code class=\"language-".concat(language, "\">").concat(value, "</code>");
    }

    const tightListItem = wrapper.querySelectorAll('.ag-tight-list-item');

    for (const li of tightListItem) {
      for (const item of li.childNodes) {
        if (item.tagName === 'P' && item.childElementCount === 1 && item.classList.contains('ag-paragraph')) {
          li.replaceChild(item.firstElementChild, item);
        }
      }
    }

    const htmlBlock = wrapper.querySelectorAll('figure[data-role=\'HTML\']');

    for (const hb of htmlBlock) {
      const codeContent = hb.querySelector('.ag-code-content');
      const pre = document.createElement('pre');
      pre.textContent = codeContent.textContent;
      hb.replaceWith(pre);
    } // Just work for turndown, turndown will add `leading` and `traling` space in line-break.


    const lineBreaks = wrapper.querySelectorAll('span.ag-soft-line-break, span.ag-hard-line-break');

    for (const b of lineBreaks) {
      b.innerHTML = '';
    }

    const mathBlock = wrapper.querySelectorAll('figure.ag-container-block');

    for (const mb of mathBlock) {
      const preElement = mb.querySelector('pre[data-role]');
      const functionType = preElement.getAttribute('data-role');
      const codeContent = mb.querySelector('.ag-code-content');
      const value = codeContent.textContent;
      let pre;

      switch (functionType) {
        case 'multiplemath':
          pre = document.createElement('pre');
          pre.classList.add('multiple-math');
          pre.textContent = value;
          mb.replaceWith(pre);
          break;

        case 'mermaid':
        case 'flowchart':
        case 'sequence':
        case 'vega-lite':
          pre = document.createElement('pre');
          pre.innerHTML = "<code class=\"language-".concat(functionType, "\">").concat(value, "</code>");
          mb.replaceWith(pre);
          break;
      }
    }

    let htmlData = wrapper.innerHTML; // const textData = escapeHtml(this.htmlToMarkdown(htmlData))

    const textData = this.htmlToMarkdown(htmlData);
    htmlData = (0, _marked.default)(textData);
    return {
      html: htmlData,
      text: textData
    };
  };

  ContentState.prototype.docCopyHandler = function (event) {
    const {
      selectedTableCells
    } = this;

    if (selectedTableCells) {
      event.preventDefault();
      const {
        row,
        column,
        cells
      } = selectedTableCells;
      const figureBlock = this.createBlock('figure', {
        functionType: 'table'
      });
      const tableContents = [];
      let i;
      let j;

      for (i = 0; i < row; i++) {
        const rowWrapper = [];

        for (j = 0; j < column; j++) {
          const cell = cells[i * column + j];
          rowWrapper.push({
            text: cell.text,
            align: cell.align
          });
        }

        tableContents.push(rowWrapper);
      }

      const table = this.createTableInFigure({
        rows: row,
        columns: column
      }, tableContents);
      this.appendChild(figureBlock, table);
      const listIndentation = this.listIndentation;
      const markdown = new _exportMarkdown.default([figureBlock], listIndentation).generate();
      event.clipboardData.setData('text/html', '');
      event.clipboardData.setData('text/plain', markdown);
    }
  };

  ContentState.prototype.copyHandler = function (event, type, copyInfo = null) {
    if (this.selectedTableCells) {
      // Hand over to docCopyHandler
      return;
    }

    event.preventDefault();
    const {
      selectedImage
    } = this;

    if (selectedImage) {
      const {
        token
      } = selectedImage;
      event.clipboardData.setData('text/html', token.raw);
      event.clipboardData.setData('text/plain', token.raw);
      return;
    }

    const {
      html,
      text
    } = this.getClipBoradData();

    switch (type) {
      case 'normal':
        {
          event.clipboardData.setData('text/html', html);
          event.clipboardData.setData('text/plain', text);
          break;
        }

      case 'copyAsMarkdown':
        {
          event.clipboardData.setData('text/html', '');
          event.clipboardData.setData('text/plain', text);
          break;
        }

      case 'copyAsHtml':
        {
          event.clipboardData.setData('text/html', '');
          event.clipboardData.setData('text/plain', (0, _exportHtml.getSanitizeHtml)(text, {
            superSubScript: this.muya.options.superSubScript
          }));
          break;
        }

      case 'copyBlock':
        {
          const block = typeof copyInfo === 'string' ? this.getBlock(copyInfo) : copyInfo;
          if (!block) return;
          const anchor = this.getAnchor(block);
          const listIndentation = this.listIndentation;
          const markdown = new _exportMarkdown.default([anchor], listIndentation).generate();
          event.clipboardData.setData('text/html', '');
          event.clipboardData.setData('text/plain', markdown);
          break;
        }

      case 'copyCodeContent':
        {
          const codeContent = copyInfo;

          if (typeof codeContent !== 'string') {
            return;
          }

          event.clipboardData.setData('text/html', '');
          event.clipboardData.setData('text/plain', codeContent);
        }
    }
  };
};

var _default = copyCutCtrl;
exports.default = _default;