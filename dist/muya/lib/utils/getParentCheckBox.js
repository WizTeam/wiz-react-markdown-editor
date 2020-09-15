'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.getParentCheckBox = void 0;

var _config = require('../config');

const getParentCheckBox = function (checkbox) {
  const parent = checkbox.parentElement.parentElement.parentElement;

  if (parent.id !== _config.CLASS_OR_ID.AG_EDITOR_ID) {
    return parent.firstElementChild;
  } else {
    return null;
  }
};

exports.getParentCheckBox = getParentCheckBox;
