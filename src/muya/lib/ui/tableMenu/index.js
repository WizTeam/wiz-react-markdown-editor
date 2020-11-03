import BaseFloat from '../baseFloat'
import { patch, h } from '../../parser/render/snabbdom'
import { menu, alignMenu } from './config'
import { content } from './lang';
import selection from '../../selection';

import './index.css';

const MAX_SUBMENU_HEIGHT = 400
const ITEM_HEIGHT = 28
const PADDING = 10

const defaultOptions = {
  placement: 'bottom-start',
  modifiers: {
    offset: {
      offset: '0, 10'
    }
  },
  showArrow: false
}

class TableMenu extends BaseFloat {
  static pluginName = 'tableMenu';

  constructor (muya, options = {}) {
    const name = 'ag-table-menu'
    const opts = Object.assign({}, defaultOptions, options)
    super(muya, name, opts)
    this.oldVnode = null
    this.startBlock = null
    this.options = opts
    this.reference = null
    this.tableElement = null;
    this.startCursor = null;
    this.lang = this.muya.options.lang;
    const tableMenuContainer = this.tableMenuContainer = document.createElement('div')
    Object.assign(this.container.parentNode.style, {
      overflow: 'visible'
    })
    this.container.appendChild(tableMenuContainer)
    this.listen()
  }

  listen() {
    const { eventCenter } = this.muya
    super.listen()
    eventCenter.subscribe('muya-table-menu', ({ reference, tableElement, startBlock, startCursor }) => {
      if (reference) {
        this.tableElement = tableElement;
        this.startBlock = startBlock;
        this.startCursor = startCursor;
        this.reference = reference
        setTimeout(() => {
          this.show(reference)
          this.render()
        }, 0)
      } else {
        this.hide()
        this.reference = null
      }
    })
    eventCenter.subscribe('changeLang', lang => {
      this.lang = lang;
      this.render();
    })
  }

  renderAlignMenu() {
    const { reference } = this
    const rect = reference.getBoundingClientRect()
    const windowHeight = document.documentElement.clientHeight
    //
    const children = alignMenu.map(({label, shortCut}) => {
      const shortCutWrapper = h('div.short-cut', [
        h('span', shortCut)
      ])

      let textWrapper = h('span', content[this.lang][label]);
      //
      let itemChildren = [textWrapper, shortCutWrapper];
      let itemSelector = `li.item.${label}`;
      //
      return h(itemSelector, {
        on: {
          click: event => {
            this.selectItem(event, { label })
          }
        }
      }, itemChildren)
    });
    //
    let subMenuSelector = 'div.submenu';
    if (windowHeight - rect.bottom < MAX_SUBMENU_HEIGHT - (ITEM_HEIGHT + PADDING)) {
      subMenuSelector += '.align-bottom'
    }
    return h(subMenuSelector, h('ul', children))
  }

  render() {
    const { oldVnode, tableMenuContainer } = this

    const children = menu.map(({label, shortCut}) => {
      if (label === 'border') {
        return h('div.border');
      }
      //
      const shortCutWrapper = h('div.short-cut', [
        h('span', shortCut)
      ])

      let textWrapper = h('span', content[this.lang][label]);
      //
      let itemChildren = [textWrapper, shortCutWrapper];
      let itemSelector = `li.item.${label}`;
      if (label === 'align') {
        itemChildren.push(this.renderAlignMenu())
      }
      //
      return h(itemSelector, {
        on: {
          click: event => {
            this.selectItem(event, { label })
          }
        }
      }, itemChildren)
    });

    const vnode = h('ul', children)

    if (oldVnode) {
      patch(oldVnode, vnode)
    } else {
      patch(tableMenuContainer, vnode)
    }
    this.oldVnode = vnode
  }

  selectItem(event, { label }) {
    event.preventDefault()
    event.stopPropagation()

    const { contentState } = this.muya
    const { tableElement, startBlock } = this;
    //
    contentState.cursor = {
      start: this.startCursor,
      end: this.startCursor,
    };
    selection.setCursorRange(contentState.cursor);
    //
    switch (label) {
      case 'insertRowBefore':
        contentState.editTable({
          action: 'insert',
          location: 'previous',
          target: 'row'
        });
        break;
      case 'insertRowAfter':
        contentState.editTable({
          action: 'insert',
          location: 'next',
          target: 'row'
        });
        break;
      case 'insertColLeft':
        contentState.editTable({
          action: 'insert',
          location: 'left',
          target: 'column'
        });
        break;
      case 'insertColRight':
        contentState.editTable({
          action: 'insert',
          location: 'right',
          target: 'column'
        });
        break;
      case 'alignLeft':
      case 'alignCenter':
      case 'alignRight':
        contentState.tableToolBarClick(label.slice(5).toLowerCase());
        break;
      case 'removeRow':
        contentState.editTable({
          action: 'remove',
          location: 'current',
          target: 'row'
        });
        break;
      case 'removeCol':
        contentState.editTable({
          action: 'remove',
          location: 'current',
          target: 'column'
        });
        break;
      case 'removeTable':
        contentState.tableToolBarClick('delete');
        break;
      case 'copyHtml':
        this.muya.clipboard.copy('copyCodeContent', tableElement.outerHTML);
        break;
      case 'copyMarkdown':
        this.muya.clipboard.copy('copyBlock', startBlock);
        break;
      default:
        break;
    }
    // delay hide to avoid dispatch enter hander
    setTimeout(this.hide.bind(this))
  }
}

export default TableMenu;
