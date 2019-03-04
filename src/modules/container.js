import View from 'ampersand-view';
import { invokeMap } from 'lodash';
import app from 'ampersand-app';
import ViewSwitcher from '../components/viewswitcher';
import NavigationView from '../components/navigation';

export default View.extend({
  initialize: function () {
    this.listenTo(app.router, 'page', this.handlePageSwitch);
  },
  events: {
    'click a[data-internal-link]': 'handleInternalLink',
  },
  subviews: {
    nav: {
      hook: 'nav',
      prepareView(el) {
        return new NavigationView({
          el,
          waitForRemove: true,
          autoRender: true,
        });
      }
    },
    main: {
      hook: 'main',
      prepareView(el) {
        return new ViewSwitcher({
          el,
          waitForRemove: true,
          autoRender: true,
        });
      }
    },
  },
  render() {
    this.el = document.querySelector('[data-hook="container"]');
    this._upsertBindings(); // subviews get initialized, and eventually rendered from this call.
    this._rendered = true;
    return this;
  },
  handleInternalLink(event) {
    event.preventDefault();

    const el = event.currentTraget;
    const path = el.getAttribute('href');

    app.router.navigate(path);
  },
  handlePageSwitch(view) {
    this.main.set(view);
    this.updateActiveLinks();
  },
  updateActiveLinks() {
    invokeMap(this.el.querySelectorAll('a.active[data-internal-link]'), 'removeClass', 'active');
    invokeMap(this.el.querySelectorAll(`a[href="${app.router.history.getFragment()}"]`), 'addClass', 'active');
  },
});
