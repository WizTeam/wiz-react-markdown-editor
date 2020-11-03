"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = require("../config");

var _dom = require("../selection/dom");

var _selection = _interopRequireDefault(require("../selection"));

var _rules = require("../parser/rules");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// If the next block is header, put cursor after the `#{1,6} *`
const adjustOffset = (offset, block, event) => {
  if (/^span$/.test(block.type) && block.functionType === 'atxLine' && event.key === _config.EVENT_KEYS.ArrowDown) {
    const match = /^\s{0,3}(?:#{1,6})(?:\s{1,}|$)/.exec(block.text);

    if (match) {
      return match[0].length;
    }
  }

  return offset;
};

const arrowCtrl = ContentState => {
  ContentState.prototype.findNextRowCell = function (cell) {
    if (cell.functionType !== 'cellContent') {
      throw new Error("block with type ".concat(cell && cell.type, " is not a table cell"));
    }

    const thOrTd = this.getParent(cell);
    const row = this.closest(cell, 'tr');
    const rowContainer = this.closest(row, /thead|tbody/); // thead or tbody

    const column = row.children.indexOf(thOrTd);

    if (rowContainer.type === 'thead') {
      const tbody = this.getNextSibling(rowContainer);

      if (tbody && tbody.children.length) {
        return tbody.children[0].children[column].children[0];
      }
    } else if (rowContainer.type === 'tbody') {
      const nextRow = this.getNextSibling(row);

      if (nextRow) {
        return nextRow.children[column].children[0];
      }
    }

    return null;
  };

  ContentState.prototype.findPrevRowCell = function (cell) {
    if (cell.functionType !== 'cellContent') {
      throw new Error("block with type ".concat(cell && cell.type, " is not a table cell"));
    }

    const thOrTd = this.getParent(cell);
    const row = this.closest(cell, 'tr');
    const rowContainer = this.getParent(row); // thead or tbody

    const rowIndex = rowContainer.children.indexOf(row);
    const column = row.children.indexOf(thOrTd);

    if (rowContainer.type === 'tbody') {
      if (rowIndex === 0 && rowContainer.preSibling) {
        const thead = this.getPreSibling(rowContainer);
        return thead.children[0].children[column].children[0];
      } else if (rowIndex > 0) {
        return this.getPreSibling(row).children[column].children[0];
      }

      return null;
    }

    return null;
  };

  ContentState.prototype.docArrowHandler = function (event) {
    const {
      selectedImage
    } = this;

    if (selectedImage) {
      const {
        key,
        token
      } = selectedImage;
      const {
        start,
        end
      } = token.range;
      event.preventDefault();
      event.stopPropagation();
      const block = this.getBlock(key);

      switch (event.key) {
        case _config.EVENT_KEYS.ArrowUp:
        case _config.EVENT_KEYS.ArrowLeft:
          {
            this.cursor = {
              start: {
                key,
                offset: start
              },
              end: {
                key,
                offset: start
              }
            };
            break;
          }

        case _config.EVENT_KEYS.ArrowDown:
        case _config.EVENT_KEYS.ArrowRight:
          {
            this.cursor = {
              start: {
                key,
                offset: end
              },
              end: {
                key,
                offset: end
              }
            };
            break;
          }
      }

      this.muya.keyboard.hideAllFloatTools();
      return this.singleRender(block);
    }
  };

  ContentState.prototype.arrowHandler = function (event) {
    const node = _selection.default.getSelectionStart();

    const paragraph = (0, _dom.findNearestParagraph)(node);
    const id = paragraph.id;
    const block = this.getBlock(id);
    const preBlock = this.findPreBlockInLocation(block);
    const nextBlock = this.findNextBlockInLocation(block);

    const {
      start,
      end
    } = _selection.default.getCursorRange();

    const {
      topOffset,
      bottomOffset
    } = _selection.default.getCursorYOffset(paragraph);

    if (!start || !end) {
      return;
    } // fix #101


    if (event.key === _config.EVENT_KEYS.ArrowRight && node && node.classList && node.classList.contains(_config.CLASS_OR_ID.AG_MATH_TEXT)) {
      const {
        right
      } = _selection.default.getCaretOffsets(node);

      if (right === 0 && start.key === end.key && start.offset === end.offset) {
        // It's not recommended to use such lower API, but it's work well.
        return _selection.default.select(node.parentNode.nextElementSibling, 0);
      }
    } // Just do nothing if the cursor is not collapsed or `shiftKey` pressed


    if (start.key === end.key && start.offset !== end.offset || start.key !== end.key || event.shiftKey) {
      return;
    }

    if (event.key === _config.EVENT_KEYS.ArrowUp && topOffset > 0 || event.key === _config.EVENT_KEYS.ArrowDown && bottomOffset > 0) {
      if (!/pre/.test(block.type) || block.functionType !== 'cellContent') {
        // 排除image
        if (!(block.functionType === 'paragraphContent' && block.type === 'span' && _rules.inlineRules.image.test(block.text))) {
          return;
        }
      }
    }

    if (block.functionType === 'cellContent') {
      let activeBlock;
      const cellInNextRow = this.findNextRowCell(block);
      const cellInPrevRow = this.findPrevRowCell(block);

      if (event.key === _config.EVENT_KEYS.ArrowUp) {
        if (cellInPrevRow) {
          activeBlock = cellInPrevRow;
        } else {
          activeBlock = this.findPreBlockInLocation(this.getTableBlock());
        }
      }

      if (event.key === _config.EVENT_KEYS.ArrowDown) {
        if (cellInNextRow) {
          activeBlock = cellInNextRow;
        } else {
          activeBlock = this.findNextBlockInLocation(this.getTableBlock());
        }
      }

      if (activeBlock) {
        event.preventDefault();
        event.stopPropagation();
        let offset = activeBlock.type === 'p' ? 0 : event.key === _config.EVENT_KEYS.ArrowUp ? activeBlock.text.length : 0;
        offset = adjustOffset(offset, activeBlock, event);
        const key = activeBlock.type === 'p' ? activeBlock.children[0].key : activeBlock.key;
        this.cursor = {
          start: {
            key,
            offset
          },
          end: {
            key,
            offset
          }
        };
        return this.partialRender();
      }
    }

    if (event.key === _config.EVENT_KEYS.ArrowUp || event.key === _config.EVENT_KEYS.ArrowLeft && start.offset === 0) {
      event.preventDefault();
      event.stopPropagation();
      if (!preBlock) return;
      const key = preBlock.key;
      const offset = event.key === _config.EVENT_KEYS.ArrowUp && preBlock.text && start.offset <= preBlock.text.length ? start.offset : preBlock.text.length;
      this.cursor = {
        start: {
          key,
          offset
        },
        end: {
          key,
          offset
        }
      };
      return this.partialRender();
    } else if (event.key === _config.EVENT_KEYS.ArrowDown || event.key === _config.EVENT_KEYS.ArrowRight && start.offset === block.text.length) {
      event.preventDefault();
      event.stopPropagation();
      let key;
      let newBlock;

      if (nextBlock) {
        key = nextBlock.key;
      } else {
        newBlock = this.createBlockP();
        const lastBlock = this.blocks[this.blocks.length - 1];
        this.insertAfter(newBlock, lastBlock);
        key = newBlock.children[0].key;
      }

      const _offset = adjustOffset(0, nextBlock || newBlock, event);

      const offset = event.key === _config.EVENT_KEYS.ArrowDown && nextBlock.text && start.offset <= nextBlock.text.length ? start.offset : _offset;
      this.cursor = {
        start: {
          key,
          offset
        },
        end: {
          key,
          offset
        }
      };
      return this.partialRender();
    }
  };
};

var _default = arrowCtrl;
exports.default = _default;