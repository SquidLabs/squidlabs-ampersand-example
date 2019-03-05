import Model from 'ampersand-model';

export default Model.extend({
  props: {
    id: 'number',
    firstName: 'string',
    lastName: 'string',
    coolnessFactor: 'number',
  },
  url() {
    return `//localhost:3001/people/${this.getId()}`;
  },
});
