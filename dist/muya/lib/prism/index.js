"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "loadedCache", {
  enumerable: true,
  get: function () {
    return _loadLanguage.loadedCache;
  }
});
Object.defineProperty(exports, "transfromAliasToOrigin", {
  enumerable: true,
  get: function () {
    return _loadLanguage.transfromAliasToOrigin;
  }
});
Object.defineProperty(exports, "languages", {
  enumerable: true,
  get: function () {
    return _languages.default;
  }
});
exports.default = exports.loadLanguage = exports.search = void 0;

var _prismjs = _interopRequireDefault(require("prismjs"));

var _fuzzaldrin = require("fuzzaldrin");

var _loadLanguage = _interopRequireWildcard(require("./loadLanguage"));

var _languages = _interopRequireDefault(require("./languages"));

require("prismjs/plugins/keep-markup/prism-keep-markup");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const prism = _prismjs.default;
window.Prism = _prismjs.default;
/* eslint-disable */
// import('prismjs/plugins/keep-markup/prism-keep-markup')

/* eslint-enable */

const langs = [];

for (const name of Object.keys(_languages.default)) {
  const lang = _languages.default[name];
  langs.push({
    name,
    ...lang
  });

  if (lang.alias) {
    if (typeof lang.alias === 'string') {
      langs.push({
        name: lang.alias,
        ...lang
      });
    } else if (Array.isArray(lang.alias)) {
      langs.push(...lang.alias.map(a => ({
        name: a,
        ...lang
      })));
    }
  }
}

const loadLanguage = (0, _loadLanguage.default)(_prismjs.default);
exports.loadLanguage = loadLanguage;

const search = text => {
  return (0, _fuzzaldrin.filter)(langs, text, {
    key: 'name'
  });
}; // pre load latex and yaml and html for `math block` \ `front matter` and `html block`


exports.search = search;
loadLanguage('latex');
loadLanguage('yaml');
var _default = prism;
exports.default = _default;