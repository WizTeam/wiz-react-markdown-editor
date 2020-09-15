'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = exports.checkEditEmoji = exports.validEmoji = void 0;

var _fuzzaldrin = require('fuzzaldrin');

var _emojisJson = _interopRequireDefault(require('./emojisJson'));

var _config = require('../../config');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const emojisForSearch = {};

for (const emoji of _emojisJson.default) {
  const newEmoji = Object.assign({}, emoji, {
    search: [...emoji.aliases, ...emoji.tags].join(' ')
  });

  if (emojisForSearch[newEmoji.category]) {
    emojisForSearch[newEmoji.category].push(newEmoji);
  } else {
    emojisForSearch[newEmoji.category] = [newEmoji];
  }
}
/**
 * check if one emoji code is in emojis, return undefined or found emoji
 */

const validEmoji = (text) => {
  return _emojisJson.default.find((emoji) => {
    return emoji.aliases.includes(text);
  });
};
/**
 * check edit emoji
 */

exports.validEmoji = validEmoji;

const checkEditEmoji = (node) => {
  if (node && node.classList.contains(_config.CLASS_OR_ID.AG_EMOJI_MARKED_TEXT)) {
    return node;
  }

  return false;
};

exports.checkEditEmoji = checkEditEmoji;

class Emoji {
  constructor() {
    this.cache = new Map();
  }

  search(text) {
    const { cache } = this;
    if (cache.has(text)) return cache.get(text);
    const result = {};
    Object.keys(emojisForSearch).forEach((category) => {
      const list = (0, _fuzzaldrin.filter)(emojisForSearch[category], text, {
        key: 'search'
      });

      if (list.length) {
        result[category] = list;
      }
    });
    cache.set(text, result);
    return result;
  }

  destroy() {
    return this.cache.clear();
  }
}

var _default = Emoji;
exports.default = _default;
