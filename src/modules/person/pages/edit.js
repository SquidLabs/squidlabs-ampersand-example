import View from 'ampersand-view';
import app from 'ampersand-app';
import template from './edit.template';

export default View.extend({
  template,
  subviews: {
    form: {
      // this is the css selector that will be the `el` in the
      // prepareView function.
      container: 'form',
      // this says we'll wait for `this.model` to be truthy
      waitFor: 'model',
      prepareView(el) {
        return new PersonForm({
          el,
          model: this.model,
          submitCallback: (data) => {
            this.model.save(data, {
              wait: true,
              success() {
                app.navigate('/people');
              },
            });
          },
        });
      },
    },
  },
});
