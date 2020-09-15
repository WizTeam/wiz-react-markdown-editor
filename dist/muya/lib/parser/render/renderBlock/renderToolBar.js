'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.renderTableTools = exports.TABLE_TOOLS = void 0;

var _snabbdom = require('../snabbdom');

var _config = require('../../../config');

var _table2x = _interopRequireDefault(require('../../../assets/pngicon/table/table@2x.png'));

var _ = _interopRequireDefault(require('../../../assets/pngicon/algin_left/2.png'));

var _2 = _interopRequireDefault(require('../../../assets/pngicon/algin_right/2.png'));

var _3 = _interopRequireDefault(require('../../../assets/pngicon/algin_center/2.png'));

var _4 = _interopRequireDefault(require('../../../assets/pngicon/table_delete/2.png'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// used for render table tookbar or others.
const TABLE_TOOLS = [
  {
    label: 'table',
    title: 'Resize Table',
    icon: _table2x.default
  },
  {
    label: 'left',
    title: 'Align Left',
    icon: _.default
  },
  {
    label: 'center',
    title: 'Align Center',
    icon: _3.default
  },
  {
    label: 'right',
    title: 'Align Right',
    icon: _2.default
  },
  {
    label: 'delete',
    title: 'Delete Table',
    icon: _4.default
  }
];
exports.TABLE_TOOLS = TABLE_TOOLS;

const renderToolBar = (type, tools, activeBlocks) => {
  const children = tools.map((tool) => {
    const { label, title, icon } = tool;
    const { align } = activeBlocks[1]; // activeBlocks[0] is span block. cell content.

    let selector = 'li';

    if (align && label === align) {
      selector += '.active';
    }

    const iconVnode = (0, _snabbdom.h)(
      'i.icon',
      (0, _snabbdom.h)(
        'i.icon-'.concat(label),
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
        dataset: {
          label,
          tooltip: title
        }
      },
      iconVnode
    );
  });
  const selector = 'div.ag-tool-'.concat(type, '.').concat(_config.CLASS_OR_ID.AG_TOOL_BAR);
  return (0, _snabbdom.h)(
    selector,
    {
      attrs: {
        contenteditable: false
      }
    },
    (0, _snabbdom.h)('ul', children)
  );
};

const renderTableTools = (activeBlocks) => {
  return renderToolBar('table', TABLE_TOOLS, activeBlocks);
};

exports.renderTableTools = renderTableTools;
