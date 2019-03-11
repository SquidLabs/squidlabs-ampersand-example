import Model from 'ampersand-model';
import { get, includes } from 'lodash';

export default Model.extend({
  constructor(attrs) {
    Model.call(this, attrs);
    this.initSyncHandlers();
  },
  session: {
    fetched: 'boolean',
    saved: 'boolean',
    destroyed: 'boolean',
  },
  initSyncHandlers(options) {
    this.on('sync', (opts) => {
      if (get(opts, 'xhr.method') === 'GET') {
        this.set('fetched', true, options);
      }
    }, this);

    this.on('sync', (opts) => {
      if (includes(['POST', 'PUT', 'PATCH'], get(opts, 'xhr.method'))) {
        this.set('saved', true, options);
      }
    }, this);

    this.on('destroy', () => this.set('destroyed', true, options), this);
  },

});
