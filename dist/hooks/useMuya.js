"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMuya = useMuya;

var _react = require("react");

var _lib = _interopRequireDefault(require("../muya/lib"));

var _tablePicker = _interopRequireDefault(require("../muya/lib/ui/tablePicker"));

var _quickInsert = _interopRequireDefault(require("../muya/lib/ui/quickInsert"));

var _codePicker = _interopRequireDefault(require("../muya/lib/ui/codePicker"));

var _emojiPicker = _interopRequireDefault(require("../muya/lib/ui/emojiPicker"));

var _imagePicker = _interopRequireDefault(require("../muya/lib/ui/imagePicker"));

var _imageSelector = _interopRequireDefault(require("../muya/lib/ui/imageSelector"));

var _imageToolbar = _interopRequireDefault(require("../muya/lib/ui/imageToolbar"));

var _transformer = _interopRequireDefault(require("../muya/lib/ui/transformer"));

var _formatPicker = _interopRequireDefault(require("../muya/lib/ui/formatPicker"));

var _linkTools = _interopRequireDefault(require("../muya/lib/ui/linkTools"));

var _footnoteTool = _interopRequireDefault(require("../muya/lib/ui/footnoteTool"));

var _tableTools = _interopRequireDefault(require("../muya/lib/ui/tableTools"));

var _frontMenu = _interopRequireDefault(require("../muya/lib/ui/frontMenu"));

var _tagInsert = _interopRequireDefault(require("../muya/lib/ui/tagInsert"));

var _utils = require("../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (_utils.os.isPc) {
  _lib.default.use(_quickInsert.default);

  _lib.default.use(_codePicker.default);

  _lib.default.use(_emojiPicker.default);

  _lib.default.use(_imageToolbar.default);

  _lib.default.use(_transformer.default);

  _lib.default.use(_formatPicker.default);

  _lib.default.use(_linkTools.default, {
    jumpClick: obj => {
      if (obj.token.type === 'link') {
        try {
          window.open(obj.href);
        } catch (e) {
          console.log(e);
        }
      }
    }
  });

  _lib.default.use(_footnoteTool.default);

  _lib.default.use(_frontMenu.default);

  _lib.default.use(_tagInsert.default);
}

_lib.default.use(_tablePicker.default);

_lib.default.use(_tableTools.default);

_lib.default.use(_imageSelector.default, {
  unsplashAccessKey: process.env.UNSPLASH_ACCESS_KEY
});

_lib.default.use(_imagePicker.default);

function formatOptions(options) {
  Object.assign(options, /dark/i.test(options.theme) ? {
    mermaidTheme: 'dark',
    vegaTheme: 'dark'
  } : {
    mermaidTheme: 'default',
    vegaTheme: 'latimes'
  });
  return options;
}

function useMuya(eleRef, options) {
  const [editor, setEditor] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    if (eleRef.current) {
      setEditor(new Proxy(new _lib.default(eleRef.current, formatOptions(options)), {
        get(target, key, proxy) {
          return key === 'setOptions' ? (opt, ...arg) => Reflect.apply(target[key], target, [formatOptions(opt), ...arg]) : Reflect.get(target, key, proxy);
        }

      }));
    }

    return () => {
      if (editor) {
        editor.destroy();
        setEditor(null);
      }
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eleRef]);
  return editor;
}