import app from 'ampersand-app';
import Router from './components/router';
import ContainerView from './modules/container';
import routes from './routes';

import 'bootstrap.native';

import './app.scss';

app.extend({
  start() {
    this.registerSW();
    this.router = new Router({ routes });
    this.container = new ContainerView();
    this.container.render();
    this.router.history.start({ pushState: true, root: '/' });
  },
  registerSW() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then((registration) => {
          console.log('SW registered: ', registration);
        }).catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
      });
    }
  },
  container: null,
  router: null,
});

window.addEventListener('DOMContentLoaded', () => {
  app.start();
});
