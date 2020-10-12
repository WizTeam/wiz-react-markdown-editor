import { getLinkInfo } from '../utils/getLinkInfo';
import { collectFootnotes } from '../utils';

class TouchEvent {
  constructor(muya) {
    this.muya = muya;
    this.TouchBinding();
  }

  TouchBinding() {
    const { container, contentState, eventCenter } = this.muya;

    const touchEndHandler = (event) => {
      contentState.handleCellMouseUp({type: 'touch', preventDefault: function() {}});
      for (const id of this.eventIds) {
        eventCenter.detachDOMEvent(id)
      }
      this.eventIds = [];
    };

    const selectionChangeHandler = (event) => {
      const sel = document.getSelection();
      if (sel.rangeCount === 0 || sel.isCollapsed) {
        return;
      }
      const range = sel.getRangeAt(0);
      const start = range.startContainer.nodeType === 3 ? range.startContainer.parentNode : range.startContainer;
      const end = range.endContainer.nodeType === 3 ? range.endContainer.parentNode : range.endContainer;
      contentState.handleCellMouseDown({type: 'touch', target: start});
      contentState.handleCellMouseMove({type: 'touch', target: end});
    };

    const touchStartHandler = (event) => {
      const selectionChangeId = eventCenter.attachDOMEvent(document, 'selectionchange', selectionChangeHandler);
      this.eventIds.push(selectionChangeId);
    };

    eventCenter.attachDOMEvent(document, 'touchstart', touchStartHandler);
    eventCenter.attachDOMEvent(document, 'touchend', touchEndHandler);
  }

}

export default TouchEvent;
