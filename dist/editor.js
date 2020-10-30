"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _assert = _interopRequireDefault(require("assert"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _editor_core = _interopRequireDefault(require("./editor_core"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

class SaveDataQueue {
  constructor(onSave) {
    this._last = null;
    this._onSave = onSave;
    setInterval(() => {
      this._autoSave();
    }, 500);
  }

  push(data) {
    if (this._last) {
      const {
        contentId
      } = this._last;

      if (contentId !== (data === null || data === void 0 ? void 0 : data.contentId)) {
        this._saveNow(); // save old


        this._last = data;
        return;
      }
    }

    this._last = data;
  }

  _autoSave() {
    if (!this._last) return; //

    const {
      lastChange
    } = this._last;
    const now = new Date().valueOf();

    if (now - lastChange > 1000) {
      this._saveNow();
    }
  }

  _saveNow() {
    (0, _assert.default)(this._last);

    this._onSave(this._last);

    this._last = null;
  }

}

const MarkdownEditor = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    onSave,
    markdown = '',
    contentId,
    ...editorCoreProp
  } = props; //
  // eslint-disable-next-line no-shadow

  function doSaveData({
    contentId,
    content
  }) {
    if (onSave) {
      onSave({
        contentId,
        markdown: content.markdown
      });
    }
  }

  const saveDataQueueRef = (0, _react.useRef)(new SaveDataQueue(doSaveData));
  const lastDataRef = (0, _react.useRef)({}); //

  function handleChange(content) {
    //
    if (!contentId) {
      return;
    } //


    if (lastDataRef.current.contentId === contentId && lastDataRef.current.markdown.trim() === content.markdown.trim()) {
      return;
    }

    lastDataRef.current = {
      contentId,
      markdown: content.markdown
    }; //

    saveDataQueueRef.current.push({
      content,
      contentId,
      lastChange: new Date().valueOf()
    });
  }

  (0, _react.useEffect)(() => {
    // content changed
    saveDataQueueRef.current.push(null);
    lastDataRef.current = {
      markdown,
      contentId
    };
  }, [contentId, markdown]);
  return /*#__PURE__*/_react.default.createElement(_editor_core.default, _extends({
    markdown: markdown // eslint-disable-next-line react/jsx-props-no-spreading

  }, editorCoreProp, {
    onChange: content => {
      handleChange(content);

      if (editorCoreProp.onChange) {
        editorCoreProp.onChange(content);
      }
    },
    editorRef: ref
  }));
});
MarkdownEditor.propTypes = {
  width: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  theme: _propTypes.default.oneOf(['dark', 'light', 'material-dark', 'ulysses', 'graphite', 'one-dark', 'default']),
  onSelectImages: _propTypes.default.func,
  onSave: _propTypes.default.func,
  sourceCode: _propTypes.default.bool,
  typewriter: _propTypes.default.bool,
  focus: _propTypes.default.bool,
  markdown: _propTypes.default.string,
  resourceUrl: _propTypes.default.string,
  readOnly: _propTypes.default.bool,
  wordList: _propTypes.default.array,
  bottomHeight: _propTypes.default.number,
  lang: _propTypes.default.oneOf(['en', 'zh-cn', 'zh-tw'])
};
MarkdownEditor.defaultProps = {
  width: '100%',
  theme: 'default',
  onSelectImages: null,
  onSave: null,
  sourceCode: false,
  typewriter: false,
  focus: false,
  markdown: '',
  resourceUrl: '',
  readOnly: false,
  wordList: [],
  bottomHeight: undefined,
  lang: 'en'
};
var _default = MarkdownEditor;
exports.default = _default;