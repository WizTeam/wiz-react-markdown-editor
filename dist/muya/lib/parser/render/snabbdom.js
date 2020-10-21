"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "h", {
  enumerable: true,
  get: function () {
    return _h.h;
  }
});
Object.defineProperty(exports, "toVNode", {
  enumerable: true,
  get: function () {
    return _tovnode.toVNode;
  }
});
exports.toHTML = exports.htmlToVNode = exports.patch = void 0;

var _init = require("snabbdom/build/package/init");

var _class = require("snabbdom/build/package/modules/class");

var _props = require("snabbdom/build/package/modules/props");

var _style = require("snabbdom/build/package/modules/style");

var _attributes = require("snabbdom/build/package/modules/attributes");

var _eventlisteners = require("snabbdom/build/package/modules/eventlisteners");

var _dataset = require("snabbdom/build/package/modules/dataset");

var _hero = require("snabbdom/build/package/modules/hero");

var _h = require("snabbdom/build/package/h");

var _tovnode = require("snabbdom/build/package/tovnode");

// helper function for creating vnodes
const patch = (0, _init.init)([// Init patch function with chosen modules
_class.classModule, // makes it easy to toggle classes
_props.propsModule, // for setting properties on DOM elements
_style.styleModule, // handles styling on elements with support for animations
_eventlisteners.eventListenersModule, // attaches event listeners
_attributes.attributesModule, _dataset.datasetModule, _hero.heroModule]);
exports.patch = patch;

const htmlToVNode = html => {
  // helper function for convert html to vnode
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  return toVNode(wrapper).children;
};

exports.htmlToVNode = htmlToVNode;

const toHTML = require('snabbdom-to-html');

exports.toHTML = toHTML;