import Model from 'ampersand-model';

export default Model.extend({
  props: {
    id: 'number',
    name: 'string',
    path: 'string',
  },
  url() {
    return `//localhost:3001/nav/${this.getId()}`;
  },
});
