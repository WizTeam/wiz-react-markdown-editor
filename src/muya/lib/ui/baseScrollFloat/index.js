import BaseFloat from '../baseFloat';
import { EVENT_KEYS } from '../../config';

class BaseScrollFloat extends BaseFloat {
  constructor(muya, name, options = {}) {
    super(muya, name, options);
    this.scrollElement = null;
    this.reference = null;
    this.activeItem = null;
    this.createScrollElement();
  }

  createScrollElement() {
    const { container } = this;
    const scrollElement = document.createElement('div');
    container.appendChild(scrollElement);
    this.scrollElement = scrollElement;
  }

  activeEleScrollIntoView(ele) {
    if (ele) {
      ele.scrollIntoView({
        behavior: 'auto',
        block: 'center',
        inline: 'start'
      });
    }
  }

  listen() {
    super.listen();
    const { eventCenter, container } = this.muya;
    let oldText;
    const handler = (event) => {
      if (!this.status) return;
      switch (event.key) {
        case EVENT_KEYS.ArrowUp:
          this.step('previous');
          break;
        case EVENT_KEYS.ArrowDown:
        case EVENT_KEYS.Tab:
          this.step('next');
          break;
        case EVENT_KEYS.Enter:
          oldText = event.target.innerText;
          break;
        default:
          break;
      }
    };

    const enterHandler = (event) => {
      if (!this.status) return;
      // 过滤输入法回车触发
      if (event.key === EVENT_KEYS.Enter && event.target.innerText === oldText) {
        this.selectItem(this.activeItem);
      }
    };

    eventCenter.attachDOMEvent(container, 'keydown', handler);
    eventCenter.attachDOMEvent(container, 'keyup', enterHandler);
  }

  hide() {
    super.hide();
    this.reference = null;
  }

  show(reference, cb) {
    this.cb = cb;
    if (reference instanceof HTMLElement) {
      if (this.reference && this.reference === reference && this.status) return;
    } else {
      if (this.reference && this.reference.id === reference.id && this.status) return;
    }

    this.reference = reference;
    super.show(reference, cb);
  }

  step(direction) {
    let index = this.renderArray.findIndex((item) => {
      return item === this.activeItem;
    });
    index = direction === 'next' ? index + 1 : index - 1;
    if (index < 0 || index >= this.renderArray.length) {
      return;
    }
    this.activeItem = this.renderArray[index];
    this.render();
    const activeEle = this.getItemElement(this.activeItem);
    this.activeEleScrollIntoView(activeEle);
  }

  selectItem(item) {
    const { cb } = this;
    cb(item);
    // delay hide to avoid dispatch enter hander
    setTimeout(this.hide.bind(this));
  }

  getItemElement() {}
}

export default BaseScrollFloat;
