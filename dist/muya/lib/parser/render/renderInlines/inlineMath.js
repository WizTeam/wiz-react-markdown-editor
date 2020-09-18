"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = displayMath;

var _katex = _interopRequireDefault(require("katex"));

var _config = require("../../../config");

var _snabbdom = require("../snabbdom");

require("katex/dist/katex.min.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function displayMath(h, cursor, block, token, outerClass) {
  const className = this.getClassName(outerClass, block, token, cursor);
  const mathSelector = className === _config.CLASS_OR_ID.AG_HIDE ? "span.".concat(className, ".").concat(_config.CLASS_OR_ID.AG_MATH) : "span.".concat(_config.CLASS_OR_ID.AG_MATH);
  const {
    start,
    end
  } = token.range;
  const {
    marker
  } = token;
  const startMarker = this.highlight(h, block, start, start + marker.length, token);
  const endMarker = this.highlight(h, block, end - marker.length, end, token);
  const content = this.highlight(h, block, start + marker.length, end - marker.length, token);
  const {
    content: math,
    type
  } = token;
  const {
    loadMathMap
  } = this;
  const displayMode = false;
  const key = "".concat(math, "_").concat(type);
  let mathVnode = null;
  let previewSelector = "span.".concat(_config.CLASS_OR_ID.AG_MATH_RENDER);

  if (loadMathMap.has(key)) {
    mathVnode = loadMathMap.get(key);
  } else {
    try {
      const html = _katex.default.renderToString(math, {
        displayMode
      });

      mathVnode = (0, _snabbdom.htmlToVNode)(html);
      loadMathMap.set(key, mathVnode);
    } catch (err) {
      mathVnode = '< Invalid Mathematical Formula >';
      previewSelector += ".".concat(_config.CLASS_OR_ID.AG_MATH_ERROR);
    }
  }

  return [h("span.".concat(className, ".").concat(_config.CLASS_OR_ID.AG_MATH_MARKER), startMarker), h(mathSelector, [h("span.".concat(_config.CLASS_OR_ID.AG_INLINE_RULE, ".").concat(_config.CLASS_OR_ID.AG_MATH_TEXT), {
    attrs: {
      spellcheck: 'false'
    }
  }, content), h(previewSelector, {
    attrs: {
      contenteditable: 'false'
    }
  }, mathVnode)]), h("span.".concat(className, ".").concat(_config.CLASS_OR_ID.AG_MATH_MARKER), endMarker)];
}