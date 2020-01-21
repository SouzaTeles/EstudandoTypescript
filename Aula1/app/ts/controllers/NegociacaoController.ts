import { NegociacaoView, MensagemView } from '../views/index';
import { Negociacoes, Negociacao } from '../models/index';
import { logarTempoDeExecucao, domInject } from '../helpers/decorators/index';

export class NegociacaoController {
    @domInject('#data')
    private _inputData: JQuery;
    
    @domInject('#quantidade')
    private _inputQuantidade: JQuery;
    
    @domInject('#valor')
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes(); //O Typescript infere o tipo
    private _negociacoesView = new NegociacaoView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor() {
        // this._inputData = $('#data')
        // this._inputQuantidade = $('#quantidade')
        // this._inputValor = $('#valor')
        this._negociacoesView.update(this._negociacoes);
    }

    @logarTempoDeExecucao()
    adiciona(event: Event) {
        event.preventDefault();

        let data = new Date(this._inputData.val().replace(/-/g, ','));

        if (!this.verificaDiaUtil) {
            this._mensagemView.update('Somente negociações em dias uteis');
            return;
        }

        const negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        )

        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso');

    }
    private verificaDiaUtil(data: Date) {
        return data.getDay() != DiaDaSemana.Domingo && data.getDay() != DiaDaSemana.Sabado
    }

    importaDados(){
        console.log('importa dados')
    }
}

enum DiaDaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado,
}