import { createdStyleTag } from '../utils/domUtils';
import { addSizeUnit } from '../utils/utils';

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
