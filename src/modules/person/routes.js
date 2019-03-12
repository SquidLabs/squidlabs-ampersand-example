/* eslint-disable func-names */
/* eslint-disable quote-props */
import PersonDetailPage from './pages/detail';
import PersonEditPage from './pages/edit';
import PersonModel from '../../libs/people/model';

export default {
  'person/:id': function (id) {
    this.trigger('page', new PersonDetailPage({
      model: new PersonModel({ id }),
    }));
  },
  'person/:id/edit': function (id) {
    this.trigger('page', new PersonEditPage({
      model: new PersonModel({ id }),
    }));
  },
};
