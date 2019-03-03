import View from 'ampersand-view';
import { safeHtml } from 'common-tags';

export default View.extend({
  autoRender: true,
  template: safeHtml`welcome`,
});
