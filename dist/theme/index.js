'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.setEditorWidth = setEditorWidth;

var _domUtils = require('../utils/domUtils');

var _utils = require('../utils/utils');

function setEditorWidth(value) {
  const val = (0, _utils.addSizeUnit)(value);

  if (value && /^[0-9]+(?:ch|px|%)$/.test(val)) {
    const EDITOR_WIDTH_STYLE_ID = 'editor-width';
    let result = ''; // Overwrite the theme value and add 100px for padding.

    result = ':root { --editorAreaWidth: calc(100px + '.concat(val, '); }');
    (0, _domUtils.createdStyleTag)(EDITOR_WIDTH_STYLE_ID, result, true);
  }
}
