import View from 'ampersand-view';
import CollectionRenderer from 'ampersand-collection-view';
import template from './summary.template';
import PeopleCollection from '../../../libs/people/collection';
import PersonSummaryView from '../views/summary';

export default View.extend({
  autoRender: true,
  template,
  children: {
    people: PeopleCollection,
  },
  subviews: {
    peopleSummary: {
      waitFor: 'people.fetched',
      hook: 'people-summary',
      prepareView(el) {
        return new CollectionRenderer({
          collection: this.get('people'),
          el,
          view: PersonSummaryView,
          parent: this,
        });
      },
    },
  },
  initialize() {
    this.on('all', function () {
      debugger;
    });
    this.people.fetch();
  },
});
