import { Negociacao } from './Negociacao';
import { logarTempoDeExecucao } from '../helpers/decorators/index';
export class Negociacoes {

    // private _negociacoes: Array<Negociacao> = []; Sintaxe também valida
    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao) {
        this._negociacoes.push(negociacao);
    }
    //Devolve um array de negociacao
    @logarTempoDeExecucao(true)
    paraArray(): Negociacao[] {
        //Retorna um novo array, caso contrario retornaria a referencia, podendo ser alterado.
        return ([] as Negociacao[]).concat(this._negociacoes);
    }
}