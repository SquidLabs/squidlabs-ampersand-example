import View from 'ampersand-view';

export default View.extend({
    subviews: {
        nav: {},
        main: {}
        // we could put a footer here
    },
    render: () => {
        this.el = document.querySelector('[data-hook="container"]');
        this._upsertBindings(); // subviews get initialized, and eventually rendered from this call.
        this._rendered = true;
        return this;
    }
});