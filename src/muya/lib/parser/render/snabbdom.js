import { init } from 'snabbdom/build/package/init';
import { attributesModule } from 'snabbdom/build/package/modules/attributes';
import { classModule } from 'snabbdom/build/package/modules/class';
import { datasetModule } from 'snabbdom/build/package/modules/dataset';
import { eventListenersModule } from 'snabbdom/build/package/modules/eventlisteners';
import { heroModule } from 'snabbdom/build/package/modules/hero';
// import { Module } from 'snabbdom/build/package/modules/module';
import { propsModule } from 'snabbdom/build/package/modules/props';
import { styleModule } from 'snabbdom/build/package/modules/style';

import {h} from 'snabbdom/build/package/h';

import toHTML from 'snabbdom-to-html'

import {toVNode} from 'snabbdom/build/package/tovnode'

export const patch = init([
  attributesModule,
  classModule,
  datasetModule,
  eventListenersModule,
  heroModule,
  // Module,
  propsModule,
  styleModule
])

export const htmlToVNode = html => { // helper function for convert html to vnode
  const wrapper = document.createElement('div')
  wrapper.innerHTML = html
  return toVNode(wrapper).children
}



export {
  h,
  toHTML,
  toVNode
}
