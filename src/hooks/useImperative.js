import { useImperativeHandle } from 'react';

export default function useImperative(ref, editor) {
  function insertTag() {
    editor.contentState.formatTag();
  }

  function insertBold() {
    editor.contentState.format('strong');
  }

  function insertItalic() {
    editor.contentState.format('em');
  }
  function insertDeletedLine() {
    editor.contentState.format('del');
  }

  function insertOrderList() {
    editor.contentState.updateParagraph('ol-order', true);
  }

  function insertBulletList() {
    editor.contentState.updateParagraph('ul-bullet', true);
  }
  function insertLink() {
    editor.contentState.format('link');
  }
  function insertToDoList() {
    editor.contentState.updateParagraph('ul-task', true);
  }

  function insertTable() {
    editor.contentState.updateParagraph('table', true);
  }

  function insertImage() {
    editor.contentState.format('image');
  }

  function insertHorizontalLine() {
    editor.contentState.updateParagraph('hr', true);
  }

  function insertInlineCode() {
    editor.contentState.format('inline_code');
  }

  function insertCodeBlock() {
    editor.contentState.updateParagraph('pre', true);
  }

  function insertQuote() {
    editor.contentState.updateParagraph('blockquote', true);
  }

  function insertMathFormula() {
    editor.contentState.updateParagraph('mathblock', true);
  }

  useImperativeHandle(ref, () => ({
    insertTag,
    insertBold,
    insertItalic,
    insertDeletedLine,
    insertOrderList,
    insertBulletList,
    insertLink,
    insertToDoList,
    insertTable,
    insertImage,
    insertHorizontalLine,
    insertInlineCode,
    insertCodeBlock,
    insertQuote,
    insertMathFormula
  }));
}
