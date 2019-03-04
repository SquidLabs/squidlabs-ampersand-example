export default class ViewSwitcher {
  constructor(options) {
    options || (options = {});
    this.el = options.el;
    this.config = {
      empty: null,
      prepend: false,
      waitForRemove: false,
      autoRender: true
    };
    for (const item in options) {
      if (this.config.hasOwnProperty(item)) {
        this.config[item] = options[item];
      }
    }

    this.#setCurrent(options.view);
    if (this.config.autoRender) this.render();
  }

  #rendered = false;

  set(view) {
    const prev = this.previous = this.current;

    if (prev === view) {
      return;
    }

    if (this.config.waitForRemove) {
      this.next = view;
      this.#hide(prev, () => {
        if (this.next === view) {
          delete this.next;
          this.#show(view);
        }
      });
    } else {
      this.#hide(prev);
      this.#show(view);
    }
    return this;
  }

  #setCurrent(view) {
    this.current = view;
    if (view) this.#registerRemoveListener(view);
    const emptyCb = this.config.empty;
    if (emptyCb && !this.current) {
      emptyCb();
    }
    return view;
  };

  clear(cb) {
    this.#hide(this.current, cb);
    return this;
  }

  // If the view switcher itself is removed, remove its child to avoid memory leaks
  remove() {
    if (this.current) this.current.remove();
    if (this.previous) this.previous.remove();
    if (this.el && this.el.parentNode) this.el.parentNode.removeChild(this.el);
    return this;
  }

  #show(view) {
    const customShow = this.show;
    this.#setCurrent(view);
    this.#render(view);
    if (customShow) customShow(view);
  }

  #registerRemoveListener(view) {
    if (view && view.once) view.once('remove', this.#onViewRemove, this);
  }

  #onViewRemove(view) {
    const emptyCb = this.config.empty;
    if (this.current === view) {
      this.current = null;
    }
    if (emptyCb && !this.current) {
      emptyCb();
    }
  }

  #render(view) {
    if (!this.el) return;
    if (!view.rendered) view.render({ containerEl: this.el });
    if (!view.insertSelf) {
      if (this.config.prepend) {
        this.el.insertBefore(view.el, this.el.firstChild);
      } else {
        this.el.appendChild(view.el);
      }
    }
  }

  render() {
    if (this.current && !this.#rendered) {
      this.#render(this.current);
    }
    // set rendered, el exists even if a current view was not inserted/appended
    this.#rendered = true;
    return this;
  };

  #hide(view, cb) {
    const customHide = this.hide;
    if (!view) return cb && cb();
    if (customHide) {
      if (customHide.length === 2) {
        customHide(view, () => {
          view.remove();
          if (cb) cb();
        });
      } else {
        customHide(view);
        view.remove();
        if (cb) cb();
      }
    } else {
      view.remove();
      if (cb) cb();
    }
  }
}
