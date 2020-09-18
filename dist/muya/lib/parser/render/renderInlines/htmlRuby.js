"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = htmlRuby;

var _config = require("../../../config");

var _snabbdom = require("../snabbdom");

function htmlRuby(h, cursor, block, token, outerClass) {
  const className = this.getClassName(outerClass, block, token, cursor);
  const {
    children
  } = token;
  const {
    start,
    end
  } = token.range;
  const content = this.highlight(h, block, start, end, token);
  const vNode = (0, _snabbdom.htmlToVNode)(token.raw);
  const previewSelector = "span.".concat(_config.CLASS_OR_ID.AG_RUBY_RENDER);
  return children ? [h("span.".concat(className, ".").concat(_config.CLASS_OR_ID.AG_RUBY), [h("span.".concat(_config.CLASS_OR_ID.AG_INLINE_RULE, ".").concat(_config.CLASS_OR_ID.AG_RUBY_TEXT), content), h(previewSelector, {
    attrs: {
      contenteditable: 'false',
      spellcheck: 'false'
    }
  }, vNode)]) // if children is empty string, no need to render ruby charactors...
  ] : [h("span.".concat(className, ".").concat(_config.CLASS_OR_ID.AG_RUBY), [h("span.".concat(_config.CLASS_OR_ID.AG_INLINE_RULE, ".").concat(_config.CLASS_OR_ID.AG_RUBY_TEXT), content)])];
}