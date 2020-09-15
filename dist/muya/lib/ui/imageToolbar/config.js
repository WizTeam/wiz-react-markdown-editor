'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _ = _interopRequireDefault(require('../../assets/pngicon/imageEdit/2.png'));

var _2 = _interopRequireDefault(require('../../assets/pngicon/inline_image/2.png'));

var _3 = _interopRequireDefault(require('../../assets/pngicon/algin_left/2.png'));

var _4 = _interopRequireDefault(require('../../assets/pngicon/algin_center/2.png'));

var _5 = _interopRequireDefault(require('../../assets/pngicon/algin_right/2.png'));

var _6 = _interopRequireDefault(require('../../assets/pngicon/image_delete/2.png'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const icons = [
  {
    type: 'edit',
    tooltip: 'Edit Image',
    icon: _.default
  },
  {
    type: 'inline',
    tooltip: 'Inline Image',
    icon: _2.default
  },
  {
    type: 'left',
    tooltip: 'Align Left',
    icon: _3.default
  },
  {
    type: 'center',
    tooltip: 'Align Middle',
    icon: _4.default
  },
  {
    type: 'right',
    tooltip: 'Align Right',
    icon: _5.default
  },
  {
    type: 'delete',
    tooltip: 'Remove Image',
    icon: _6.default
  }
];
var _default = icons;
exports.default = _default;
