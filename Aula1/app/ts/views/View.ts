abstract class View<T> { //tipo generico
    private _elemento: JQuery;

    constructor(selector: string) {

        this._elemento = $(selector);
    }

    update(model: T) {
        this._elemento.html(this.template(model));
    }

    abstract template(model: T): string;
}