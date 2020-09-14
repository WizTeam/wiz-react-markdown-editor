import { useEffect, useState } from 'react';

export default function useEditor(editorRef) {
  const [isCursorInTable, setIsCursorInTable] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  useEffect(() => {
    function handleSelectionChange(changes) {
      if (
        changes.start.key === changes.end.key &&
        changes.start.offset === changes.end.offset &&
        changes.start.block.functionType === 'cellContent'
      ) {
        if (!isCursorInTable) {
          setIsCursorInTable(true);
        }
      } else if (isCursorInTable) {
        setIsCursorInTable(false);
      }
      if (!isFocus) {
        setIsFocus(true);
      }
    }
    editorRef.current.on('selectionChange', handleSelectionChange);
    editorRef.current.on('blur', () => {
      if (isFocus) {
        setIsFocus(false);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editorRef]);
  return { isCursorInTable, isFocus };
}
