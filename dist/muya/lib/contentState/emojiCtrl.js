'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _parser = require('../parser/');

const emojiCtrl = (ContentState) => {
  ContentState.prototype.setEmoji = function (item) {
    let { key, offset } = this.cursor.start;
    const startBlock = this.getBlock(key);
    const { text } = startBlock;
    const tokens = (0, _parser.tokenizer)(text, {
      options: this.muya.options
    });
    let delta = 0;

    const findEmojiToken = (tokens, offset) => {
      for (const token of tokens) {
        const { start, end } = token.range;

        if (offset >= start && offset <= end) {
          delta = end - offset;
          return token.children && Array.isArray(token.children) && token.children.length
            ? findEmojiToken(token.children, offset)
            : token;
        }
      }
    };

    const token = findEmojiToken(tokens, offset);

    if (token && token.type === 'emoji') {
      const emojiText = item.aliases[0];
      offset += delta + emojiText.length - token.content.length;
      token.content = emojiText;
      token.raw = ':'.concat(emojiText, ':');
      startBlock.text = (0, _parser.generator)(tokens);
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

var _default = emojiCtrl;
exports.default = _default;
