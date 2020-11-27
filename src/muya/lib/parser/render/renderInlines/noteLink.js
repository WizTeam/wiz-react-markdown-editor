import { CLASS_OR_ID } from '../../../config'
export default function noteLink (h, cursor, block, token, outerClass) {
  const COMMON_MARKER = `span.${CLASS_OR_ID.AG_NOTE_LINK_SYMBOL}.${CLASS_OR_ID.AG_REMOVE}`

  const content =  this.muya.contentState.noteLinkMap.getTitle(token.content) ?? token.content ?? '';

  return [
    h(`span.${CLASS_OR_ID.AG_NOTE_LINK}`, {
      dataset: {
        href: token.content,
        raw: token.raw
      }
    },[
      h(COMMON_MARKER, '[['),
      h(`span.${CLASS_OR_ID.AG_NOTE_LINK_CONTENT}`, content),
      h(COMMON_MARKER, ']]')
    ])
  ]
}
