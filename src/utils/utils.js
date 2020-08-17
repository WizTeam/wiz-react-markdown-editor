function isType(param, type) {
  return Object.prototype.toString.call(param) === `[object ${type}]`;
}

export function isString(value) {
  return isType(value, 'String');
}

export function addSizeUnit(value, unit = 'px') {
  return isString(value) ? value : value + unit;
}

// help functions
function easeInOutQuad(t, b, c, d) {
  let time = t;
  time /= d / 2;
  if (t < 1) return (c / 2) * time * time + b;
  time -= 1;
  return (-c / 2) * (time * (time - 2) - 1) + b;
}

export const animatedScrollTo = (element, to, duration, callback) => {
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
      if (lastpos === element.scrollTop) {
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
