'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.setEditorWidth = setEditorWidth;
exports.addThemeStyle = addThemeStyle;

var _domUtils = require('../utils/domUtils');

var _utils = require('../utils/utils');

var _themeColor = require('./themeColor');

function patchTheme(css) {
  return '@media not print {\n'.concat(css, '\n}');
}

function setEditorWidth(value) {
  const val = (0, _utils.addSizeUnit)(value);

  if (value && /^[0-9]+(?:ch|px|%)$/.test(val)) {
    const EDITOR_WIDTH_STYLE_ID = 'editor-width';
    let result = ''; // Overwrite the theme value and add 100px for padding.

    result = ':root { --editorAreaWidth: calc(100px + '.concat(val, '); }');
    (0, _domUtils.createdStyleTag)(EDITOR_WIDTH_STYLE_ID, result, true);
  }
}

function addThemeStyle(theme) {
  const THEME_STYLE_ID = 'theme-style';
  let style = '';

  switch (theme) {
    case 'light':
      style = '';
      break;

    case 'dark':
      style = patchTheme((0, _themeColor.dark)());
      break;

    case 'material-dark':
      style = patchTheme((0, _themeColor.materialDark)());
      break;

    case 'ulysses':
      style = patchTheme((0, _themeColor.ulysses)());
      break;

    case 'graphite':
      style = patchTheme((0, _themeColor.graphite)());
      break;

    case 'one-dark':
      style = patchTheme((0, _themeColor.oneDark)());
      break;

    default:
      console.log('unknown theme');
      break;
  }

  (0, _domUtils.createdStyleTag)(THEME_STYLE_ID, style, true);
}
