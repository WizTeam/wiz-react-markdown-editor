"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alignMenu = exports.menu = void 0;
const menu = [{
  label: 'insertRowBefore',
  text: 'Add a line above'
}, {
  label: 'insertRowAfter',
  text: 'Add a line below'
}, {
  label: 'insertColLeft',
  text: 'Add a column to the left'
}, {
  label: 'insertColRight',
  text: 'Add a column to the right'
}, {
  label: 'align',
  text: 'Align type'
}, {
  label: 'removeRow',
  text: 'Remove this line'
}, {
  label: 'removeCol',
  text: 'Remove this column'
}, {
  label: 'removeTable',
  text: 'Remove this table'
}, {
  label: 'copyHtml',
  text: 'Copy table html'
}, {
  label: 'copyMarkdown',
  text: 'Copy table markdown'
}];
exports.menu = menu;
const alignMenu = [{
  label: 'alignLeft',
  text: 'Align left'
}, {
  label: 'alignCenter',
  text: 'Align center'
}, {
  label: 'alignRight',
  text: 'Align right'
}];
exports.alignMenu = alignMenu;