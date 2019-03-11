import BaseCollection from '../../../components/collection/base';
import PersonModel from '../person/model';

export default BaseCollection.extend({
  model: PersonModel,
  url() {
    return '//localhost:3001/people';
  },
});
