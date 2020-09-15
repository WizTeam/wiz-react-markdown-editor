'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _baseFloat = _interopRequireDefault(require('../baseFloat'));

var _snabbdom = require('../../parser/render/snabbdom');

var _config = require('./config');

require('./index.css');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

const MAX_SUBMENU_HEIGHT = 400;
const ITEM_HEIGHT = 28;
const PADDING = 10;
const defaultOptions = {
  placement: 'bottom',
  modifiers: {
    offset: {
      offset: '0, 10'
    }
  },
  showArrow: false
};

class FrontMenu extends _baseFloat.default {
  constructor(muya, options = {}) {
    const name = 'ag-front-menu';
    const opts = Object.assign({}, defaultOptions, options);
    super(muya, name, opts);
    this.oldVnode = null;
    this.outmostBlock = null;
    this.startBlock = null;
    this.endBlock = null;
    this.options = opts;
    this.reference = null;
    const frontMenuContainer = (this.frontMenuContainer = document.createElement('div'));
    Object.assign(this.container.parentNode.style, {
      overflow: 'visible'
    });
    this.container.appendChild(frontMenuContainer);
    this.listen();
  }

  listen() {
    const { eventCenter } = this.muya;
    super.listen();
    eventCenter.subscribe(
      'muya-front-menu',
      ({ reference, outmostBlock, startBlock, endBlock }) => {
        if (reference) {
          this.outmostBlock = outmostBlock;
          this.startBlock = startBlock;
          this.endBlock = endBlock;
          this.reference = reference;
          setTimeout(() => {
            this.show(reference);
            this.render();
          }, 0);
        } else {
          this.hide();
          this.reference = null;
        }
      }
    );
  }

  renderSubMenu(subMenu) {
    const { reference } = this;
    const rect = reference.getBoundingClientRect();
    const windowHeight = document.documentElement.clientHeight;
    const children = subMenu.map((menuItem) => {
      const { icon, title, label, shortCut } = menuItem;
      const iconWrapperSelector = 'div.icon-wrapper';
      const iconWrapper = (0, _snabbdom.h)(
        iconWrapperSelector,
        (0, _snabbdom.h)(
          'i.icon',
          (0, _snabbdom.h)(
            'i.icon-'.concat(label.replace(/\s/g, '-')),
            {
              style: {
                background: 'url('.concat(icon, ') no-repeat'),
                'background-size': '100%'
              }
            },
            ''
          )
        )
      );
      const textWrapper = (0, _snabbdom.h)('span', title);
      const shortCutWrapper = (0, _snabbdom.h)('div.short-cut', [
        (0, _snabbdom.h)('span', shortCut)
      ]);
      let itemSelector = 'li.item.'.concat(label);

      if (label === (0, _config.getLabel)(this.outmostBlock)) {
        itemSelector += '.active';
      }

      return (0, _snabbdom.h)(
        itemSelector,
        {
          on: {
            click: (event) => {
              this.selectItem(event, {
                label
              });
            }
          }
        },
        [iconWrapper, textWrapper, shortCutWrapper]
      );
    });
    let subMenuSelector = 'div.submenu';

    if (windowHeight - rect.bottom < MAX_SUBMENU_HEIGHT - (ITEM_HEIGHT + PADDING)) {
      subMenuSelector += '.align-bottom';
    }

    return (0, _snabbdom.h)(subMenuSelector, (0, _snabbdom.h)('ul', children));
  }

  render() {
    const { oldVnode, frontMenuContainer, outmostBlock, startBlock, endBlock } = this;
    const { type, functionType } = outmostBlock;

    const children = _config.menu.map(({ icon, label, text, shortCut }) => {
      const subMenu = (0, _config.getSubMenu)(outmostBlock, startBlock, endBlock);
      const iconWrapperSelector = 'div.icon-wrapper';
      const iconWrapper = (0, _snabbdom.h)(
        iconWrapperSelector,
        (0, _snabbdom.h)(
          'i.icon',
          (0, _snabbdom.h)(
            'i.icon-'.concat(label.replace(/\s/g, '-')),
            {
              style: {
                background: 'url('.concat(icon, ') no-repeat'),
                'background-size': '100%'
              }
            },
            ''
          )
        )
      );
      const textWrapper = (0, _snabbdom.h)('span', text);
      const shortCutWrapper = (0, _snabbdom.h)('div.short-cut', [
        (0, _snabbdom.h)('span', shortCut)
      ]);
      let itemSelector = 'li.item.'.concat(label);
      const itemChildren = [iconWrapper, textWrapper, shortCutWrapper];

      if (label === 'turnInto' && subMenu.length !== 0) {
        itemChildren.push(this.renderSubMenu(subMenu));
      }

      if (label === 'turnInto' && subMenu.length === 0) {
        itemSelector += '.disabled';
      } // front matter can not be duplicated.

      if (label === 'duplicate' && type === 'pre' && functionType === 'frontmatter') {
        itemSelector += '.disabled';
      }

      return (0, _snabbdom.h)(
        itemSelector,
        {
          on: {
            click: (event) => {
              this.selectItem(event, {
                label
              });
            }
          }
        },
        itemChildren
      );
    });

    const vnode = (0, _snabbdom.h)('ul', children);

    if (oldVnode) {
      (0, _snabbdom.patch)(oldVnode, vnode);
    } else {
      (0, _snabbdom.patch)(frontMenuContainer, vnode);
    }

    this.oldVnode = vnode;
  }

  selectItem(event, { label }) {
    event.preventDefault();
    event.stopPropagation();
    const { type, functionType } = this.outmostBlock; // front matter can not be duplicated.

    if (label === 'duplicate' && type === 'pre' && functionType === 'frontmatter') {
      return;
    }

    const { contentState } = this.muya;
    contentState.selectedBlock = null;

    switch (label) {
      case 'duplicate': {
        contentState.duplicate();
        break;
      }

      case 'delete': {
        contentState.deleteParagraph();
        break;
      }

      case 'new': {
        contentState.insertParagraph('after', '', true);
        break;
      }

      case 'turnInto':
        // do nothing, do not hide float box.
        return;

      default:
        contentState.updateParagraph(label);
        break;
    } // delay hide to avoid dispatch enter hander

    setTimeout(this.hide.bind(this));
  }
}

_defineProperty(FrontMenu, 'pluginName', 'frontMenu');

var _default = FrontMenu;
exports.default = _default;
