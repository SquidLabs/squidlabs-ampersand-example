import WelcomeView from './modules/welcome';
import PeopleView from './modules/people/main';

export default {
  '': {
    name: 'welcome',
    callback() {
      this.trigger('page', new WelcomeView());
    },
  },
  people: {
    name: 'people',
    callback() {
      this.trigger('page', new PeopleView());
    },
  },
};
