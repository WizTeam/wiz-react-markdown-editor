import { EVENT_KEYS } from '../config';
import selection from '../selection';
import { findNearestParagraph } from '../selection/dom';
import { getParagraphReference, getImageInfo } from '../utils';
import { checkEditEmoji } from '../ui/emojis';

//------------- Debug Start ------------------------
function iosLog(str) {
  var temp = document.querySelector('#temp-log');
  if (!temp) {
    temp = document.createElement('div')
    temp.id = 'temp-log'
    temp.setAttribute('style', 'background:white;opacity: .95; paddingLeft: 4px; font-size: 10px; line-height: 1.2; position:fixed; top: 0; right: 0; width:70%;height: 80%;overflow:auto;');
    document.body.appendChild(temp);
  }
  temp.appendChild(document.createTextNode(str));
  temp.appendChild(document.createElement('br'));
}
function iosLogRange(head) {
  function strInfo(str) {
    if (str.length === 0) {
      return '[]:=0';
    }
    if (str.length === 1) {
      return `[](${str.charCodeAt(0)}):=1`;
    }
    return `[${str}](${str.charCodeAt(0)},${str.charCodeAt(str.length - 1)}):=${str.length}`;
  }
  const sel = document.getSelection();
  const range = sel.getRangeAt(0);
  let start = range.startContainer;
  iosLog(``);
  iosLog(`range ---------- ${head} ----------`);
  if (start.nodeType === 3) {
    iosLog(`${range.startOffset},${range.endOffset} ${strInfo(start.nodeValue)}`);
  } else {
    iosLog(`${start}, ${range.startOffset}`);
  }
  if (start.nodeType === 3) {
    start = start.parentNode;
  }
  iosLog(`Parent:===${start.outerHTML}`);
  let children = [];
  start.childNodes.forEach((child) => {
    if (child.nodeType === 3) {
      children.push(strInfo(child.nodeValue));
    } else {
      children.push(child);
    }
  });
  iosLog(`Children:====${children.join(', ')}`);
  
}
//------------- Debug End ------------------------

class Keyboard {
  constructor(muya) {
    this.muya = muya;
    this.isComposed = false;
    this.shownFloat = new Set();
    this.inputDom = null;
    this.recordIsComposed();
    this.dispatchEditorState();
    this.keydownBinding();
    this.keyupBinding();
    this.inputBinding();
    this.listen();
  }

  listen() {
    // cache shown float box
    this.muya.eventCenter.subscribe('muya-float', (tool, status) => {
      status ? this.shownFloat.add(tool) : this.shownFloat.delete(tool);
      if (tool.name === 'ag-front-menu' && !status) {
        const selectedParagraph = this.muya.container.querySelector('.ag-selected');
        if (selectedParagraph) {
          this.muya.contentState.selectedBlock = null;
          // prevent rerender, so change the class manually.
          selectedParagraph.classList.toggle('ag-selected');
        }
      }
    });
  }

  hideAllFloatTools() {
    for (const tool of this.shownFloat) {
      tool.hide();
    }
  }

  recordIsComposed() {
    const { container, eventCenter, contentState } = this.muya;
    const handler = (event) => {
        // patch IOS 13 输入中文时，有可能光标会进入错误的 DOM 结构，必须添加占位符，避免这种情况
      if (event.type === 'compositionstart') {
        this.isComposed = true;
        this.inputDom = selection.getSelectionStart();
        const span = document.createElement('span');
        span.setAttribute('contenteditable', 'false');
        const textNode = document.createTextNode('\u200B');
        this.tempTextNode = textNode;
        this.tempSpan = span;
        this.inputDom.appendChild(textNode);
        this.inputDom.insertBefore(span, this.inputDom.firstChild);

        //------------- Debug Start ------------------------
        iosLogRange('compositionstart');
        //------------- Debug End ------------------------
      } else if (event.type === 'compositionend') {
        if (this.tempSpan) {
          if (this.tempSpan.parentNode) {
            this.tempSpan.parentNode.removeChild(this.tempSpan);
            this.tempSpan = null;
          }
        }
        if (this.tempTextNode) {
          const sel = document.getSelection();
          const range = sel.getRangeAt(0);
          const startContainer = range.startContainer;
          let startOffset = range.startOffset;
          const temp = this.tempTextNode;
          let value = temp.nodeValue;
          if (this.inputDom.innerText !== '\u200B' && value.indexOf('\u200B') > -1 ) {
            value = value.replace(/\u200B/g, '');
            if (value.length === 0 && temp.parentNode) {
              temp.parentNode.removeChild(temp);
            } else if (startContainer === temp) {
              temp.nodeValue = value;
              if (startOffset > temp.nodeValue.length) {
                startOffset = temp.nodeValue.length;
              }
              sel.collapse(startContainer, startOffset);
              //------------- Debug Start ------------------------
              // iosLog('end fixed range')
              //------------- Debug End ------------------------
            }
          }
          //------------- Debug Start ------------------------
          iosLogRange(`compositionend`);
          //------------- Debug End ------------------------
          this.tempTextNode = null;
        }
        setTimeout(() => {
          this.isComposed = false;
        }, 30);
        this.inputDom = null; // Because the compose event will not cause `input` event, So need call `inputHandler` by ourself

        contentState.inputHandler(event);
        eventCenter.dispatch('stateChange');
      }
    };

    eventCenter.attachDOMEvent(container, 'compositionend', handler);
    // eventCenter.attachDOMEvent(container, 'compositionupdate', handler)
    eventCenter.attachDOMEvent(container, 'compositionstart', handler);
  }

  dispatchEditorState() {
    const { container, eventCenter } = this.muya;

    let timer = null;
    const changeHandler = (event) => {
      if (
        event.type === 'keyup' &&
        (event.key === EVENT_KEYS.ArrowUp || event.key === EVENT_KEYS.ArrowDown) &&
        this.shownFloat.size > 0
      ) {
        return;
      }
      // Cursor outside editor area or over not editable elements.
      if (event.target.closest('[contenteditable=false]')) {
        return;
      }

      // We need check cursor is null, because we may copy the html preview content,
      // and no need to dispatch change.
      const { start, end } = selection.getCursorRange();
      if (!start || !end) {
        return;
      }

      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        this.muya.dispatchSelectionChange();
        this.muya.dispatchSelectionFormats();
        if (!this.isComposed && event.type === 'click') {
          this.muya.dispatchChange();
        }
      });
    };

    eventCenter.attachDOMEvent(container, 'click', changeHandler);
    eventCenter.attachDOMEvent(container, 'keyup', changeHandler);
  }

  keydownBinding() {
    const { container, eventCenter, contentState } = this.muya;
    const docHandler = (event) => {
      switch (event.code) {
        case EVENT_KEYS.Enter:
          return contentState.docEnterHandler(event);
        case EVENT_KEYS.Space: {
          if (contentState.selectedImage) {
            const { token } = contentState.selectedImage;
            const { src } = getImageInfo(token.src || token.attrs.src);
            if (src) {
              eventCenter.dispatch('preview-image', {
                data: src
              });
            }
          }
          break;
        }
        case EVENT_KEYS.Backspace: {
          return contentState.docBackspaceHandler(event);
        }
        case EVENT_KEYS.Delete: {
          return contentState.docDeleteHandler(event);
        }
        case EVENT_KEYS.ArrowUp: // fallthrough
        case EVENT_KEYS.ArrowDown: // fallthrough
        case EVENT_KEYS.ArrowLeft: // fallthrough
        case EVENT_KEYS.ArrowRight: // fallthrough
          return contentState.docArrowHandler(event);
      }
    };

    const handler = (event) => {
      if (event.metaKey || event.ctrlKey) {
        container.classList.add('ag-meta-or-ctrl');
      }

      if (
        this.shownFloat.size > 0 &&
        (event.key === EVENT_KEYS.Enter ||
          event.key === EVENT_KEYS.Escape ||
          event.key === EVENT_KEYS.Tab ||
          event.key === EVENT_KEYS.ArrowUp ||
          event.key === EVENT_KEYS.ArrowDown)
      ) {
        let needPreventDefault = false;

        for (const tool of this.shownFloat) {
          if (
            tool.name === 'ag-format-picker' ||
            tool.name === 'ag-table-picker' ||
            tool.name === 'ag-quick-insert' ||
            tool.name === 'ag-emoji-picker' ||
            tool.name === 'ag-front-menu' ||
            tool.name === 'ag-list-picker' ||
            tool.name === 'ag-tag-insert' ||
            tool.name === 'ag-image-selector'
          ) {
            needPreventDefault = true;
            break;
          }
        }
        if (needPreventDefault) {
          event.preventDefault();
        }
        // event.stopPropagation()
        return;
      }
      switch (event.key) {
        case EVENT_KEYS.Backspace:
          contentState.backspaceHandler(event);
          break;
        case EVENT_KEYS.Delete:
          contentState.deleteHandler(event);
          break;
        case EVENT_KEYS.Enter:
          if (!this.isComposed) {
            contentState.enterHandler(event);
            this.muya.dispatchChange();
          }
          break;
        case EVENT_KEYS.ArrowUp: // fallthrough
        case EVENT_KEYS.ArrowDown: // fallthrough
        case EVENT_KEYS.ArrowLeft: // fallthrough
        case EVENT_KEYS.ArrowRight: // fallthrough
          if (!this.isComposed) {
            contentState.arrowHandler(event);
          }
          break;
        case EVENT_KEYS.Tab:
          contentState.tabHandler(event);
          break;
        default:
          break;
      }
    };

    eventCenter.attachDOMEvent(container, 'keydown', handler);
    eventCenter.attachDOMEvent(document, 'keydown', docHandler);
  }

  inputBinding() {
    const { container, eventCenter, contentState } = this.muya;
    const inputHandler = (event) => {
      
      //------------- Debug Start ------------------------
      iosLogRange(`input [${event.data}]`);
      //------------- Debug End ------------------------

      if (event.inputType === 'insertParagraph') {
        // patch IOS 13 中文输入后，Enter 事件无法被阻止，会导致浏览器生成新的 span，所以必须进行修正
        const sel = document.getSelection();
        let range = sel.getRangeAt(0);
        let target = range.startContainer;
        while(target && !target.id) {
          target = target.parentNode;
        }
        // iosLog(target.id + ', ' + target.className);
        // console.log(target);
        if (/^span$/i.test(target.tagName)) {
          const id = target.id;
          const prev = target.previousElementSibling;
          if (prev.id === id) {
            while(prev.firstChild) {
              prev.removeChild(prev.firstChild);
            }
            prev.appendChild(document.createTextNode(''));
            sel.modify('move', 'backward', 'character');
            if (!/^br$/i.test(target.firstChild.tagName)) {
              while(target.firstChild) {
                prev.appendChild(target.firstChild);
              }
              target.parentNode.removeChild(target);
            }
            // iosLog('fixed');
            // console.log(target);
            // console.log(range)
            return;
          }
        }
      }
      if (!this.isComposed) {
        contentState.inputHandler(event);
        this.muya.dispatchChange();
      }
      // else if (this.isComposed) {
      //   // safari空行时会输出<span>
      //   const startNode = selection.getSelectionStart();
      //   if (this.inputDom !== startNode) {
      //     this.inputDom.innerText = event.data;
      //     startNode.lastElementChild
      //       ? startNode.replaceChild(this.inputDom, startNode.lastElementChild)
      //       : startNode.parentNode.replaceChild(this.inputDom, startNode);
      //     selection.select(this.inputDom, event.data?.length ?? 0);
      //   }
      //   if (event.data === null) {
      //     event.preventDefault();
      //     event.stopPropagation();
      //     return;
      //   }
      // }
      const { lang, paragraph } = contentState.checkEditLanguage();
      if (lang) {
        eventCenter.dispatch('muya-code-picker', {
          reference: getParagraphReference(paragraph, paragraph.id),
          lang,
          cb: (item) => {
            contentState.selectLanguage(paragraph, item.name);
          }
        });
      } else {
        // hide code picker float box
        eventCenter.dispatch('muya-code-picker', { reference: null });
      }
    };
    eventCenter.attachDOMEvent(container, 'input', inputHandler);
  }

  keyupBinding() {
    const { container, eventCenter, contentState } = this.muya;
    const handler = (event) => {
      container.classList.remove('ag-meta-or-ctrl');
      // check if edit emoji
      const node = selection.getSelectionStart();
      const paragraph = findNearestParagraph(node);
      const emojiNode = checkEditEmoji(node);
      contentState.selectedImage = null;
      if (
        paragraph &&
        emojiNode &&
        event.key !== EVENT_KEYS.Enter &&
        event.key !== EVENT_KEYS.ArrowDown &&
        event.key !== EVENT_KEYS.ArrowUp &&
        event.key !== EVENT_KEYS.Tab &&
        event.key !== EVENT_KEYS.Escape
      ) {
        const reference = getParagraphReference(emojiNode, paragraph.id);
        eventCenter.dispatch('muya-emoji-picker', {
          reference,
          emojiNode
        });
      }
      if (!emojiNode) {
        eventCenter.dispatch('muya-emoji-picker', {
          emojiNode
        });
      }

      const { anchor, focus, start, end } = selection.getCursorRange();
      if (!anchor || !focus) {
        return;
      }
      if (!this.isComposed) {
        const { anchor: oldAnchor, focus: oldFocus } = contentState.cursor;
        if (
          anchor.key !== oldAnchor.key ||
          anchor.offset !== oldAnchor.offset ||
          focus.key !== oldFocus.key ||
          focus.offset !== oldFocus.offset
        ) {
          const needRender =
            contentState.checkNeedRender(contentState.cursor) ||
            contentState.checkNeedRender({ start, end });
          contentState.cursor = { anchor, focus };
          if (needRender) {
            return contentState.partialRender();
          }
        }
      }

      const block = contentState.getBlock(anchor.key);
      if (
        anchor.key === focus.key &&
        anchor.offset !== focus.offset &&
        block.functionType !== 'codeContent' &&
        block.functionType !== 'languageInput'
      ) {
        const reference = contentState.getPositionReference();
        const { formats } = contentState.selectionFormats();
        eventCenter.dispatch('muya-format-picker', { reference, formats });
      } else {
        eventCenter.dispatch('muya-format-picker', { reference: null });
      }
    };

    eventCenter.attachDOMEvent(container, 'keyup', handler); // temp use input event
  }
}

export default Keyboard;
