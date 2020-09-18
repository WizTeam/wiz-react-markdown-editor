"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = require("../config");

var _selection = _interopRequireDefault(require("../selection"));

var _dom = require("../selection/dom");

var _utils = require("../utils");

var _emojis = require("../ui/emojis");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Keyboard {
  constructor(muya) {
    this.muya = muya;
    this.isComposed = false;
    this.shownFloat = new Set();
    this.inputDom = null;
    this.recordIsComposed();
    this.dispatchEditorState();
    this.keydownBinding();
    this.keyupBinding();
    this.inputBinding();
    this.listen();
  }

  listen() {
    // cache shown float box
    this.muya.eventCenter.subscribe('muya-float', (tool, status) => {
      status ? this.shownFloat.add(tool) : this.shownFloat.delete(tool);

      if (tool.name === 'ag-front-menu' && !status) {
        const seletedParagraph = this.muya.container.querySelector('.ag-selected');

        if (seletedParagraph) {
          this.muya.contentState.selectedBlock = null; // prevent rerender, so change the class manually.

          seletedParagraph.classList.toggle('ag-selected');
        }
      }
    });
  }

  hideAllFloatTools() {
    for (const tool of this.shownFloat) {
      tool.hide();
    }
  }

  recordIsComposed() {
    const {
      container,
      eventCenter,
      contentState
    } = this.muya;

    const handler = event => {
      if (event.type === 'compositionstart') {
        this.isComposed = true;
        this.inputDom = _selection.default.getSelectionStart();
      } else if (event.type === 'compositionend') {
        setTimeout(() => {
          this.isComposed = false;
        }, 30);
        this.inputDom = null; // Because the compose event will not cause `input` event, So need call `inputHandler` by ourself

        contentState.inputHandler(event);
        eventCenter.dispatch('stateChange');
      }
    };

    eventCenter.attachDOMEvent(container, 'compositionend', handler); // eventCenter.attachDOMEvent(container, 'compositionupdate', handler)

    eventCenter.attachDOMEvent(container, 'compositionstart', handler);
  }

  dispatchEditorState() {
    const {
      container,
      eventCenter
    } = this.muya;
    let timer = null;

    const changeHandler = event => {
      if (event.type === 'keyup' && (event.key === _config.EVENT_KEYS.ArrowUp || event.key === _config.EVENT_KEYS.ArrowDown) && this.shownFloat.size > 0) {
        return;
      } // Cursor outside editor area or over not editable elements.


      if (event.target.closest('[contenteditable=false]')) {
        return;
      } // We need check cursor is null, because we may copy the html preview content,
      // and no need to dispatch change.


      const {
        start,
        end
      } = _selection.default.getCursorRange();

      if (!start || !end) {
        return;
      }

      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        this.muya.dispatchSelectionChange();
        this.muya.dispatchSelectionFormats();

        if (!this.isComposed && event.type === 'click') {
          this.muya.dispatchChange();
        }
      });
    };

    eventCenter.attachDOMEvent(container, 'click', changeHandler);
    eventCenter.attachDOMEvent(container, 'keyup', changeHandler);
  }

  keydownBinding() {
    const {
      container,
      eventCenter,
      contentState
    } = this.muya;

    const docHandler = event => {
      switch (event.code) {
        case _config.EVENT_KEYS.Enter:
          return contentState.docEnterHandler(event);

        case _config.EVENT_KEYS.Space:
          {
            if (contentState.selectedImage) {
              const {
                token
              } = contentState.selectedImage;
              const {
                src
              } = (0, _utils.getImageInfo)(token.src || token.attrs.src);

              if (src) {
                eventCenter.dispatch('preview-image', {
                  data: src
                });
              }
            }

            break;
          }

        case _config.EVENT_KEYS.Backspace:
          {
            return contentState.docBackspaceHandler(event);
          }

        case _config.EVENT_KEYS.Delete:
          {
            return contentState.docDeleteHandler(event);
          }

        case _config.EVENT_KEYS.ArrowUp: // fallthrough

        case _config.EVENT_KEYS.ArrowDown: // fallthrough

        case _config.EVENT_KEYS.ArrowLeft: // fallthrough

        case _config.EVENT_KEYS.ArrowRight:
          // fallthrough
          return contentState.docArrowHandler(event);
      }
    };

    const handler = event => {
      if (event.metaKey || event.ctrlKey) {
        container.classList.add('ag-meta-or-ctrl');
      }

      if (this.shownFloat.size > 0 && (event.key === _config.EVENT_KEYS.Enter || event.key === _config.EVENT_KEYS.Escape || event.key === _config.EVENT_KEYS.Tab || event.key === _config.EVENT_KEYS.ArrowUp || event.key === _config.EVENT_KEYS.ArrowDown)) {
        let needPreventDefault = false;

        for (const tool of this.shownFloat) {
          if (tool.name === 'ag-format-picker' || tool.name === 'ag-table-picker' || tool.name === 'ag-quick-insert' || tool.name === 'ag-emoji-picker' || tool.name === 'ag-front-menu' || tool.name === 'ag-list-picker' || tool.name === 'ag-tag-insert' || tool.name === 'ag-image-selector') {
            needPreventDefault = true;
            break;
          }
        }

        if (needPreventDefault) {
          event.preventDefault();
        } // event.stopPropagation()


        return;
      }

      switch (event.key) {
        case _config.EVENT_KEYS.Backspace:
          contentState.backspaceHandler(event);
          break;

        case _config.EVENT_KEYS.Delete:
          contentState.deleteHandler(event);
          break;

        case _config.EVENT_KEYS.Enter:
          if (!this.isComposed) {
            contentState.enterHandler(event);
            this.muya.dispatchChange();
          }

          break;

        case _config.EVENT_KEYS.ArrowUp: // fallthrough

        case _config.EVENT_KEYS.ArrowDown: // fallthrough

        case _config.EVENT_KEYS.ArrowLeft: // fallthrough

        case _config.EVENT_KEYS.ArrowRight:
          // fallthrough
          if (!this.isComposed) {
            contentState.arrowHandler(event);
          }

          break;

        case _config.EVENT_KEYS.Tab:
          contentState.tabHandler(event);
          break;

        default:
          break;
      }
    };

    eventCenter.attachDOMEvent(container, 'keydown', handler);
    eventCenter.attachDOMEvent(document, 'keydown', docHandler);
  }

  inputBinding() {
    const {
      container,
      eventCenter,
      contentState
    } = this.muya;

    const inputHandler = event => {
      if (!this.isComposed) {
        contentState.inputHandler(event);
        this.muya.dispatchChange();
      } else if (this.isComposed) {
        // safari空行时会输出<span>
        const startNode = _selection.default.getSelectionStart();

        if (this.inputDom !== startNode) {
          var _event$data$length, _event$data;

          this.inputDom.innerText = event.data;
          startNode.lastElementChild ? startNode.replaceChild(this.inputDom, startNode.lastElementChild) : startNode.parentNode.replaceChild(this.inputDom, startNode);

          _selection.default.select(this.inputDom, (_event$data$length = (_event$data = event.data) === null || _event$data === void 0 ? void 0 : _event$data.length) !== null && _event$data$length !== void 0 ? _event$data$length : 0);
        }

        if (event.data === null) {
          event.preventDefault();
          event.stopPropagation();
          return;
        }
      }

      const {
        lang,
        paragraph
      } = contentState.checkEditLanguage();

      if (lang) {
        eventCenter.dispatch('muya-code-picker', {
          reference: (0, _utils.getParagraphReference)(paragraph, paragraph.id),
          lang,
          cb: item => {
            contentState.selectLanguage(paragraph, item.name);
          }
        });
      } else {
        // hide code picker float box
        eventCenter.dispatch('muya-code-picker', {
          reference: null
        });
      }
    };

    eventCenter.attachDOMEvent(container, 'input', inputHandler);
  }

  keyupBinding() {
    const {
      container,
      eventCenter,
      contentState
    } = this.muya;

    const handler = event => {
      container.classList.remove('ag-meta-or-ctrl'); // check if edit emoji

      const node = _selection.default.getSelectionStart();

      const paragraph = (0, _dom.findNearestParagraph)(node);
      const emojiNode = (0, _emojis.checkEditEmoji)(node);
      contentState.selectedImage = null;

      if (paragraph && emojiNode && event.key !== _config.EVENT_KEYS.Enter && event.key !== _config.EVENT_KEYS.ArrowDown && event.key !== _config.EVENT_KEYS.ArrowUp && event.key !== _config.EVENT_KEYS.Tab && event.key !== _config.EVENT_KEYS.Escape) {
        const reference = (0, _utils.getParagraphReference)(emojiNode, paragraph.id);
        eventCenter.dispatch('muya-emoji-picker', {
          reference,
          emojiNode
        });
      }

      if (!emojiNode) {
        eventCenter.dispatch('muya-emoji-picker', {
          emojiNode
        });
      }

      const {
        anchor,
        focus,
        start,
        end
      } = _selection.default.getCursorRange();

      if (!anchor || !focus) {
        return;
      }

      if (!this.isComposed) {
        const {
          anchor: oldAnchor,
          focus: oldFocus
        } = contentState.cursor;

        if (anchor.key !== oldAnchor.key || anchor.offset !== oldAnchor.offset || focus.key !== oldFocus.key || focus.offset !== oldFocus.offset) {
          const needRender = contentState.checkNeedRender(contentState.cursor) || contentState.checkNeedRender({
            start,
            end
          });
          contentState.cursor = {
            anchor,
            focus
          };

          if (needRender) {
            return contentState.partialRender();
          }
        }
      }

      const block = contentState.getBlock(anchor.key);

      if (anchor.key === focus.key && anchor.offset !== focus.offset && block.functionType !== 'codeContent' && block.functionType !== 'languageInput') {
        const reference = contentState.getPositionReference();
        const {
          formats
        } = contentState.selectionFormats();
        eventCenter.dispatch('muya-format-picker', {
          reference,
          formats
        });
      } else {
        eventCenter.dispatch('muya-format-picker', {
          reference: null
        });
      }
    };

    eventCenter.attachDOMEvent(container, 'keyup', handler); // temp use input event
  }

}

var _default = Keyboard;
exports.default = _default;