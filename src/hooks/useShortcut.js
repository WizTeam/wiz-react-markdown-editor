import { useEffect, useCallback } from 'react';
import { matchHotKey } from '../utils/eventUtils';

// eslint-disable-next-line prettier/prettier
const keys = [
  ['edit.undo', 'CmdOrCtrl+Z'],
  ['edit.redo', 'CmdOrCtrl+Shift+Z'],
  ['edit.copy-as-markdown', 'CmdOrCtrl+Shift+C'],
  ['edit.duplicate', 'CmdOrCtrl+Shift+P'],
  ['edit.create-paragraph', 'Shift+CmdOrCtrl+N'],
  ['edit.delete-paragraph', 'Shift+CmdOrCtrl+D'],
  ['edit.screenshot', 'CmdOrCtrl+Alt+A'], // macOS only
  //
  ['paragraph.upgrade-heading', 'CmdOrCtrl+='],
  ['paragraph.degrade-heading', 'CmdOrCtrl+-'],
  ['paragraph.paragraph', 'CmdOrCtrl+0'],
  ['paragraph.heading-1', 'CmdOrCtrl+1'],
  ['paragraph.heading-2', 'CmdOrCtrl+2'],
  ['paragraph.heading-3', 'CmdOrCtrl+3'],
  ['paragraph.heading-4', 'CmdOrCtrl+4'],
  ['paragraph.heading-5', 'CmdOrCtrl+5'],
  ['paragraph.heading-6', 'CmdOrCtrl+6'],
  ['paragraph.horizontal-line', 'CmdOrCtrl+Alt+-'],
  ['paragraph.table', 'CmdOrCtrl+Shift+T'],
  ['paragraph.math-formula', 'CmdOrCtrl+Alt+M'],
  // ['paragraph.html-block', isOsx ? 'CmdOrCtrl+Alt+J' : 'CmdOrCtrl+Alt+H'],
  ['paragraph.html-block', 'CmdOrCtrl+Alt+J'],
  ['paragraph.code-fence', 'CmdOrCtrl+Alt+C'],
  ['paragraph.quote-block', 'CmdOrCtrl+Alt+Q'],
  ['paragraph.order-list', 'CmdOrCtrl+Alt+O'],
  ['paragraph.bullet-list', 'CmdOrCtrl+Alt+U'],
  ['paragraph.task-list', 'CmdOrCtrl+Alt+X'],
  // Format menu
  ['format.strong', 'CmdOrCtrl+B'],
  ['format.emphasis', 'CmdOrCtrl+I'],
  ['format.underline', 'CmdOrCtrl+U'],
  ['format.highlight', 'Shift+CmdOrCtrl+H'],
  ['format.inline-code', 'CmdOrCtrl+`'],
  ['format.inline-math', 'Shift+CmdOrCtrl+M'],
  ['format.strike', 'CmdOrCtrl+D'],
  ['format.hyperlink', 'CmdOrCtrl+L'],
  ['format.image', 'CmdOrCtrl+Shift+I'],
  ['format.clear-format', 'Shift+CmdOrCtrl+R']
];

export default function useShortcut(container, editor, listener) {
  //
  const dispatch = useCallback(
    (id) => {
      switch (id) {
        case 'edit.undo':
          editor?.undo();
          break;
        case 'edit.redo':
          editor?.redo();
          break;
        case 'edit.copy-as-markdown':
          editor?.copyAsMarkdown();
          break;
        case 'edit.duplicate':
          editor?.contentState.duplicate();
          break;
        case 'edit.create-paragraph':
          editor?.contentState.insertParagraph('after', '', true);
          break;
        case 'edit.delete-paragraph':
          editor?.contentState.deleteParagraph();
          break;
        case 'edit.screenshot':
          if (listener.onScreenCaptureManual) {
            listener.onScreenCaptureManual();
          }
          break;
        case 'paragraph.upgrade-heading':
          editor?.contentState.updateParagraph('upgrade heading');
          break;
        case 'paragraph.degrade-heading':
          editor?.contentState.updateParagraph('degrade heading');
          break;
        case 'paragraph.paragraph':
          editor?.contentState.updateParagraph('paragraph', true);
          break;
        case 'paragraph.heading-1':
        case 'paragraph.heading-2':
        case 'paragraph.heading-3':
        case 'paragraph.heading-4':
        case 'paragraph.heading-5':
        case 'paragraph.heading-6':
          editor?.contentState.updateParagraph(id.slice(10).replace('-', ' '), true);
          break;
        case 'paragraph.horizontal-line':
          editor?.contentState.updateParagraph('hr', true);
          break;
        case 'paragraph.table':
          editor?.contentState.updateParagraph('table', true);
          break;
        case 'paragraph.math-formula':
          editor?.contentState.updateParagraph('mathblock', true);
          break;
        case 'paragraph.html-block':
          editor?.contentState.updateParagraph('html', true);
          break;
        case 'paragraph.code-fence':
          editor?.contentState.updateParagraph('pre', true);
          break;
        case 'paragraph.quote-block':
          editor?.contentState.updateParagraph('blockquote', true);
          break;
        case 'paragraph.order-list':
          editor?.contentState.updateParagraph('ol-order', true);
          break;
        case 'paragraph.bullet-list':
          editor?.contentState.updateParagraph('ul-bullet', true);
          break;
        case 'paragraph.task-list':
          editor?.contentState.updateParagraph('ul-task', true);
          break;
        case 'format.strong':
          editor?.contentState.format('strong');
          break;
        case 'format.emphasis':
          editor?.contentState.format('em');
          break;
        case 'format.underline':
          editor?.contentState.format('u');
          break;
        case 'format.highlight':
          editor?.contentState.format('mark');
          break;
        case 'format.inline-code':
          editor?.contentState.format('inline_code');
          break;
        case 'format.inline-math':
          editor?.contentState.format('inline_math');
          break;
        case 'format.strike':
          editor?.contentState.format('del');
          break;
        case 'format.hyperlink':
          editor?.contentState.format('link');
          break;
        case 'format.image':
          editor?.contentState.format('image');
          break;
        case 'format.clear-format':
          editor?.contentState.format('clear');
          break;
        default:
          break;
      }
    },
    [editor, listener]
  );
  //
  useEffect(() => {
    function handler(event) {
      keys.forEach(([id, shortcut]) => {
        if (matchHotKey(shortcut, event, '+')) {
          event.preventDefault();
          dispatch(id);
        }
      });
    }
    //
    if (container) {
      container.addEventListener('keydown', handler);
    }
    return () => {
      if (container) {
        container.removeEventListener('keydown', handler);
      }
    };
  }, [container, dispatch]);
  //
  return null;
}
