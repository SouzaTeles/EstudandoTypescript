class Negociacoes {
    constructor() {
        // private _negociacoes: Array<Negociacao> = []; Sintaxe também valida
        this._negociacoes = [];
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    //Devolve um array de negociacao
    paraArray() {
        //Retorna um novo array, caso contrario retornaria a referencia, podendo ser alterado.
        return [].concat(this._negociacoes);
    }
}
