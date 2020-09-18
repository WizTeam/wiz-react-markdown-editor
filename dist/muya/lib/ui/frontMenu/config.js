"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSubMenu = exports.getLabel = exports.menu = void 0;

var _ = _interopRequireDefault(require("../../assets/pngicon/copy/2.png"));

var _2 = _interopRequireDefault(require("../../assets/pngicon/paragraph/2.png"));

var _3 = _interopRequireDefault(require("../../assets/pngicon/delete/2.png"));

var _4 = _interopRequireDefault(require("../../assets/pngicon/turninto/2.png"));

var _config = require("../../config");

var _config2 = require("../quickInsert/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const wholeSubMenu = Object.keys(_config2.quickInsertObj).reduce((acc, key) => {
  const items = _config2.quickInsertObj[key];
  return [...acc, ...items];
}, []);
const COMMAND_KEY = _config.isOsx ? '⌘' : '⌃';
const menu = [{
  icon: _.default,
  label: 'duplicate',
  text: 'Duplicate',
  shortCut: "\u21E7".concat(COMMAND_KEY, "P")
}, {
  icon: _4.default,
  label: 'turnInto',
  text: 'Turn Into'
}, {
  icon: _2.default,
  label: 'new',
  text: 'New Paragraph',
  shortCut: "\u21E7".concat(COMMAND_KEY, "N")
}, {
  icon: _3.default,
  label: 'delete',
  text: 'Delete',
  shortCut: "\u21E7".concat(COMMAND_KEY, "D")
}];
exports.menu = menu;

const getLabel = block => {
  const {
    type,
    functionType,
    listType
  } = block;
  let label = '';

  switch (type) {
    case 'p':
      {
        label = 'paragraph';
        break;
      }

    case 'figure':
      {
        if (functionType === 'table') {
          label = 'table';
        } else if (functionType === 'html') {
          label = 'html';
        } else if (functionType === 'multiplemath') {
          label = 'mathblock';
        }

        break;
      }

    case 'pre':
      {
        if (functionType === 'fencecode' || functionType === 'indentcode') {
          label = 'pre';
        } else if (functionType === 'frontmatter') {
          label = 'front-matter';
        }

        break;
      }

    case 'ul':
      {
        if (listType === 'task') {
          label = 'ul-task';
        } else {
          label = 'ul-bullet';
        }

        break;
      }

    case 'ol':
      {
        label = 'ol-order';
        break;
      }

    case 'blockquote':
      {
        label = 'blockquote';
        break;
      }

    case 'h1':
      {
        label = 'heading 1';
        break;
      }

    case 'h2':
      {
        label = 'heading 2';
        break;
      }

    case 'h3':
      {
        label = 'heading 3';
        break;
      }

    case 'h4':
      {
        label = 'heading 4';
        break;
      }

    case 'h5':
      {
        label = 'heading 5';
        break;
      }

    case 'h6':
      {
        label = 'heading 6';
        break;
      }

    case 'hr':
      {
        label = 'hr';
        break;
      }

    default:
      label = 'paragraph';
      break;
  }

  return label;
};

exports.getLabel = getLabel;

const getSubMenu = (block, startBlock, endBlock) => {
  const {
    type
  } = block;

  switch (type) {
    case 'p':
      {
        return wholeSubMenu.filter(menuItem => {
          const REG_EXP = startBlock.key === endBlock.key ? /front-matter|hr|table/ : /front-matter|hr|table|heading/;
          return !REG_EXP.test(menuItem.label);
        });
      }

    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      {
        return wholeSubMenu.filter(menuItem => {
          return /heading|paragraph/.test(menuItem.label);
        });
      }

    case 'ul':
    case 'ol':
      {
        return wholeSubMenu.filter(menuItem => {
          return /ul|ol/.test(menuItem.label);
        });
      }

    default:
      return [];
  }
};

exports.getSubMenu = getSubMenu;