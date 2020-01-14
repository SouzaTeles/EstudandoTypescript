class Negociacoes {
    constructor() {
        // private _negociacoes: Array<Negociacao> = []; Sintaxe também valida
        this._negociacoes = [];
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray() {
        return this._negociacoes;
    }
}
