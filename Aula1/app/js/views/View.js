var Views;
(function (Views) {
    class View {
        constructor(selector) {
            this._elemento = $(selector);
        }
        update(model) {
            this._elemento.html(this.template(model));
        }
    }
    Views.View = View;
})(Views || (Views = {}));
