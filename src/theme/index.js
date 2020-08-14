import { createdStyleTag } from '../utils/domUtils';
import { addSizeUnit } from '../utils/utils';
import { dark, graphite, materialDark, oneDark, ulysses } from './themeColor';

function patchTheme(css) {
  return `@media not print {\n${css}\n}`;
}

export function setEditorWidth(value) {
  const val = addSizeUnit(value);
  if (value && /^[0-9]+(?:ch|px|%)$/.test(val)) {
    const EDITOR_WIDTH_STYLE_ID = 'editor-width';
    let result = '';
    // Overwrite the theme value and add 100px for padding.
    result = `:root { --editorAreaWidth: calc(100px + ${val}); }`;
    createdStyleTag(EDITOR_WIDTH_STYLE_ID, result, true);
  }
}

export function addThemeStyle(theme) {
  const THEME_STYLE_ID = 'theme-style';
  let style = '';
  switch (theme) {
    case 'light':
      style = '';
      break;
    case 'dark':
      style = patchTheme(dark());
      break;
    case 'material-dark':
      style = patchTheme(materialDark());
      break;
    case 'ulysses':
      style = patchTheme(ulysses());
      break;
    case 'graphite':
      style = patchTheme(graphite());
      break;
    case 'one-dark':
      style = patchTheme(oneDark());
      break;
    default:
      console.log('unknown theme');
      break;
  }
  createdStyleTag(THEME_STYLE_ID, style, true);
}
