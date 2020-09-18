"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _useMuya = require("./hooks/useMuya");

var _theme = require("./theme");

var _utils = require("./utils/utils");

var _eventUtils = require("./utils/eventUtils");

require("./style/printService.css");

require("./muya/themes/default.css");

require("./style/index.css");

var _useImperative = _interopRequireDefault(require("./hooks/useImperative"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable jsx-a11y/no-static-element-interactions */
// import isOsx from './muya/lib/config';
// import './style/one-dark.css';
const useStyles = (0, _styles.makeStyles)({
  editorWrapper: {
    height: '100%',
    position: 'relative',
    flex: 1,
    backgroundColor: 'var(--editorBgColor)',
    color: 'var(--editorColor)' // & .ag-dialog-table {
    //   & .el-button {
    //     font-size: 13px;
    //     width: 70px;
    //   }
    // }

  },
  editorComponent: {
    height: '100%',
    overflow: 'auto',
    boxSizing: 'border-box'
  },
  source: {
    position: 'absolute',
    zIndex: -1,
    top: 0,
    left: 0,
    overflow: 'hidden'
  },
  typewriter: {
    '& $editorComponent': {
      paddingTop: 'calc(50vh - 136px)',
      paddingBottom: 'calc(50vh - 54px)'
    }
  }
});
const STANDAR_Y = 320;
let oldMd = '';

function Editor(props) {
  const classes = useStyles(); //

  const {
    typewriter,
    focus,
    sourceCode,
    onSelectImages,
    markdown,
    width,
    resourceUrl,
    readOnly,
    wordList,
    editorFocus
  } = props; //

  const editorRef = (0, _react.useRef)();
  const [theme, setTheme] = (0, _react.useState)((0, _utils.isDarkMode)() ? 'dark' : 'light');
  const transformImageUrl = (0, _react.useCallback)(src => resourceUrl && src.startsWith('index_files/') ? (0, _utils.formatUrl)(resourceUrl) + src : src, [resourceUrl]);
  const MuyaOptions = (0, _react.useMemo)(() => ({
    focusMode: focus,
    theme,
    imagePathPicker: onSelectImages // markdown,
    // transformImageUrl

  }), // eslint-disable-next-line react-hooks/exhaustive-deps
  [focus, onSelectImages, theme, resourceUrl]);
  const editor = (0, _useMuya.useMuya)(editorRef, MuyaOptions);
  (0, _react.useEffect)(() => {
    function scrollToCursor(duration = 300) {
      if (!editor) return;
      setTimeout(() => {
        const {
          container
        } = editor;
        const {
          y
        } = editor.getSelection().cursorCoords;
        (0, _utils.animatedScrollTo)(container, container.scrollTop + y - STANDAR_Y, duration);
      }, 0);
    }

    if (typewriter) {
      scrollToCursor();
    }
  }, [editor, typewriter]);
  (0, _react.useEffect)(() => {
    editor === null || editor === void 0 ? void 0 : editor.setFocusMode(focus);
  }, [editor, focus]); // 后生成的属性，具有更高的优先级

  (0, _react.useEffect)(() => {
    (0, _theme.setEditorWidth)(width);
  }, [width]);
  (0, _react.useEffect)(() => {
    editor === null || editor === void 0 ? void 0 : editor.setOptions(MuyaOptions, true); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [MuyaOptions]);
  (0, _react.useEffect)(() => {
    if (oldMd !== markdown) {
      editor === null || editor === void 0 ? void 0 : editor.setOptions({
        transformImageUrl
      });
      editor === null || editor === void 0 ? void 0 : editor.setMarkdown(markdown, 0);
      oldMd = markdown;
    } else {
      editor === null || editor === void 0 ? void 0 : editor.setOptions({
        transformImageUrl
      }, true);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [transformImageUrl, markdown]);
  (0, _react.useEffect)(() => {
    if (editor && editor.container) {
      editor.container.setAttribute('contenteditable', !readOnly);
    }
  }, [editor, readOnly]);
  (0, _react.useEffect)(() => {
    function handleSelectionChange(changes) {
      const {
        y
      } = changes.cursorCoords;
      const container = editor.container; //

      if (typewriter) {
        (0, _utils.animatedScrollTo)(container, container.scrollTop + y - STANDAR_Y, 100);
      } // 快到底部时，向下滚动


      if (container.clientHeight - y < 100) {
        const editableHeight = container.clientHeight - 100;
        (0, _utils.animatedScrollTo)(container, container.scrollTop + (y - editableHeight), 0);
      }
    }

    function handleSystemThemeChange(e) {
      if (e.matches && theme !== 'dark') {
        setTheme('dark');
      } else if (!e.matches && theme !== 'light') {
        setTheme('light');
      }
    }

    const media = window.matchMedia('(prefers-color-scheme: dark)');

    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', handleSystemThemeChange);
    } else if (typeof media.addListener === 'function') {
      media.addListener(handleSystemThemeChange);
    }

    if (editor) {
      editor.on('change', props.onChange);
      editor.on('selectionChange', handleSelectionChange);
    }

    return () => {
      if (typeof media.removeEventListener === 'function') {
        media.removeEventListener('change', handleSystemThemeChange);
      } else if (typeof media.removeListener === 'function') {
        media.removeListener(handleSystemThemeChange);
      }

      if (editor) {
        editor.off('change', props.onChange);
        editor.off('selectionChange', handleSelectionChange);
      }
    };
  }, [editor, props.onChange, theme, typewriter]);
  (0, _react.useEffect)(() => {
    var _editor$tagInsert;

    editor === null || editor === void 0 ? void 0 : (_editor$tagInsert = editor.tagInsert) === null || _editor$tagInsert === void 0 ? void 0 : _editor$tagInsert.setWordList(wordList);
  }, [editor, wordList]);
  (0, _react.useEffect)(() => {
    function _editorFocus() {
      editor === null || editor === void 0 ? void 0 : editor.focus();
    } //


    editorFocus(_editorFocus);
  }, [editor, editorFocus]);

  function handleKeyDown(e) {
    let res = true;

    if ((0, _eventUtils.matchHotKey)('⌘-z', e)) {
      editor === null || editor === void 0 ? void 0 : editor.undo();
    } else if ((0, _eventUtils.matchHotKey)('⇧-⌘-z', e)) {
      editor === null || editor === void 0 ? void 0 : editor.redo();
    } else if ((0, _eventUtils.matchHotKey)('⌘-1', e)) {
      editor === null || editor === void 0 ? void 0 : editor.updateParagraph('heading 1');
    } else if ((0, _eventUtils.matchHotKey)('⌘-2', e)) {
      editor === null || editor === void 0 ? void 0 : editor.updateParagraph('heading 2');
    } else if ((0, _eventUtils.matchHotKey)('⌘-3', e)) {
      editor === null || editor === void 0 ? void 0 : editor.updateParagraph('heading 3');
    } else if ((0, _eventUtils.matchHotKey)('⌘-4', e)) {
      editor === null || editor === void 0 ? void 0 : editor.updateParagraph('heading 4');
    } else if ((0, _eventUtils.matchHotKey)('⌘-5', e)) {
      editor === null || editor === void 0 ? void 0 : editor.updateParagraph('heading 5');
    } else if ((0, _eventUtils.matchHotKey)('⌘-6', e)) {
      editor === null || editor === void 0 ? void 0 : editor.updateParagraph('heading 6');
    } else {
      res = false;
    }

    if (res) {
      e.preventDefault();
    }
  }

  (0, _useImperative.default)(props.editorRef, editor);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(classes.editorWrapper, typewriter && classes.typewriter, focus && classes.focus, sourceCode && classes.source, props.editorWrapperClassName),
    onKeyDown: handleKeyDown
  }, /*#__PURE__*/_react.default.createElement("div", {
    ref: editorRef,
    className: (0, _classnames.default)(classes.editorComponent, props.editorComponentClassName)
  }));
}

Editor.propTypes = {
  width: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  onSelectImages: _propTypes.default.func,
  onChange: _propTypes.default.func,
  sourceCode: _propTypes.default.bool,
  typewriter: _propTypes.default.bool,
  focus: _propTypes.default.bool,
  markdown: _propTypes.default.string,
  resourceUrl: _propTypes.default.string,
  readOnly: _propTypes.default.bool,
  wordList: _propTypes.default.array,
  editorFocus: _propTypes.default.func
};
Editor.defaultProps = {
  width: '100%',
  onSelectImages: null,
  onChange: () => {},
  sourceCode: false,
  typewriter: false,
  focus: false,
  markdown: '',
  resourceUrl: '',
  readOnly: false,
  wordList: [],
  editorFocus: () => {}
};
var _default = Editor;
exports.default = _default;