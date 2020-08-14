function isType(param, type) {
  return Object.prototype.toString.call(param) === `[object ${type}]`;
}

export function isString(value) {
  return isType(value, 'String');
}

export function addSizeUnit(value, unit = 'px') {
  return isString(value) ? value : value + unit;
}
