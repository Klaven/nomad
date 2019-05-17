export default class XHRToken {
  get xhr() {
    return this._xhr;
  }

  capture(xhr) {
    this._xhr = xhr;
  }

  abort() {
    if (this.xhr) {
      this.xhr.abort();
    }
  }
}
