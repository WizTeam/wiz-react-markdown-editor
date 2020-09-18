'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.isString = isString;
exports.addSizeUnit = addSizeUnit;
exports.formatUrl = formatUrl;
exports.isDarkMode = isDarkMode;
exports.os = exports.animatedScrollTo = void 0;

function isType(param, type) {
  return Object.prototype.toString.call(param) === '[object '.concat(type, ']');
}

function isString(value) {
  return isType(value, 'String');
}

function addSizeUnit(value, unit = 'px') {
  return isString(value) ? value : value + unit;
}

function formatUrl(url) {
  return url.endsWith('/') ? url : ''.concat(url, '/');
} // help functions

function easeInOutQuad(t, b, c, d) {
  if (d === 0) return b + c;
  let time = t;
  time /= d / 2;
  if (time < 1) return (c / 2) * time * time + b;
  time -= 1;
  return (-c / 2) * (time * (time - 2) - 1) + b;
}

const animatedScrollTo = (element, to, duration, callback) => {
  const start = element.scrollTop;
  const change = to - start;
  const animationStart = +new Date();
  const _element = element;
  let animating = true;
  let lastpos = null;

  const animateScroll = () => {
    if (!animating) return;
    requestAnimationFrame(animateScroll);
    const now = +new Date();
    const val = Math.floor(easeInOutQuad(now - animationStart, start, change, duration));

    if (lastpos) {
      if (lastpos === _element.scrollTop) {
        lastpos = val;
        _element.scrollTop = val;
      } else {
        animating = false;
      }
    } else {
      lastpos = val;
      _element.scrollTop = val;
    }

    if (now > animationStart + duration) {
      _element.scrollTop = to;
      animating = false;

      if (callback) {
        callback();
      }
    }
  };

  requestAnimationFrame(animateScroll);
};

exports.animatedScrollTo = animatedScrollTo;

function isDarkMode() {
  var _window$matchMedia$ma, _window$matchMedia;

  return (_window$matchMedia$ma =
    (_window$matchMedia = window.matchMedia('(prefers-color-scheme: dark)')) === null ||
    _window$matchMedia === void 0
      ? void 0
      : _window$matchMedia.matches) !== null && _window$matchMedia$ma !== void 0
    ? _window$matchMedia$ma
    : false;
}

const os = (function () {
  const ua = navigator.userAgent;
  const isWindowsPhone = /(?:Windows Phone)/.test(ua);
  const isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone;
  const isAndroid = /(?:Android)/.test(ua);
  const isFireFox = /(?:Firefox)/.test(ua);
  const isChrome = /(?:Chrome|CriOS)/.test(ua);
  const isTablet =
    /(?:iPad|PlayBook)/.test(ua) ||
    (isAndroid && !/(?:Mobile)/.test(ua)) ||
    (isFireFox && /(?:Tablet)/.test(ua));
  const isPhone = /(?:iPhone)/.test(ua) && !isTablet;
  const isPc = !isPhone && !isAndroid && !isSymbian;
  return {
    isTablet,
    isPhone,
    isAndroid,
    isPc
  };
})();

exports.os = os;
