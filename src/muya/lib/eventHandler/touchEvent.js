import { getLinkInfo } from '../utils/getLinkInfo';
import { collectFootnotes } from '../utils';

class TouchEvent {
  constructor(muya) {
    this.muya = muya;
    this.TouchBinding();
  }

  TouchBinding() {
    const { container, eventCenter } = this.muya;

    const touchEndHandler = (event) => {
      const { contentState } = this.muya;
      iosLog('touchEndHandler 1')
      // contentState.handleCellMouseUp({type: 'touch', preventDefault: function() {}});
      iosLog('touchEndHandler 2')

      setTimeout(() => {
        const sel = document.getSelection();
        iosLog(`${sel.rangeCount}, ${sel.isCollapsed}`);
        if (sel.rangeCount === 0 || sel.isCollapsed) {
          return;
        }
        const range = sel.getRangeAt(0);
        const start = range.startContainer;
        start = start.nodeType === 3 ? start.parentNode : start;
        const end = range.endContainer;
        end = end.nodeType === 3 ? end.parentNode : end;
        const startCell = start.closest('th') || start.closest('td')
        const endCell = end.closest('th') || end.closest('td')
        startCell.setAttribute('contenteditable', 'false');
        if (startCell && endCell && startCell !== endCell) {
          const cellContentList = startCell.querySelectorAll('.ag-cell-content');
          const startContent = cellContentList[0];
          const endContent = cellContentList[cellContentList.length - 1];
          sel.collapse(startContent, 0);
          sel.extend(endContent, endContent.childNodes.length);        
        }
      }, 100);
      

      const { eventCenter } = this.muya
      for (const id of this.eventIds) {
        eventCenter.detachDOMEvent(id)
      }
      this.eventIds = [];
    };

    const selectionChangeHandler = (event) => {
      const { contentState } = this.muya;
      const sel = document.getSelection();
      if (sel.rangeCount === 0 || sel.isCollapsed) {
        return;
      }
      const range = sel.getRangeAt(0);
      const start = range.startContainer.nodeType === 3 ? range.startContainer.parentNode : range.startContainer;
      const end = range.endContainer.nodeType === 3 ? range.endContainer.parentNode : range.endContainer;
      contentState.handleCellMouseDown({type: 'touch', target: start});
      contentState.handleCellMouseMove({type: 'touch', target: end});
      // iosLog('selectionchange')


      
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
