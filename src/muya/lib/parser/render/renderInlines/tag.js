import { CLASS_OR_ID } from '../../../config';
export default function tag(h, cursor, block, token, outerClass) {
  const COMMON_MARKER = `span.${CLASS_OR_ID.AG_TAG}`;
  const { content } = token;
  return [h(COMMON_MARKER, content)];
}
