import View from 'ampersand-view';
import CollectionRenderer from 'ampersand-collection-view';
import template from './main.template';
import People from './index';

export default View.extend({
  initialize() {
    this.people.fetch();
  },
  template,
  children: {
    // we put people in children instead of collection to have event listeners
    people: People.Collection,
  },
  subviews: {
    peopleSummary: {
      waitFor: 'people.fetched',
      hook: 'people-summary',
      prepareView(el) {
        return new CollectionRenderer({
          collection: this.get('people'),
          el,
          view: People.Person.Views.Detail,
          parent: this,
        });
      },
    },
  },
});
