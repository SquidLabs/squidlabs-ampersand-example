/* eslint-disable func-names */
/* eslint-disable quote-props */
import WelcomeView from './modules/welcome';
import PeopleSummaryPage from './modules/people/pages/summary';
import PersonDetailPage from './modules/people/person/pages/detail';
import PersonEditPage from './modules/people/person/pages/edit';

export default {
  '': function () {
    this.trigger('page', new WelcomeView());
  },
  'people': function () {
    this.trigger('page', new PeopleSummaryPage());
  },
  'people/:id': function () {
    this.trigger('page', new PersonDetailPage());
  },
  'perople/:id/edit': function () {
    this.trigger('page', new PersonEditPage());
  },
};
