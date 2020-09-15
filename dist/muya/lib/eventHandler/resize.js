'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

// import resizeCodeBlockLineNumber from '../utils/resizeCodeLineNumber'
// import { throttle } from '../utils'
class Resize {
  constructor(muya) {
    this.muya = muya;
    this.listen();
  }

  listen() {
    // FIXME: Disabled due to #1648.
    // const { codeBlockLineNumbers } = this.muya.options
    // if (!codeBlockLineNumbers) {
    //   return
    // }
    //
    // window.addEventListener('resize', throttle(() => {
    //   const codeBlocks = document.querySelectorAll('pre.line-numbers')
    //   if (codeBlocks.length) {
    //     for (const ele of codeBlocks) {
    //       resizeCodeBlockLineNumber(ele)
    //     }
    //   }
    // }, 300))
  }
}

var _default = Resize;
exports.default = _default;
