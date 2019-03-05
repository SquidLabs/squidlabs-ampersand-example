import Model from 'ampersand-model';

export default Model.extend({
  constructor(attrs) {
    Reflect.construct.call(this, attrs);
    this.on();
  },
  session: {
    fetched: ['boolean', false, false],
  },
  fetch() {

  },
  save() {
  },
  destroy() {

  },

});
