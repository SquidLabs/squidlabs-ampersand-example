import Collection from 'ampersand-rest-collection';
import PersonModel from '../person/model';

export default Collection.extend({
  model: PersonModel,
  url() {
    return '//localhost:3001/people';
  },
});
