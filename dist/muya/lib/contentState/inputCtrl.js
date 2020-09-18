'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _selection = _interopRequireDefault(require('../selection'));

var _dom = require('../selection/dom');

var _rules = require('../parser/rules');

var _parser = require('../parser/');

var _config = require('../config');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const BRACKET_HASH = {
  '{': '}',
  '[': ']',
  '(': ')',
  '*': '*',
  _: '_',
  '"': '"',
  "'": "'",
  $: '$',
  '~': '~'
};
const BACK_HASH = {
  '}': '{',
  ']': '[',
  ')': '(',
  '*': '*',
  _: '_',
  '"': '"',
  "'": "'",
  $: '$',
  '~': '~'
}; // TODO: refactor later.

let renderCodeBlockTimer = null;

const inputCtrl = (ContentState) => {
  // Input @/+// to quick insert paragraph
  ContentState.prototype.checkQuickInsert = function (block) {
    const { type, text, functionType } = block;
    if (type !== 'span' || functionType !== 'paragraphContent') return false;
    return /^(@|\+|\/)\S*$/.test(text);
  };

  ContentState.prototype.checkTagInsert = function (block) {
    const { type, text, functionType } = block;
    if (type !== 'span') return false;
    return /(^|[\t\f\v ])#(?!#|\s)(([^#\r\n]{1,25}[^#\s]#)|([^#\s]{1,25}$)|(\S{1,25}(\S|$)))/.test(
      text
    );
  };

  ContentState.prototype.checkCursorInTokenType = function (functionType, text, offset, type) {
    if (!/atxLine|paragraphContent|cellContent/.test(functionType)) {
      return false;
    }

    const tokens = (0, _parser.tokenizer)(text, {
      hasBeginRules: false,
      options: this.muya.options
    });
    return tokens
      .filter((t) => t.type === type)
      .some((t) => offset >= t.range.start && offset <= t.range.end);
  };

  ContentState.prototype.checkNotSameToken = function (functionType, oldText, text) {
    if (!/atxLine|paragraphContent|cellContent/.test(functionType)) {
      return false;
    }

    const oldTokens = (0, _parser.tokenizer)(oldText, {
      options: this.muya.options
    });
    const tokens = (0, _parser.tokenizer)(text, {
      options: this.muya.options
    });
    const oldCache = {};
    const cache = {};

    for (const { type } of oldTokens) {
      if (oldCache[type]) {
        oldCache[type]++;
      } else {
        oldCache[type] = 1;
      }
    }

    for (const { type } of tokens) {
      if (cache[type]) {
        cache[type]++;
      } else {
        cache[type] = 1;
      }
    }

    if (Object.keys(oldCache).length !== Object.keys(cache).length) {
      return true;
    }

    for (const key of Object.keys(oldCache)) {
      if (!cache[key] || oldCache[key] !== cache[key]) {
        return true;
      }
    }

    return false;
  };

  ContentState.prototype.inputHandler = function (event, notEqual = false) {
    const { start, end } = _selection.default.getCursorRange();

    if (!start || !end) {
      return;
    }

    const { start: oldStart, end: oldEnd } = this.cursor;
    const key = start.key;
    const block = this.getBlock(key);
    const paragraph = document.querySelector('#'.concat(key)); // Fix issue 1447
    // Fixme: any better solution?

    if (
      oldStart.key === oldEnd.key &&
      oldStart.offset === oldEnd.offset &&
      block.text.endsWith('\n') &&
      oldStart.offset === block.text.length &&
      event.inputType === 'insertText'
    ) {
      event.preventDefault();
      block.text += event.data;
      const offset = block.text.length;
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
      this.singleRender(block);
      return this.inputHandler(event, true);
    }

    let text = (0, _dom.getTextContent)(paragraph, [
      _config.CLASS_OR_ID.AG_MATH_RENDER,
      _config.CLASS_OR_ID.AG_RUBY_RENDER
    ]);
    let needRender = false;
    let needRenderAll = false;

    if (oldStart.key !== oldEnd.key) {
      const startBlock = this.getBlock(oldStart.key);
      const startOutmostBlock = this.findOutMostBlock(startBlock);
      const endBlock = this.getBlock(oldEnd.key);
      const endOutmostBlock = this.findOutMostBlock(endBlock);

      if (
        // fix #918.
        startBlock.functionType === 'languageInput'
      ) {
        if (startOutmostBlock === endOutmostBlock && !endBlock.nextSibling) {
          this.removeBlocks(startBlock, endBlock, false);
          endBlock.text = '';
        } else if (startOutmostBlock !== endOutmostBlock) {
          const preBlock = this.getParent(startBlock);
          const pBlock = this.createBlock('p');
          this.removeBlocks(startBlock, endBlock);
          startBlock.functionType = 'paragraphContent';
          this.appendChild(pBlock, startBlock);
          this.insertBefore(pBlock, preBlock);
          this.removeBlock(preBlock);
        } else {
          this.removeBlocks(startBlock, endBlock);
        }
      } else {
        this.removeBlocks(startBlock, endBlock);
      }

      if (this.blocks.length === 1) {
        needRenderAll = true;
      }

      needRender = true;
    } // auto pair (not need to auto pair in math block)

    if (block && (block.text !== text || notEqual)) {
      if (start.key === end.key && start.offset === end.offset && event.type === 'input') {
        const { offset } = start;
        const { autoPairBracket, autoPairMarkdownSyntax, autoPairQuote } = this.muya.options;
        const inputChar = text.charAt(+offset - 1);
        const preInputChar = text.charAt(+offset - 2);
        const prePreInputChar = text.charAt(+offset - 3);
        const postInputChar = text.charAt(+offset);

        if (/^delete/.test(event.inputType)) {
          // handle `deleteContentBackward` or `deleteContentForward`
          const deletedChar = block.text[offset];

          if (
            event.inputType === 'deleteContentBackward' &&
            postInputChar === BRACKET_HASH[deletedChar]
          ) {
            needRender = true;
            text = text.substring(0, offset) + text.substring(offset + 1);
          }

          if (event.inputType === 'deleteContentForward' && inputChar === BACK_HASH[deletedChar]) {
            needRender = true;
            start.offset -= 1;
            end.offset -= 1;
            text = text.substring(0, offset - 1) + text.substring(offset);
          }
          /* eslint-disable no-useless-escape */
        } else if (
          event.inputType.indexOf('delete') === -1 &&
          inputChar === postInputChar &&
          ((autoPairQuote && /[']{1}/.test(inputChar)) ||
            (autoPairQuote && /["]{1}/.test(inputChar)) ||
            (autoPairBracket && /[\}\]\)]{1}/.test(inputChar)) ||
            (autoPairMarkdownSyntax && /[$]{1}/.test(inputChar)) ||
            (autoPairMarkdownSyntax &&
              /[*$`~_]{1}/.test(inputChar) &&
              /[_*~]{1}/.test(prePreInputChar)))
        ) {
          needRender = true;
          text = text.substring(0, offset) + text.substring(offset + 1);
        } else {
          /* eslint-disable no-useless-escape */
          // Not Unicode aware, since things like \p{Alphabetic} or \p{L} are not supported yet
          const isInInlineMath = this.checkCursorInTokenType(
            block.functionType,
            text,
            offset,
            'inline_math'
          );
          const isInInlineCode = this.checkCursorInTokenType(
            block.functionType,
            text,
            offset,
            'inline_code'
          );

          if (
            !/\\/.test(preInputChar) &&
            ((autoPairQuote && /[']{1}/.test(inputChar) && !/[a-zA-Z\d]{1}/.test(preInputChar)) ||
              (autoPairQuote && /["]{1}/.test(inputChar)) ||
              (autoPairBracket && /[\{\[\(]{1}/.test(inputChar)) ||
              (block.functionType !== 'codeContent' &&
                !isInInlineMath &&
                !isInInlineCode &&
                autoPairMarkdownSyntax &&
                /[*$`~_]{1}/.test(inputChar)))
          ) {
            needRender = true;
            text = BRACKET_HASH[event.data]
              ? text.substring(0, offset) + BRACKET_HASH[inputChar] + text.substring(offset)
              : text;
          }
          /* eslint-enable no-useless-escape */
          // Delete the last `*` of `**` when you insert one space between `**` to create a bullet list.

          if (
            /\s/.test(event.data) &&
            /^\* /.test(text) &&
            preInputChar === '*' &&
            postInputChar === '*'
          ) {
            text = text.substring(0, offset) + text.substring(offset + 1);
            needRender = true;
          }
        }
      }

      if (this.checkNotSameToken(block.functionType, block.text, text)) {
        needRender = true;
      } // Just work for `Shift + Enter` to create a soft and hard line break.

      if (
        block.text.endsWith('\n') &&
        start.offset === text.length &&
        (event.inputType === 'insertText' || event.type === 'compositionend')
      ) {
        block.text += event.data;
        start.offset++;
        end.offset++;
      } else if (
        block.text.length === oldStart.offset &&
        block.text[oldStart.offset - 2] === '\n' &&
        event.inputType === 'deleteContentBackward'
      ) {
        block.text = block.text.substring(0, oldStart.offset - 1);
        start.offset = block.text.length;
        end.offset = block.text.length;
      } else {
        block.text = text;
      } // Update code block language when modify code block identifer

      if (block.functionType === 'languageInput') {
        const parent = this.getParent(block);
        parent.lang = block.text;
      }

      if (_rules.beginRules.reference_definition.test(text)) {
        needRenderAll = true;
      }
    } // show quick insert

    const rect = paragraph.getBoundingClientRect();
    const checkQuickInsert = this.checkQuickInsert(block);
    const checkTagInsert = this.checkTagInsert(block);
    const reference = this.getPositionReference();

    reference.getBoundingClientRect = function () {
      const { x, y, left, top, height, bottom } = rect;
      return Object.assign(
        {},
        {
          left,
          x,
          top,
          y,
          bottom,
          height,
          width: 0,
          right: left
        }
      );
    };

    this.muya.eventCenter.dispatch('muya-quick-insert', reference, block, !!checkQuickInsert);
    this.muya.eventCenter.dispatch('muya-tag-insert', reference, block, !!checkTagInsert);
    this.cursor = {
      start,
      end
    }; // Throttle render if edit in code block.

    if (block && block.type === 'span' && block.functionType === 'codeContent') {
      if (renderCodeBlockTimer) {
        clearTimeout(renderCodeBlockTimer);
      }

      if (needRender) {
        this.partialRender();
      } else {
        renderCodeBlockTimer = setTimeout(() => {
          this.partialRender();
        }, 300);
      }

      return;
    }

    const checkMarkedUpdate = /atxLine|paragraphContent|cellContent/.test(block.functionType)
      ? this.checkNeedRender()
      : false;
    let inlineUpdatedBlock = null;

    if (/atxLine|paragraphContent|cellContent|thematicBreakLine/.test(block.functionType)) {
      inlineUpdatedBlock = this.isCollapse() && this.checkInlineUpdate(block);
    } // just for fix #707,need render All if in combines pre list and next list into one list.

    if (inlineUpdatedBlock) {
      const liBlock = this.getParent(inlineUpdatedBlock);

      if (liBlock && liBlock.type === 'li' && liBlock.preSibling && liBlock.nextSibling) {
        needRenderAll = true;
      }
    }

    if (checkMarkedUpdate || inlineUpdatedBlock || needRender) {
      return needRenderAll ? this.render() : this.partialRender();
    }
  };
};

var _default = inputCtrl;
exports.default = _default;