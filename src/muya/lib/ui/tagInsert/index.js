import { patch, h } from '../../parser/render/snabbdom';
import { filter } from 'fuzzaldrin';
import BaseScrollFloat from '../baseScrollFloat';
import './index.css';

export default class TagInsert extends BaseScrollFloat {
  static pluginName = 'tagInsert';

  constructor(muya, options) {
    super(muya, 'ag-tag-insert');
    this.setWordList(options?.wordList ?? []);
    this.oldVnode = null;
    this.reference = null;
    this.block = null;
    this.listen();
  }

  setWordList(list = []) {
    this.wordList = [...new Set(list)];
    this.setRenderArray();
  }

  setRenderArray(list = this.wordList) {
    this.renderArray = list;
    this.activeItem = list[0];
  }

  render() {
    const { scrollElement, renderArray, activeItem } = this;
    const children = renderArray.map((item) =>
      h(
        `div.item${activeItem === item ? '.active' : ''}`,
        {
          dataset: { text: item },
          on: {
            click: () => this.selectItem(item)
          }
        },
        item
      )
    );
    let vNode = h('div', children.length ? children : h('div.no-result', 'No result'));
    if (this.oldVnode) {
      patch(this.oldVnode, vNode);
    } else {
      patch(scrollElement, vNode);
    }
    this.oldVnode = vNode;
  }

  listen() {
    super.listen();
    const { eventCenter } = this.muya;
    eventCenter.subscribe('muya-tag-insert', (reference, block, status) => {
      this.block = block;
      if (status) {
        const keyword = block.text.replace(
          /(^|[\t\f\v ])#(?!#|\s)(([^#\r\n]{1,25}[^#\s]#)|([^#\s]{1,25}$)|(\S{1,25}(\S|$)))/,
          (arg) => arg.trim().replace(/#/g, '')
        );
        this.search(keyword);
        this.show(reference);
      } else {
        this.hide();
      }
    });
  }

  search(keyword) {
    this.setRenderArray(filter(this.wordList, keyword));
    this.render();
  }

  selectItem(item) {
    if (item) {
      // const { contentState } = this.muya;
      // this.block.text =  this.block.text.replace(/(^|[\t\f\v ])#(?!#|\s)(([^#\r\n]{1,25}[^#\s]#)|([^#\s]{1,25}$)|(\S{1,25}(\S|$)))/, `#${item}#`);
      // contentState.block = this.block;
      // const { key } = this.block;
      // const offset = item.length + 2
      // contentState.cursor = {
      //   start: { key, offset },
      //   end: { key, offset }
      // };
      // contentState.partialRender()
      console.log('selectItem', item);
    }
  }

  getItemElement(item) {
    // return this.scrollElement.querySelector(`[data-text="${item}"]`);
    return null;
  }
}
