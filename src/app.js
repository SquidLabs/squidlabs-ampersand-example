import app from 'ampersand-app';
import Router from './components/router';
import ContainerView from './modules/container';
import routes from './routes';

import 'bootstrap.native';

import './app.scss';

app.extend({
  start: () => {
    this.registerSW();
    this.container.render();
    this.router.history.start();
  },
  container: new ContainerView(),
  registerSW: () => {
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
  router: new Router({ routes }),
});

window.addEventListener('DOMContentLoaded', () => app.start());
