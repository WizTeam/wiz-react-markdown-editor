'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _config = require('../../config');

var _ = _interopRequireDefault(require('../../assets/pngicon/format_strong/2.png'));

var _2 = _interopRequireDefault(require('../../assets/pngicon/format_emphasis/2.png'));

var _3 = _interopRequireDefault(require('../../assets/pngicon/format_underline/2.png'));

var _4 = _interopRequireDefault(require('../../assets/pngicon/code/2.png'));

var _5 = _interopRequireDefault(require('../../assets/pngicon/format_image/2.png'));

var _6 = _interopRequireDefault(require('../../assets/pngicon/format_link/2.png'));

var _7 = _interopRequireDefault(require('../../assets/pngicon/format_strike/2.png'));

var _8 = _interopRequireDefault(require('../../assets/pngicon/format_math/2.png'));

var _9 = _interopRequireDefault(require('../../assets/pngicon/highlight/2.png'));

var _10 = _interopRequireDefault(require('../../assets/pngicon/format_clear/2.png'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const COMMAND_KEY = _config.isOsx ? '⌘' : 'Ctrl';
const icons = [
  {
    type: 'strong',
    tooltip: 'Emphasize',
    shortcut: ''.concat(COMMAND_KEY, '+B'),
    icon: _.default
  },
  {
    type: 'em',
    tooltip: 'Italic',
    shortcut: ''.concat(COMMAND_KEY, '+I'),
    icon: _2.default
  },
  {
    type: 'u',
    tooltip: 'Underline',
    shortcut: ''.concat(COMMAND_KEY, '+U'),
    icon: _3.default
  },
  {
    type: 'del',
    tooltip: 'Strikethrough',
    shortcut: ''.concat(COMMAND_KEY, '+D'),
    icon: _7.default
  },
  {
    type: 'mark',
    tooltip: 'Highlight',
    shortcut: '\u21E7+'.concat(COMMAND_KEY, '+H'),
    icon: _9.default
  },
  {
    type: 'inline_code',
    tooltip: 'Inline Code',
    shortcut: ''.concat(COMMAND_KEY, '+`'),
    icon: _4.default
  },
  {
    type: 'inline_math',
    tooltip: 'Inline Math',
    shortcut: '\u21E7+'.concat(COMMAND_KEY, '+M'),
    icon: _8.default
  },
  {
    type: 'link',
    tooltip: 'Link',
    shortcut: ''.concat(COMMAND_KEY, '+L'),
    icon: _6.default
  },
  {
    type: 'image',
    tooltip: 'Image',
    shortcut: '\u21E7+'.concat(COMMAND_KEY, '+I'),
    icon: _5.default
  },
  {
    type: 'clear',
    tooltip: 'Eliminate',
    shortcut: '\u21E7+'.concat(COMMAND_KEY, '+R'),
    icon: _10.default
  }
];
var _default = icons;
exports.default = _default;
