'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.dark = dark;
exports.graphite = graphite;
exports.materialDark = materialDark;
exports.oneDark = oneDark;
exports.ulysses = ulysses;

var _darkTheme = _interopRequireDefault(require('../style/dark.theme.css'));

var _graphiteTheme = _interopRequireDefault(require('../style/graphite.theme.css'));

var _materialDarkTheme = _interopRequireDefault(require('../style/material-dark.theme.css'));

var _oneDark = _interopRequireDefault(require('../style/one-dark.css'));

var _ulyssesTheme = _interopRequireDefault(require('../style/ulysses.theme.css'));

var _darkPrismTheme = _interopRequireDefault(require('../style/dark-prism.theme.css'));

var _oneDarkPrismTheme = _interopRequireDefault(require('../style/one-dark-prism.theme.css'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function dark() {
  return ''.concat(_darkTheme.default, '\n').concat(_darkPrismTheme.default);
}

function graphite() {
  return _graphiteTheme.default;
}

function materialDark() {
  return ''.concat(_materialDarkTheme.default, '\n').concat(_darkPrismTheme.default);
}

function oneDark() {
  return ''.concat(_oneDark.default, '\n').concat(_oneDarkPrismTheme.default);
}

function ulysses() {
  return _ulyssesTheme.default;
}
