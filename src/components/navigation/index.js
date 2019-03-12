import View from 'ampersand-view';
import CollectionRenderer from 'ampersand-collection-view';
import NavigationCollection from './collection';
import LinkView from './view';
import template from './index.template';

export default View.extend({
  template,
  children: {
    links: NavigationCollection,
  },
  subviews: {
    navLinks: {
      waitFor: 'links.fetched',
      hook: 'navigation-list',
      prepareView(el) {
        return new CollectionRenderer({
          collection: this.get('links'),
          el,
          view: LinkView,
          parent: this,
        });
      },
    },
  },
  initialize() {
    this.links.fetch();
  },
});
