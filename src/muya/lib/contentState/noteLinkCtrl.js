import selection from '../selection';
import { findNearestParagraph, getOffsetOfParagraph } from '../selection/dom'
import { CLASS_OR_ID } from '../config';

const linkReg = /\[{2}(?=\S)([\s\S]*?)\]{2}/;

const noteLinkCtrl =  (ContentState) => {

  ContentState.prototype.getNoteLinkRange = function (noteLink) {
    const paragraph = findNearestParagraph(noteLink);
    const raw = noteLink.getAttribute('data-raw');
    const offset = getOffsetOfParagraph(noteLink, paragraph);

    return {
      start: offset,
      end: offset + raw.length
    }
  }

  ContentState.prototype.getInNoteLineRangeNode = function() {
    const editNode = selection.getSelectionStart();

    const noteLinkNode = editNode.closest(`.${CLASS_OR_ID.AG_NOTE_LINK}`);
    if (noteLinkNode) {
      if (editNode.classList.contains(CLASS_OR_ID.AG_NOTE_LINK_SYMBOL)) {
        //
        const {anchorOffset, anchorNode} = selection.doc.getSelection();
        if (anchorNode?.textContent?.endsWith('[[') && anchorOffset <= 1) {
          return;
        }
        if (anchorNode?.textContent?.startsWith(']]') && anchorOffset >= 2) {
          return;
        }
      }
      return noteLinkNode
    }
  }

  ContentState.prototype.fixNoteLink = function(block) {
    const noteLinkNode = this.getInNoteLineRangeNode();
    if (noteLinkNode) {
      const oldLink = noteLinkNode.getAttribute('data-href');

      if (oldLink) {
        const noteLinkContent = noteLinkNode.querySelector(`.${CLASS_OR_ID.AG_NOTE_LINK_CONTENT}`)?.innerText ?? '';
        const {start, end } = this.getNoteLinkRange(noteLinkNode);

        const oldText = block.text;

        noteLinkNode.removeAttribute('data-href');

        block.text = `${oldText.substring(0, start)}[[${noteLinkContent}]]${oldText.substring(end)}`;

        return true;
      }

    }
    return false;
  }

  ContentState.prototype.checkNoteLinkInsert = function (block) {
    const { start } = this.cursor;
    let { offset } = start;
    let { text } = block;

    let token = text.match(linkReg);
    let positionOffset = 0
    while (text && token) {
      positionOffset += token.index;
      if (offset < token.index + 1) {
        return false;
      }
      if (offset < token.index + token[0].length - 2) {
        return {
          content: token[1],
          offset: positionOffset
        };
      }
      text = text.slice(token.index + token[0].length);
      offset -= token.index + token[0].length;
      positionOffset += token[0].length;
      token = text.match(linkReg);
    }
    return false;
  }

  ContentState.prototype.createdNoteLink = function (block, offset, oldContent, title, link) {
    const { start, end } = selection.getCursorRange();

    block.text = `${block.text.slice(0, offset)}[[${link}]]${block.text.slice(offset + oldContent.length + 4)}`;

    const editNode = selection.getSelectionStart();
    const noteLinkNode = editNode.closest(`.${CLASS_OR_ID.AG_NOTE_LINK}`);

    if (noteLinkNode) {
      const range = this.getNoteLinkRange(noteLinkNode);
      start.offset = range.start + 2 + title.length;
      end.offset = start.offset;
      this.cursor = {
        start,
        end
      };
    }

    this.noteLinkMap.setLink(link, title);

    this.partialRender();

    this.muya.dispatchChange()
  }

  ContentState.prototype.getValidText = function(block) {
    return block.text?.replace(/\[{2}(?=\S)([\s\S]*?)\]{2}/g, (match, p1) =>  {
      return `[[${this.noteLinkMap.getTitle(p1) ?? p1}]]`;
    }) ?? ''
  }

  ContentState.prototype.getAllNoteLinks = function (block) {
    const getLinks = (blocks) => blocks.reduce((prev, curr) => {
      let text = curr.text;
      let targetText = text.match(linkReg);
      while(text && targetText) {
        if (targetText[1]) {
          prev.push(targetText[1]);
        }
        text = text.slice(targetText.index + targetText[0].length)
        targetText = text.match(linkReg);
      }
      if (curr.children && curr.children.length) {
        prev.push(...getLinks(curr.children))
      }
      return prev;
    }, [])
    return getLinks(this.blocks)
  }
}

export default noteLinkCtrl;
