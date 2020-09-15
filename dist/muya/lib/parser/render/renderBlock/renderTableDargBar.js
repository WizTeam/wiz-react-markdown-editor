'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.renderBottomBar = exports.renderLeftBar = void 0;

var _snabbdom = require('../snabbdom');

const renderLeftBar = () => {
  return (0, _snabbdom.h)('span.ag-drag-handler.left', {
    attrs: {
      contenteditable: 'false'
    }
  });
};

exports.renderLeftBar = renderLeftBar;

const renderBottomBar = () => {
  return (0, _snabbdom.h)('span.ag-drag-handler.bottom', {
    attrs: {
      contenteditable: 'false'
    }
  });
};

exports.renderBottomBar = renderBottomBar;
