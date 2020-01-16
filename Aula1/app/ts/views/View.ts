export abstract class View<T> { //tipo generico
    private _elemento: JQuery;
    private _escapar: boolean;

    constructor(selector: string, escapar?: boolean) {

        this._elemento = $(selector);
    }

    update(model: T) {
        let template = this.template(model);
        if(this._escapar)
            template = template.replace(/<script>[\s\S]*?<\/script>/g, '')
        this._elemento.html(template);
    }

    abstract template(model: T): string;
}