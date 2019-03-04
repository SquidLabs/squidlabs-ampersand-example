import WelcomeView from './modules/welcome';

export default {
  '': {
    name: 'welcome',
    callback() {
      this.trigger('page', new WelcomeView());
    },
  }
};
