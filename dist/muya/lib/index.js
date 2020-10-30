"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _contentState = _interopRequireDefault(require("./contentState"));

var _event = _interopRequireDefault(require("./eventHandler/event"));

var _mouseEvent = _interopRequireDefault(require("./eventHandler/mouseEvent"));

var _clipboard = _interopRequireDefault(require("./eventHandler/clipboard"));

var _keyboard = _interopRequireDefault(require("./eventHandler/keyboard"));

var _dragDrop = _interopRequireDefault(require("./eventHandler/dragDrop"));

var _resize = _interopRequireDefault(require("./eventHandler/resize"));

var _clickEvent = _interopRequireDefault(require("./eventHandler/clickEvent"));

var _config = require("./config");

var _utils = require("./utils");

var _exportMarkdown = _interopRequireDefault(require("./utils/exportMarkdown"));

var _exportHtml = _interopRequireDefault(require("./utils/exportHtml"));

var _tooltip = _interopRequireDefault(require("./ui/tooltip"));

require("./assets/styles/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Muya {
  static use(plugin, options = {}) {
    this.plugins.push({
      plugin,
      options
    });
  }

  constructor(container, options) {
    _defineProperty(this, "dispatchChange", () => {
      const {
        eventCenter
      } = this;
      const markdown = this.markdown = this.getMarkdown();
      const wordCount = this.getWordCount(markdown);
      const cursor = this.getCursor();
      const history = this.getHistory();
      const toc = this.getTOC();
      eventCenter.dispatch('change', {
        markdown,
        wordCount,
        cursor,
        history,
        toc
      });
    });

    _defineProperty(this, "dispatchSelectionChange", () => {
      const selectionChanges = this.contentState.selectionChange();
      this.eventCenter.dispatch('selectionChange', selectionChanges);
    });

    _defineProperty(this, "dispatchSelectionFormats", () => {
      const {
        formats
      } = this.contentState.selectionFormats();
      this.eventCenter.dispatch('selectionFormats', formats);
    });

    this.options = Object.assign({}, _config.MUYA_DEFAULT_OPTION, options);
    const {
      markdown: _markdown
    } = this.options;
    this.markdown = _markdown;
    this.container = getContainer(container, this.options);
    this.eventCenter = new _event.default();
    this.tooltip = new _tooltip.default(this); // UI plugins

    if (Muya.plugins.length) {
      for (const {
        plugin: Plugin,
        options: opts
      } of Muya.plugins) {
        this[Plugin.pluginName] = new Plugin(this, opts);
      }
    }

    this.contentState = new _contentState.default(this, this.options);
    this.clipboard = new _clipboard.default(this);
    this.clickEvent = new _clickEvent.default(this);
    this.keyboard = new _keyboard.default(this);
    this.dragdrop = new _dragDrop.default(this);
    this.resize = new _resize.default(this);
    this.mouseEvent = new _mouseEvent.default(this);
    this.CLASS_OR_ID = (0, _config.getClassOrId)();
    this.init();
  }

  init() {
    const {
      container,
      contentState,
      eventCenter
    } = this;
    contentState.stateRender.setContainer(container.children[0]);
    eventCenter.subscribe('stateChange', this.dispatchChange);
    const {
      markdown
    } = this;
    const {
      focusMode
    } = this.options;
    this.setMarkdown(markdown);
    this.setFocusMode(focusMode, true);
    this.mutationObserver();
    eventCenter.attachDOMEvent(container, 'focus', () => {
      eventCenter.dispatch('focus');
    });
    eventCenter.attachDOMEvent(container, 'blur', () => {
      eventCenter.dispatch('blur');
    });
  }

  mutationObserver() {
    // Select the node that will be observed for mutations
    const {
      container,
      eventCenter
    } = this; // Options for the observer (which mutations to observe)

    const config = {
      childList: true,
      subtree: true
    }; // Callback function to execute when mutations are observed

    const callback = (mutationsList, observer) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          const {
            removedNodes,
            target
          } = mutation; // If the code executes any of the following `if` statements, the editor has gone wrong.
          // need to report bugs.

          if (removedNodes && removedNodes.length) {
            const hasTable = Array.from(removedNodes).some(node => node.nodeType === 1 && node.closest('table.ag-paragraph'));

            if (hasTable) {
              eventCenter.dispatch('crashed');
              console.warn('There was a problem with the table deletion.');
            }
          }

          if (target.getAttribute('id') === this.CLASS_OR_ID.AG_EDITOR_ID && target.childElementCount === 0) {
            // TODO: the editor can not be input any more. report bugs and recovery...
            eventCenter.dispatch('crashed');
            console.warn('editor crashed, and can not be input any more.');
          }
        }
      }
    }; // Create an observer instance linked to the callback function


    const observer = new MutationObserver(callback); // Start observing the target node for configured mutations

    observer.observe(container, config);
  }

  getMarkdown() {
    const blocks = this.contentState.getBlocks();
    const listIndentation = this.contentState.listIndentation;
    return new _exportMarkdown.default(blocks, listIndentation).generate();
  }

  getHistory() {
    return this.contentState.getHistory();
  }

  getTOC() {
    return this.contentState.getTOC();
  }

  setHistory(history) {
    return this.contentState.setHistory(history);
  }

  clearHistory() {
    return this.contentState.history.clearHistory();
  }

  exportStyledHTML(options) {
    const {
      markdown
    } = this;
    return new _exportHtml.default(markdown, this).generate(options);
  }

  exportHtml() {
    const {
      markdown
    } = this;
    return new _exportHtml.default(markdown, this).renderHtml();
  }

  getWordCount(markdown) {
    return (0, _utils.wordCount)(markdown);
  }

  getCursor() {
    return this.contentState.getCodeMirrorCursor();
  }

  setMarkdown(markdown, cursor, isRenderCursor = true) {
    let newMarkdown = markdown;
    let isValid = false;

    if (cursor && cursor.anchor && cursor.focus) {
      const cursorInfo = this.contentState.addCursorToMarkdown(markdown, cursor);
      newMarkdown = cursorInfo.markdown;
      isValid = cursorInfo.isValid;
    }

    this.contentState.importMarkdown(newMarkdown);
    this.contentState.importCursor(cursor && isValid);
    this.contentState.render(isRenderCursor);
    setTimeout(() => {
      this.dispatchChange();
    }, 0);
  }

  setCursor(cursor) {
    const markdown = this.getMarkdown();
    const isRenderCursor = true;
    return this.setMarkdown(markdown, cursor, isRenderCursor);
  }

  createTable(tableChecker) {
    return this.contentState.createTable(tableChecker);
  }

  getSelection() {
    return this.contentState.selectionChange();
  }

  setFocusMode(bool, force = false) {
    const {
      container
    } = this;
    const {
      focusMode
    } = this.options;

    if (bool && !focusMode || force && bool) {
      container.classList.add(_config.CLASS_OR_ID.AG_FOCUS_MODE);
    } else {
      container.classList.remove(_config.CLASS_OR_ID.AG_FOCUS_MODE);
    }

    this.options.focusMode = bool;
  }

  setFont({
    fontSize,
    lineHeight
  }) {
    if (fontSize) {
      this.options.fontSize = parseInt(fontSize, 10);
    }

    if (lineHeight) {
      this.options.lineHeight = lineHeight;
    }

    this.contentState.render(false);
  }

  setTabSize(tabSize) {
    if (!tabSize || typeof tabSize !== 'number') {
      tabSize = 4;
    } else if (tabSize < 1) {
      tabSize = 1;
    } else if (tabSize > 4) {
      tabSize = 4;
    }

    this.contentState.tabSize = tabSize;
  }

  setListIndentation(listIndentation) {
    if (typeof listIndentation === 'number') {
      if (listIndentation < 1 || listIndentation > 4) {
        listIndentation = 1;
      }
    } else if (listIndentation !== 'dfm') {
      listIndentation = 1;
    }

    this.contentState.listIndentation = listIndentation;
  }

  updateParagraph(type) {
    this.contentState.updateParagraph(type);
  }

  duplicate() {
    this.contentState.duplicate();
  }

  deleteParagraph() {
    this.contentState.deleteParagraph();
  }

  insertParagraph(location
  /* before or after */
  , text = '', outMost = false) {
    this.contentState.insertParagraph(location, text, outMost);
  }

  editTable(data) {
    this.contentState.editTable(data);
  }

  hasFocus() {
    return document.activeElement === this.container;
  }

  focus(isFirst = false) {
    if (isFirst) {
      const {
        key
      } = this.contentState.getFirstBlock();
      this.contentState.cursor = {
        start: {
          key,
          offset: 0
        },
        end: {
          key,
          offset: 0
        }
      };
    }

    this.contentState.setCursor();
    this.container.focus();
  }

  blur(isRemoveAllRange = false, unSelect = false) {
    if (isRemoveAllRange) {
      const selection = document.getSelection();
      selection.removeAllRanges();
    }

    if (unSelect) {
      this.contentState.selectedImage = null;
      this.contentState.selectedTableCells = null;
    }

    this.hideAllFloatTools();
    this.container.blur();
  }

  format(type) {
    this.contentState.format(type);
  }

  insertImage(imageInfo) {
    this.contentState.insertImage(imageInfo);
  }

  search(value, opt) {
    const {
      selectHighlight
    } = opt;
    this.contentState.search(value, opt);
    this.contentState.render(!!selectHighlight);
    return this.contentState.searchMatches;
  }

  replace(value, opt) {
    this.contentState.replace(value, opt);
    this.contentState.render(false);
    return this.contentState.searchMatches;
  }

  find(action
  /* pre or next */
  ) {
    this.contentState.find(action);
    this.contentState.render(false);
    return this.contentState.searchMatches;
  }

  on(event, listener) {
    this.eventCenter.subscribe(event, listener);
  }

  off(event, listener) {
    this.eventCenter.unsubscribe(event, listener);
  }

  once(event, listener) {
    this.eventCenter.subscribeOnce(event, listener);
  }

  undo() {
    this.contentState.history.undo();
    this.dispatchSelectionChange();
    this.dispatchSelectionFormats();
    this.dispatchChange();
  }

  redo() {
    this.contentState.history.redo();
    this.dispatchSelectionChange();
    this.dispatchSelectionFormats();
    this.dispatchChange();
  }

  selectAll() {
    if (!this.hasFocus() && !this.contentState.selectedTableCells) {
      return;
    }

    this.contentState.selectAll();
  }
  /**
   * Get all images' src from the given markdown.
   * @param {string} markdown you want to extract images from this markdown.
   */


  extractImages(markdown = this.markdown) {
    return this.contentState.extractImages(markdown);
  }

  copyAsMarkdown() {
    this.clipboard.copyAsMarkdown();
  }

  copyAsHtml() {
    this.clipboard.copyAsHtml();
  }

  pasteAsPlainText() {
    this.clipboard.pasteAsPlainText();
  }
  /**
   * Copy the anchor block contains the block with `info`. like copy as markdown.
   * @param {string|object} key the block key or block
   */


  copy(info) {
    return this.clipboard.copy('copyBlock', info);
  }

  setOptions(options, needRender = false) {
    // FIXME: Just to be sure, disabled due to #1648.
    if (options.codeBlockLineNumbers) {
      options.codeBlockLineNumbers = false;
    }

    Object.assign(this.options, options);

    if (needRender) {
      this.contentState.render(false, true);
    } // Set quick insert hint visibility


    const hideQuickInsertHint = options.hideQuickInsertHint;

    if (typeof hideQuickInsertHint !== 'undefined') {
      const hasClass = this.container.classList.contains('ag-show-quick-insert-hint');

      if (hideQuickInsertHint && hasClass) {
        this.container.classList.remove('ag-show-quick-insert-hint');
      } else if (!hideQuickInsertHint && !hasClass) {
        this.container.classList.add('ag-show-quick-insert-hint');
      }
    } // Set spellcheck container attribute


    const spellcheckEnabled = options.spellcheckEnabled;

    if (typeof spellcheckEnabled !== 'undefined') {
      this.container.setAttribute('spellcheck', !!spellcheckEnabled);
    }

    if (options.bulletListMarker) {
      this.contentState.turndownConfig.bulletListMarker = options.bulletListMarker;
    }
  }

  changeLang(lang) {
    if (this.options.lang !== lang) {
      this.container.classList.remove("lang-".concat(this.options.lang));
      this.options.lang = lang;
      this.container.classList.remove("lang-".concat(lang));
      this.eventCenter.dispatch('changeLang', lang);
    }
  }

  hideAllFloatTools() {
    return this.keyboard.hideAllFloatTools();
  }
  /**
   * Replace the word range with the given replacement.
   *
   * @param {*} line A line block reference of the line that contains the word to
   *                 replace - must be a valid reference!
   * @param {*} wordCursor The range of the word to replace (line: "abc >foo< abc"
   *                       whereas `>`/`<` is start and end of `wordCursor`). This
   *                       range is replaced by `replacement`.
   * @param {string} replacement The replacement.
   * @param {boolean} setCursor Shoud we update the editor cursor?
   */


  replaceWordInline(line, wordCursor, replacement, setCursor = false) {
    this.contentState.replaceWordInline(line, wordCursor, replacement, setCursor);
  }

  destroy() {
    this.contentState.clear();
    this.quickInsert.destroy();
    this.codePicker.destroy();
    this.tablePicker.destroy();
    this.emojiPicker.destroy();
    this.imagePathPicker.destroy();
    this.eventCenter.detachAllDomEvents();
  }

}
/**
 * [ensureContainerDiv ensure container element is div]
 */


_defineProperty(Muya, "plugins", []);

function getContainer(originContainer, options) {
  const {
    hideQuickInsertHint,
    spellcheckEnabled
  } = options;
  const container = document.createElement('div');
  const rootDom = document.createElement('div');
  const attrs = originContainer.attributes; // copy attrs from origin container to new div element

  Array.from(attrs).forEach(attr => {
    container.setAttribute(attr.name, attr.value);
  });

  if (!hideQuickInsertHint) {
    container.classList.add('ag-show-quick-insert-hint');
  }

  container.classList.add("lang-".concat(options.lang));
  container.setAttribute('contenteditable', true); // container.setAttribute('autocorrect', false);
  // container.setAttribute('autocomplete', 'off');
  // NOTE: The browser is not able to correct misspelled words words without
  // a custom implementation like in Mark Text.

  container.setAttribute('spellcheck', !!spellcheckEnabled);
  container.appendChild(rootDom);
  originContainer.replaceWith(container);
  return container;
}

var _default = Muya;
exports.default = _default;