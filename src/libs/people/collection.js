
import BaseCollection from '../../components/collection/base';
import Person from './model';

export default BaseCollection.extend({
  model: Person,
  url() {
    return '//localhost:3001/people';
  },
});
