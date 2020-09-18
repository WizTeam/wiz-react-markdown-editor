"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * TextRenderer
 * returns only the textual part of the token
 */
function TextRenderer() {} // no need for block level renderers


TextRenderer.prototype.strong = TextRenderer.prototype.em = TextRenderer.prototype.codespan = TextRenderer.prototype.del = TextRenderer.prototype.text = function (text) {
  return text;
};

TextRenderer.prototype.inlineMath = function (math, displayMode) {
  return math;
};

TextRenderer.prototype.emoji = function (text, emoji) {
  return emoji;
};

TextRenderer.prototype.link = TextRenderer.prototype.image = function (href, title, text) {
  return '' + text;
};

TextRenderer.prototype.br = function () {
  return '';
};

var _default = TextRenderer;
exports.default = _default;