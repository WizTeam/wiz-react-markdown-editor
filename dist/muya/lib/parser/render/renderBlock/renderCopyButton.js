'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _snabbdom = require('../snabbdom');

var _ = _interopRequireDefault(require('../../../assets/pngicon/copy/2.png'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const renderCopyButton = () => {
  const selector = 'a.ag-code-copy';
  const iconVnode = (0, _snabbdom.h)(
    'i.icon',
    (0, _snabbdom.h)(
      'i.icon-inner',
      {
        style: {
          background: 'url('.concat(_.default, ') no-repeat'),
          'background-size': '100%'
        }
      },
      ''
    )
  );
  return (0, _snabbdom.h)(
    selector,
    {
      attrs: {
        title: 'Copy content',
        contenteditable: 'false'
      }
    },
    iconVnode
  );
};

var _default = renderCopyButton;
exports.default = _default;
