import { isMacSystem } from './domUtils';

export function parseKey(key) {
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

export function transformKey(key) {
  switch (key) {
    case 'å':
      return 'a';
    case 'µ':
      return 'm';
    case '–':
      return '-';
    case '∆':
      return 'j';
    case 'ç':
      return 'c';
    case 'ø':
      return 'o';
    case '¨':
      return 'u';
    case '≈':
      return 'x';
    case 'œ':
      return 'q';
    case 'dead':
      return 'u';
    default:
      return key;
  }
}

export function isTouchCtrlKey(event) {
  return isMacSystem() ? event.metaKey && !event.ctrlKey : !event.metaKey && event.ctrlKey;
}

export function matchHotKey(hotkey, event, separator = '-') {
  const hotkeys = hotkey.split(separator);
  const key = parseKey(hotkeys[hotkeys.length - 1]);
  const hasCtrl = hotkeys.some(
    (value) =>
      value.toLocaleLowerCase().includes('ctrl') || value.toLocaleLowerCase().includes('cmd')
  );
  const hasAlt = hotkeys.some((value) => value.toLocaleLowerCase() === 'alt' || value === '⌥');
  const hasShift = hotkeys.some((value) => value.toLocaleLowerCase() === 'shift' || value === '⇧');

  return (
    key.toLocaleLowerCase() === transformKey(event.key.toLocaleLowerCase()) &&
    ((hasCtrl && isTouchCtrlKey(event)) || (!hasCtrl && !isTouchCtrlKey(event))) &&
    ((hasAlt && event.altKey) || (!hasAlt && !event.altKey)) &&
    ((hasShift && event.shiftKey) || (!hasShift && !event.shiftKey))
  );
}
