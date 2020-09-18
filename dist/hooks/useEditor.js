"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useEditor;

var _react = require("react");

function useEditor(editorRef) {
  const [isCursorInTable, setIsCursorInTable] = (0, _react.useState)(false);
  const [isFocus, setIsFocus] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    function handleSelectionChange(changes) {
      if (changes.start.key === changes.end.key && changes.start.offset === changes.end.offset && changes.start.block.functionType === 'cellContent') {
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
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editorRef]);
  return {
    isCursorInTable,
    isFocus
  };
}