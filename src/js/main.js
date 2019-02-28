import app from 'ampersand-app';
import Router from './router';

app.extend({
    router: new Router,
    start: function () {
        this.switcher = new switcher();
        this.router.history.start();
    }
});

window.addEventListener('DOMContentLoaded', () =>  app.start());