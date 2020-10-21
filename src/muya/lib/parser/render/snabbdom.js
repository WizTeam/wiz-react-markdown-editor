import { init } from 'snabbdom/build/package/init'
import { classModule } from 'snabbdom/build/package/modules/class'
import { propsModule } from 'snabbdom/build/package/modules/props'
import { styleModule } from 'snabbdom/build/package/modules/style'
import { attributesModule } from 'snabbdom/build/package/modules/attributes';
import { eventListenersModule } from 'snabbdom/build/package/modules/eventlisteners';
import { datasetModule } from 'snabbdom/build/package/modules/dataset'
import { heroModule } from 'snabbdom/build/package/modules/hero'
export { h } from 'snabbdom/build/package/h' // helper function for creating vnodes
export { toVNode } from 'snabbdom/build/package/tovnode'

export const patch = init([ // Init patch function with chosen modules
  classModule, // makes it easy to toggle classes
  propsModule, // for setting properties on DOM elements
  styleModule, // handles styling on elements with support for animations
  eventListenersModule, // attaches event listeners
  attributesModule,
  datasetModule,
  heroModule
])
export const htmlToVNode = html => { // helper function for convert html to vnode
  const wrapper = document.createElement('div')
  wrapper.innerHTML = html
  return toVNode(wrapper).children
}

export const toHTML = require('snabbdom-to-html')
