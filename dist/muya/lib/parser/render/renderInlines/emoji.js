"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = emoji;

var _config = require("../../../config");

var _emojis = require("../../../ui/emojis");

// render token of emoji to vdom
function emoji(h, cursor, block, token, outerClass) {
  const {
    start: rStart,
    end: rEnd
  } = token.range;
  const className = this.getClassName(outerClass, block, token, cursor);
  const validation = (0, _emojis.validEmoji)(token.content);
  const finalClass = validation ? className : _config.CLASS_OR_ID.AG_WARN;
  const contentSelector = finalClass !== _config.CLASS_OR_ID.AG_GRAY ? "span.".concat(finalClass, ".").concat(_config.CLASS_OR_ID.AG_INLINE_RULE, ".").concat(_config.CLASS_OR_ID.AG_EMOJI_MARKED_TEXT) : "span.".concat(_config.CLASS_OR_ID.AG_INLINE_RULE, ".").concat(_config.CLASS_OR_ID.AG_EMOJI_MARKED_TEXT);
  let startMarkerSelector = "span.".concat(finalClass, ".").concat(_config.CLASS_OR_ID.AG_EMOJI_MARKER);
  let endMarkerSelector = startMarkerSelector;
  let content = token.content;
  let pos = rStart + token.marker.length;

  if (token.highlights && token.highlights.length) {
    content = [];

    for (const light of token.highlights) {
      let {
        start,
        end,
        active
      } = light;
      const HIGHLIGHT_CLASSNAME = this.getHighlightClassName(active);

      if (start === rStart) {
        startMarkerSelector += ".".concat(HIGHLIGHT_CLASSNAME);
        start++;
      }

      if (end === rEnd) {
        endMarkerSelector += ".".concat(HIGHLIGHT_CLASSNAME);
        end--;
      }

      if (pos < start) {
        content.push(block.text.substring(pos, start));
      }

      if (start < end) {
        content.push(h("span.".concat(HIGHLIGHT_CLASSNAME), block.text.substring(start, end)));
      }

      pos = end;
    }

    if (pos < rEnd - token.marker.length) {
      content.push(block.text.substring(pos, rEnd - 1));
    }
  }

  const emojiVdom = validation ? h(contentSelector, {
    attrs: {
      spellcheck: 'false'
    },
    dataset: {
      emoji: validation.emoji
    }
  }, content) : h(contentSelector, content);
  return [h(startMarkerSelector, token.marker), emojiVdom, h(endMarkerSelector, token.marker)];
}