import BaseScrollFloat from '../baseScrollFloat';
import { patch, h } from '../../parser/render/snabbdom';
import noteIcon from '../../assets/icons/note.svg'
import './index.css';
export default class NoteLinkInsert extends BaseScrollFloat  {
  static pluginName = 'noteLinkInsert';

  renderArray = []

  activeItem = undefined;

  block = null;

  oldContent = ''

  positionOffset = 0;
  constructor(muya, options) {
    super(muya, 'ag-note-link-insert');
    // this.setWordList(options?.wordList ?? []);
    this.oldVnode = null;
    this.reference = null;
    this.listen();
  }

  render() {
    const { scrollElement, renderArray, activeItem } = this;
    const children = renderArray.map((item) =>
      h(
        `div.item${activeItem === item ? '.active' : ''}`,
        {
          dataset: item,
          on: {
            mousedown: () => this.selectItem(item)
          }
        },
        [
          h('i.icon', {style: {
            background: `url(${noteIcon}) no-repeat`,
            'background-size': '100%'
          }}, ''),
          h('span', item.title)
        ]
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
    eventCenter.subscribe('muya-note-link-insert', ({reference, block, status, content, offset}) => {
      if (status) {
        this.block = block;
        this.positionOffset = offset;
        this.oldContent = content;
        this.render();
        this.show(reference);
        eventCenter.dispatch('muya-note-link-change', {content, render: (noteLinks) => this.renderMenu(noteLinks)});
      } else {
        this.hide();
      }
    });
  }


  renderMenu(noteLinks) {
    this.renderArray = noteLinks;
    this.activeItem = noteLinks[0]
    this.render();
  }

  selectItem(item) {
    if (item) {
      this.muya.contentState.createdNoteLink(this.block, this.positionOffset, this.oldContent, item.title, item.id);
      setTimeout(this.hide.bind(this));
    }
  }

  getItemElement(item) {
    return this.scrollElement.querySelector(`[data-link="${item.link}"]`);
  }
}
