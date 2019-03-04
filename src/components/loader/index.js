import View from 'ampersand-view';
import RequestsCollection from './collections/requests';
import RequestModel from './models/request';

export default View.extend({
  initialize() {
    //on add, start loader
    //on remove 
  },
  props: {
    isVisible: ['boolean', true, false]
  },
  children: {
    requests: RequestsCollection
  },
  bindings: {
    'isVisible': {
      type: 'toggle',
      selector: '.loading-indicator'
    }
  },
  pushPromise(promise) {
    promise.finally(() => this.remove(promise))
    this.requests.add(promise);
  },
  removePromise(promise) {
    this.requests.remove(promise);
  },
  show() {
    this.isVisible = true;
  },
  hide() {
    this.isVisible = false;
  }

});