"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Renderer", {
  enumerable: true,
  get: function () {
    return _renderer.default;
  }
});
Object.defineProperty(exports, "Lexer", {
  enumerable: true,
  get: function () {
    return _lexer.default;
  }
});
Object.defineProperty(exports, "Parser", {
  enumerable: true,
  get: function () {
    return _parser.default;
  }
});
exports.default = void 0;

var _renderer = _interopRequireDefault(require("./renderer"));

var _lexer = _interopRequireDefault(require("./lexer"));

var _parser = _interopRequireDefault(require("./parser"));

var _options = _interopRequireDefault(require("./options"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Marked
 */
function marked(src, opt = {}) {
  // throw error in case of non string input
  if (typeof src === 'undefined' || src === null) {
    throw new Error('marked(): input parameter is undefined or null');
  }

  if (typeof src !== 'string') {
    throw new Error('marked(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
  }

  try {
    opt = Object.assign({}, _options.default, opt);
    return new _parser.default(opt).parse(new _lexer.default(opt).lex(src));
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/marktext/marktext/issues.';

    if (opt.silent) {
      return '<p>An error occurred:</p><pre>' + escape(e.message + '', true) + '</pre>';
    }

    throw e;
  }
}

var _default = marked;
exports.default = _default;