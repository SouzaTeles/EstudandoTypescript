class View<T> { //tipo generico
    protected _elemento: Element;

    constructor(selector: string) {

        this._elemento = document.querySelector(selector);
    }

    update(model: T) {
        this._elemento.innerHTML = this.template(model)
    }

    template(model: T): string {
        throw new Error('Você deve implementar o metodo template');
    }
}