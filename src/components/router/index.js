import Router from 'ampersand-router'

export default Router.extend({
    _bindRoutes: function () {
        if (!this.routes) return;
        this.routes = result(this, 'routes');
        var route, routes = Object.keys(this.routes);
        while ((route = routes.pop()) != null) {
            // let's change it to call route w/ a callback
            this.route(route, this.routes[route].name, this.routes[route].callback);
        }
    }
});
