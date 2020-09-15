'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _snabbdom = require('../snabbdom');

const NEW_LINE_EXP = /\n(?!$)/g;

const renderLineNumberRows = (codeContent) => {
  const { text } = codeContent;
  const match = text.match(NEW_LINE_EXP);
  let linesNum = match ? match.length + 1 : 1;

  if (text.endsWith('\n')) {
    linesNum++;
  }

  const data = {
    attrs: {
      'aria-hidden': true
    }
  };
  const children = [...new Array(linesNum)].map(() => (0, _snabbdom.h)('span'));
  return (0, _snabbdom.h)('span.line-numbers-rows', data, children);
};

var _default = renderLineNumberRows;
exports.default = _default;
