export default class NoteLinkMap {
  constructor (initData) {
    this.linkMap = new Map(initData?.reduce((prev, curr) => prev.concat([[curr.id, curr.title]]),[]));
  }

  getTitle(id) {
    return this.linkMap.get(id);
  }

  setLink(id, title) {
    this.linkMap.set(id, title);
  }
}
