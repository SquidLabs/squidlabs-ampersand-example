import Router from 'ampersand-router';
import { forEach, result } from 'lodash';

export default Router.extend({
  _bindRoutes: () => {
    if (!this.routes) return;
    this.routes = result(this, 'routes');

    forEach(this.routes, (route, key) => {
      this.route(key, route.name, route.callback);
    });
  },
});
