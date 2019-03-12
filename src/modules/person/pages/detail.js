import View from 'ampersand-view';
import app from 'ampersand-app';
import template from './detail.template';

export default View.extend({
  template,
  bindings: {
    'model.fullName': {
      hook: 'name',
    },
    'model.avatar': {
      type: 'attribute',
      hook: 'avatar',
      name: 'src',
    },
    'model.editUrl': {
      type: 'attribute',
      hook: 'edit',
      name: 'href',
    },
  },
  events: {
    'click [data-hook~=delete]': 'handleDeleteClick',
  },
  initialize() {
    this.model.fetch();
  },
  handleDeleteClick() {
    this.model.destroy({
      success() {
        app.navigate('collections');
      },
    });
  },
});
