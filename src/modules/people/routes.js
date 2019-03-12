/* eslint-disable func-names */
/* eslint-disable quote-props */
import PeopleSummaryPage from './pages/summary';

export default {
  'people': function () {
    this.trigger('page', new PeopleSummaryPage());
  },
};
