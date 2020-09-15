'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = renderIcon;

var _snabbdom = require('../snabbdom');

var _config = require('../../../config');

var _ = _interopRequireDefault(require('../../../assets/pngicon/paragraph/2.png'));

var _2 = _interopRequireDefault(require('../../../assets/pngicon/html/2.png'));

var _3 = _interopRequireDefault(require('../../../assets/pngicon/horizontal_line/2.png'));

var _4 = _interopRequireDefault(require('../../../assets/pngicon/front_matter/2.png'));

var _5 = _interopRequireDefault(require('../../../assets/pngicon/heading_1/2.png'));

var _6 = _interopRequireDefault(require('../../../assets/pngicon/heading_2/2.png'));

var _7 = _interopRequireDefault(require('../../../assets/pngicon/heading_3/2.png'));

var _8 = _interopRequireDefault(require('../../../assets/pngicon/heading_4/2.png'));

var _9 = _interopRequireDefault(require('../../../assets/pngicon/heading_5/2.png'));

var _10 = _interopRequireDefault(require('../../../assets/pngicon/heading_6/2.png'));

var _11 = _interopRequireDefault(require('../../../assets/pngicon/new_table/2.png'));

var _12 = _interopRequireDefault(require('../../../assets/pngicon/bullet_list/2.png'));

var _13 = _interopRequireDefault(require('../../../assets/pngicon/code/2.png'));

var _14 = _interopRequireDefault(require('../../../assets/pngicon/quote_block/2.png'));

var _15 = _interopRequireDefault(require('../../../assets/pngicon/todolist/2.png'));

var _16 = _interopRequireDefault(require('../../../assets/pngicon/math/2.png'));

var _17 = _interopRequireDefault(require('../../../assets/pngicon/order_list/2.png'));

var _18 = _interopRequireDefault(require('../../../assets/pngicon/flowchart/2.png'));

var _19 = _interopRequireDefault(require('../../../assets/pngicon/sequence/2.png'));

var _20 = _interopRequireDefault(require('../../../assets/pngicon/mermaid/2.png'));

var _21 = _interopRequireDefault(require('../../../assets/pngicon/chart/2.png'));

var _22 = _interopRequireDefault(require('../../../assets/pngicon/footnote/2.png'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const FUNCTION_TYPE_HASH = {
  mermaid: _20.default,
  flowchart: _18.default,
  sequence: _19.default,
  'vega-lite': _21.default,
  table: _11.default,
  html: _2.default,
  multiplemath: _16.default,
  fencecode: _13.default,
  indentcode: _13.default,
  frontmatter: _4.default,
  footnote: _22.default
};

function renderIcon(block) {
  if (block.parent) {
    console.error('Only top most block can render front icon button.');
  }

  const { type, functionType, listType } = block;
  const selector = 'a.'.concat(_config.CLASS_OR_ID.AG_FRONT_ICON);
  let icon = null;

  switch (type) {
    case 'p': {
      icon = _.default;
      break;
    }

    case 'figure':
    case 'pre': {
      icon = FUNCTION_TYPE_HASH[functionType];

      if (!icon) {
        console.warn('Unhandled functionType '.concat(functionType));
        icon = _.default;
      }

      break;
    }

    case 'ul': {
      if (listType === 'task') {
        icon = _15.default;
      } else {
        icon = _12.default;
      }

      break;
    }

    case 'ol': {
      icon = _17.default;
      break;
    }

    case 'blockquote': {
      icon = _14.default;
      break;
    }

    case 'h1': {
      icon = _5.default;
      break;
    }

    case 'h2': {
      icon = _6.default;
      break;
    }

    case 'h3': {
      icon = _7.default;
      break;
    }

    case 'h4': {
      icon = _8.default;
      break;
    }

    case 'h5': {
      icon = _9.default;
      break;
    }

    case 'h6': {
      icon = _10.default;
      break;
    }

    case 'hr': {
      icon = _3.default;
      break;
    }

    default:
      icon = _.default;
      break;
  }

  const iconVnode = (0, _snabbdom.h)(
    'i.icon',
    (0, _snabbdom.h)(
      'i.icon-inner',
      {
        style: {
          background: 'url('.concat(icon, ') no-repeat'),
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
        contenteditable: 'false'
      }
    },
    iconVnode
  );
}
