import View from 'ampersand-view';
import CollectionRender from 'ampersand-collection-view';
import template from './navigation.template';
import NavCollection from './collection';
import NavView from './view';

export default View.extend({
  template,
  children: {
    nav: NavCollection,
  },
  subviews: {
    navItems: {
      waitFor: 'nav.fetched',
      hook: '',
      prepareView(el) {
        return new CollectionRender({
          el,
          view: NavView,
        });
      },
    },
  },
  initialize() {
    this.nav.fetch();
  },
});
