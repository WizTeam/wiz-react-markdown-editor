"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.htmlToVNode = exports.toVNode = exports.toHTML = exports.h = exports.patch = void 0;

// import virtualize from 'snabbdom-virtualize/strings'
const snabbdom = require('snabbdom');

const patch = snabbdom.init([// Init patch function with chosen modules
require('snabbdom/modules/class').default, // makes it easy to toggle classes
require('snabbdom/modules/attributes').default, require('snabbdom/modules/style').default, // handles styling on elements with support for animations
require('snabbdom/modules/props').default, // for setting properties on DOM elements
require('snabbdom/modules/dataset').default, require('snabbdom/modules/eventlisteners').default // attaches event listeners
]);
exports.patch = patch;

const h = require('snabbdom/h').default; // helper function for creating vnodes


exports.h = h;

const toHTML = require('snabbdom-to-html'); // helper function for convert vnode to HTML string


exports.toHTML = toHTML;

const toVNode = require('snabbdom/tovnode').default; // helper function for convert DOM to vnode


exports.toVNode = toVNode;

const htmlToVNode = html => {
  // helper function for convert html to vnode
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  return toVNode(wrapper).children;
};

exports.htmlToVNode = htmlToVNode;