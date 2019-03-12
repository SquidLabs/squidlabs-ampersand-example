import Collection from '../collection/base';
import NavModel from './model';

export default Collection.extend({
  model: NavModel,
  url() {
    return '//localhost:3001/nav';
  },
});
