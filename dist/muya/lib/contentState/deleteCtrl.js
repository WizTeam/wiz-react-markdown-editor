"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _selection = _interopRequireDefault(require("../selection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const deleteCtrl = ContentState => {
  // Handle `delete` keydown event on document.
  ContentState.prototype.docDeleteHandler = function (event) {
    if (this.selectedTableCells) {
      event.preventDefault();
      return this.deleteSelectedTableCells();
    }
  };

  ContentState.prototype.deleteHandler = function (event) {
    const {
      start,
      end
    } = _selection.default.getCursorRange();

    if (!start || !end) {
      return;
    }

    const startBlock = this.getBlock(start.key);
    const nextBlock = this.findNextBlockInLocation(startBlock); // TODO: @jocs It will delete all the editor and cause error in console when there is only one empty table. same as #67

    if (startBlock.type === 'figure') event.preventDefault(); // If select multiple paragraph or multiple characters in one paragraph, just let
    // updateCtrl to handle this case.

    if (start.key !== end.key || start.offset !== end.offset) {
      return;
    } // Only handle h1~h6 span block


    const {
      type,
      text,
      key,
      functionType
    } = startBlock;

    if (/span/.test(type) && start.offset === 0 && text[1] === '\n') {
      event.preventDefault();
      startBlock.text = text.substring(2);
      this.cursor = {
        start: {
          key,
          offset: 0
        },
        end: {
          key,
          offset: 0
        }
      };
      return this.singleRender(startBlock);
    }

    if (functionType !== 'cellContent' && /h\d|span/.test(type) && start.offset === text.length) {
      event.preventDefault();

      if (nextBlock && /h\d|span/.test(nextBlock.type)) {
        // if cursor at the end of code block-language input, do nothing!
        if (nextBlock.functionType === 'codeContent' && startBlock.functionType === 'languageInput') {
          return;
        }

        startBlock.text += nextBlock.text;
        const toBeRemoved = [nextBlock];
        let parent = this.getParent(nextBlock);
        let target = nextBlock;

        while (this.isOnlyRemoveableChild(target)) {
          toBeRemoved.push(parent);
          target = parent;
          parent = this.getParent(parent);
        }

        toBeRemoved.forEach(b => this.removeBlock(b));
        const offset = start.offset;
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
        this.render();
      }
    } // 修复table bug


    if (functionType === 'cellContent' && start.offset === 0 && text.length === 1) {
      event.preventDefault();
      startBlock.text = '';
      this.cursor = {
        start: {
          key,
          offset: 0
        },
        end: {
          key,
          offset: 0
        }
      };
      return this.singleRender(startBlock);
    }
  };
};

var _default = deleteCtrl;
exports.default = _default;