/* eslint-disable func-names */
/* eslint-disable quote-props */
import app from 'ampersand-app';
import forEach from 'lodash/forEach';
import WelcomeView from './modules/welcome';

function bindRoutes(routeCollection) {
  forEach(routeCollection, (callback, key) => {
    app.router.route(key, callback);
    app.router.history.loadUrl(app.router.history.getFragment());
  });
}

export default {
  '': function () {
    this.trigger('page', new WelcomeView());
  },
  'people': function () {
    import(/* webpackPrefetch: true */'./modules/people/routes').then((routes) => {
      bindRoutes(routes.default);
    });
  },
  'person/*path': function () {
    import(/* webpackPrefetch: true */'./modules/person/routes').then((routes) => {
      bindRoutes(routes.default);
    });
  },
};
