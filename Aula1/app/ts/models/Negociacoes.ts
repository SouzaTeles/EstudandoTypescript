class Negociacoes {

    // private _negociacoes: Array<Negociacao> = []; Sintaxe também valida
    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray(){
        return this._negociacoes;
    }
}