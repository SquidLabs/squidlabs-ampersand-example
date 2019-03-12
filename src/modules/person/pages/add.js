import View from 'ampersand-view';
import app from 'ampersand-app';
import template from './add.template';


export default View.extend({
  template,
  subviews: {
    form: {
      container: 'form',
      prepareView(el) {
        return new PersonForm({
          el,
          submitCallback(data) {
            app.people.create(data, {
              wait: true,
              success() {
                app.navigate('/collections');
                app.people.fetch();
              },
            });
          },
        });
      },
    },
  },
});
