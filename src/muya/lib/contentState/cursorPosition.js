import selection from '../selection'

let currentOffset;

export function rememberCursorOffset() {
  const { start, end } = selection.getCursorRange()

  try {
    if (start.key === end.key && start.offset == end.offset) {
      currentOffset = start.offset;
    } else {
      currentOffset = undefined;
    }
  } catch (err) {
    currentOffset = undefined;
  }
}

export function getRecommendedCursorOffset() {
  return currentOffset;
}
