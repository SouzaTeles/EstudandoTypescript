System.register([], function (exports_1, context_1) {
    "use strict";
    var View;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            View = class View {
                constructor(selector, escapar = false) {
                    this._elemento = $(selector);
                }
                update(model) {
                    let template = this.template(model);
                    if (this._escapar)
                        template = template.replace(/<script>[\s\S]*?<\/script>/g, '');
                    this._elemento.html(template);
                }
            };
            exports_1("View", View);
        }
    };
});
