import Collection from 'ampersand-rest-collection';
import { get, includes } from 'lodash';

export default Collection.extend({
  constructor(models, options) {
    Collection.call(this, models, options);
    this.initSyncHandlers();
  },
  fetched: false,
  saved: false,
  destroyed: false,
  initSyncHandlers() {
    this.on('sync', function(collection, resp, opts) {
      if (get(opts, 'xhr.method') === 'GET') {
        this.fetched = true;
        this.trigger('change:fetched', this);
        if (this.parent) {
          this.parent.trigger('change', this);
        }
      }
    }, this);

    this.on('sync', (collection, resp, opts) => {
      if (includes(['POST', 'PUT', 'PATCH'], get(opts, 'xhr.method'))) {
        this.saved = true;
        this.trigger('change:saved', this);
        if (this.parent) {
          this.parent.trigger('change', this);
        }
      }
    }, this);

    this.on('destroy', () => {
      this.destroyed = true;
      this.trigger('change:destroyed', this);
      if (this.parent) {
        this.parent.trigger('change', this);
      }
    });
  },
});
