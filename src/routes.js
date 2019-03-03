import WelcomeView from './modules/welcome'

export default {
    '': () => this.trigger('change:page', new WelcomeView())
};