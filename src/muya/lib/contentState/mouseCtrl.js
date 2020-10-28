import selection from '../selection'

const mouseCtrl = ContentState => {
  ContentState.prototype.mouseLeaveHandler = function () {
    const { start } = selection.getCursorRange()
    const lastBlock = this.getLastBlock()
    const { key, text } = lastBlock
    this.cursor = {
      start,
      end: {
        key,
        offset: text.length
      }
    };
  }
}

export default mouseCtrl;
