module.exports = window => {
  "use strict";

  var ViewerAdapter = class {

    get view() {
      return this._el;
    }

    set view(v) {
      if (v === this._el) return;
      if (v) {
        this.stop();
      }
      this._el = v;
    }

    get comments() {
      return this._comments;
    }

    set comments(v) {
      this._comments = v;
    }

    get rows() {
      return this._rows;
    }

    set rows(v) {
      this._rows = v;
    }

    get mode() {
      return this._mode;
    }

    set mode(v) {
      this._mode = v;
    }

    get position() {
      return this._pos;
    }

    set position(v) {
      this._pos = v;
    }

    get playing() {
      return this._playing;
    }

    constructor() {
      this._el = null;
      this._comments = null;
      this._rows = 12;
      this._mode = 0;
      this._pos = 0;
      this._playing = false;
      this._oldDate = 0;
      this._drawCb = (() => {
        if (!this._playing) return;
        var now = Date.now();
        this._pos += now - this._oldDate;
        this.draw();
        this._oldDate = now;
        window.requestAnimationFrame(this._drawCb);
      }).bind(this);
    }

    start() {
      if (this._playing) return;
      this._playing = true;
      this._oldDate = Date.now();
      this._drawCb();
    }

    stop() {
      this._playing = false;
    }

    draw() {
      if (this._mode === 0) this._drawPrecomp();
      else this._drawRealtime();
    }

    calc() {
      this._mode = 0;
    }

    clear() {

    }

    _drawPrecomp() {

    }

    _drawRealtime() {

    }

  };

  ViewerAdapter.mode = {
    PRECOMPUTATION: 0,
    REALTIME: 1
  };

  return ViewerAdapter;
};
