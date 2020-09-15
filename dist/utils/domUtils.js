'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.createdStyleTag = createdStyleTag;
exports.isMacSystem = isMacSystem;

function createdStyleTag(id, contents, overwrite = false) {
  const styleElement = document.getElementById(id);

  if (styleElement && overwrite) {
    styleElement.innerHTML = contents;
  } else if (!styleElement) {
    const ele = document.createElement('style');
    ele.id = id;
    ele.innerHTML = contents;
    document.head.appendChild(ele);
  }
}

function isMacSystem() {
  return navigator.platform.toUpperCase().includes('MAC');
}
