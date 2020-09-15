'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.parseKey = parseKey;
exports.isTouchCtrlKey = isTouchCtrlKey;
exports.matchHotKey = matchHotKey;

var _domUtils = require('./domUtils');

function parseKey(key) {
  let val;

  switch (key) {
    case '↑':
      val = 'ArrowUp';
      break;

    case '↓':
      val = 'ArrowDown';
      break;

    case '←':
      val = 'ArrowLeft';
      break;

    case '→':
      val = 'ArrowRight';
      break;

    default:
      val = key;
      break;
  }

  return val;
}

function isTouchCtrlKey(event) {
  return (0, _domUtils.isMacSystem)()
    ? event.metaKey && !event.ctrlKey
    : !event.metaKey && event.ctrlKey;
}

function matchHotKey(hotkey, event, separator = '-') {
  const hotkeys = hotkey.split(separator);
  const key = parseKey(hotkeys[hotkeys.length - 1]);
  const hasCtrl = hotkeys.some((value) => value === 'ctrl' || value === '⌘');
  const hasAlt = hotkeys.some((value) => value === 'alt' || value === '⌥');
  const hasShift = hotkeys.some((value) => value === 'shift' || value === '⇧');
  return (
    key.toLocaleLowerCase() === event.key.toLocaleLowerCase() &&
    ((hasCtrl && isTouchCtrlKey(event)) || (!hasCtrl && !isTouchCtrlKey(event))) &&
    ((hasAlt && event.altKey) || (!hasAlt && !event.altKey)) &&
    ((hasShift && event.shiftKey) || (!hasShift && !event.shiftKey))
  );
}
