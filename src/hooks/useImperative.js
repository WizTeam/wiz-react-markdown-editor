import { useImperativeHandle, useRef, useEffect } from 'react';

export default function useImperative(ref, editor) {
  const eventRef = useRef([]);
  const cursorRef = useRef();

  useEffect(() => {
    if (editor) {
      eventRef.current.forEach((item) => editor.on(...item));
    }
    return () => {
      if (editor) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        eventRef.current.forEach((item) => editor.off(...item));
      }
    };
  }, [editor]);

  useImperativeHandle(
    ref,
    () => {
      function insertHeader() {
        const { start: oldStart } = editor.contentState.cursor;
        if (oldStart) {
          const block = editor.contentState.getBlock(oldStart.key);
          const outBlock = editor.contentState.findOutMostBlock(block);
          switch (outBlock.type) {
            case 'h1':
              editor.contentState.updateParagraph('heading 2', true);
              break;
            case 'h2':
              editor.contentState.updateParagraph('heading 3', true);
              break;
            case 'h3':
              editor.contentState.updateParagraph('heading 4', true);
              break;
            case 'h4':
              editor.contentState.updateParagraph('heading 5', true);
              break;
            case 'h5':
              editor.contentState.updateParagraph('heading 6', true);
              break;
            case 'h6':
            case 'p':
              editor.contentState.updateParagraph('heading 1', true);
              break;
            default:
              break;
          }
        }
      }
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

      function insertTable({ rows, columns }) {
        if (rows && columns) {
          editor.contentState.createTable({ rows, columns });
        } else {
          editor.contentState.updateParagraph('table', true);
        }
      }

      function insertImage(imageInfo) {
        if (imageInfo) {
          editor.contentState.insertImage(imageInfo);
        } else {
          editor.contentState.format('image');
        }
      }

      function replaceImage(oldImageInfo, imageInfo) {
        editor.contentState.replaceImage(oldImageInfo, imageInfo);
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

      function on(...param) {
        if (editor) {
          editor.on(...param);
        }
        eventRef.current.push(param);
      }

      function tableColAlignLeft() {
        editor.contentState.tableToolBarClick('left');
      }
      function tableColAlignCenter() {
        editor.contentState.tableToolBarClick('center');
      }
      function tableColAlignRight() {
        editor.contentState.tableToolBarClick('right');
      }
      function insertRowAbove() {
        editor.contentState.editTable({
          action: 'insert',
          location: 'previous',
          target: 'row'
        });
      }

      function insertRowBelow() {
        editor.contentState.editTable({
          action: 'insert',
          location: 'next',
          target: 'row'
        });
      }

      function insertColLeft() {
        editor.contentState.editTable({
          action: 'insert',
          location: 'left',
          target: 'column'
        });
      }

      function insertColRight() {
        editor.contentState.editTable({
          action: 'insert',
          location: 'right',
          target: 'column'
        });
      }
      function removeTableCol() {
        editor.contentState.editTable({
          action: 'remove',
          location: 'current',
          target: 'column'
        });
      }
      function removeTableRow() {
        editor.contentState.editTable({
          action: 'remove',
          location: 'current',
          target: 'row'
        });
      }
      function removeTable() {
        editor.contentState.tableToolBarClick('delete');
      }
      function saveCursor() {
        cursorRef.current = editor.contentState.cursor;
      }

      function getTableMarkdown() {
        return editor.contentState.getTableMarkdown();
      }

      function resetCursor() {
        if (cursorRef.current) {
          // eslint-disable-next-line no-param-reassign
          editor.contentState.cursor = cursorRef.current;
          editor.contentState.setCursor();
        }
      }

      function indent() {
        editor.contentState.indent();
      }

      function unindent() {
        editor.contentState.unindent();
      }
      return {
        insertHeader,
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
        insertMathFormula,
        on,
        tableColAlignLeft,
        tableColAlignCenter,
        tableColAlignRight,
        insertRowAbove,
        insertRowBelow,
        insertColLeft,
        insertColRight,
        removeTableCol,
        removeTableRow,
        removeTable,
        saveCursor,
        resetCursor,
        replaceImage,
        indent,
        unindent,
        focus: () => editor?.focus(),
        editor: editor?.container,
        getTableMarkdown
      };
    },
    [editor]
  );
}
