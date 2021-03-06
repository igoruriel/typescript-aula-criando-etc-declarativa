import { domInject } from "../decorators/dom-inject.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/Negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";
import { NegociacoesServices } from "../services/Negociacoes-services.js";
import { imprimir } from "../utils/imprimir.js";
import { MensagemView } from "../views/Mensagem-view.js";
import { NegociacoesViews } from "../views/Negociacoes-view.js";

export class NegociacoesController {
    
    @domInject('[data-id="data"]')
    private inputData: HTMLInputElement;
    @domInject('[data-id="quantidade"]')
    private inputQuantidade: HTMLInputElement;
    @domInject('[data-id="valor"]')
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesViews = new NegociacoesViews('[data-id="negociacoesViews"]');
    private mensagemView = new MensagemView('[data-id="mensagemView"]');
    private negociacoesDoDia = new NegociacoesServices()

    constructor() {
        this.negociacoesViews.update(this.negociacoes);
    }

    // @tempoDeExecucao()
    // @inspetor()
    public adiciona(): void {
        // métodos statics: o método pode ser chamado atraves do nome da Classe, sem o static não é possível teria que criar uma new Negociacao(.., .., ..).criaDe(etc..)
        // const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value)
        const negociacao = Negociacao.criaNegociacao(
            this.inputData.value, 
            this.inputQuantidade.value, 
            this.inputValor.value
        );

        if(!this.validaDiaUtil(negociacao.data)){
            this.mensagemView.update('Apenas dias úteis')
            return;
        }
        this.negociacoes.adiciona(negociacao);
        imprimir(negociacao, this.negociacoes)
        this.atualizaUpdate();
        this.limpaFormulario();
    }

    public importaDados(): void {
            this.negociacoesDoDia
            .obterNegociacoesDoDia()
            .then(negociacoesdeHoje => {
                return negociacoesdeHoje.filter(negcDeHoje => {
                    return !this.negociacoes
                    .lista()
                    .some(negc => negc.comparaItens(negcDeHoje))
                });
            })
            .then(negociacoesDeHoje => {
                for(let negociacao of negociacoesDeHoje) {
                    this.negociacoes.adiciona(negociacao);
                }
                this.negociacoesViews.update(this.negociacoes);
            });
    }
    // levado para a classe Negociacao
    // private criaNegociacao(): Negociacao {
    //     const exp = /-/g;
    //     const data = new Date(this.inputData.value.replace(exp, ','));
    //     const quantidade = parseInt(this.inputQuantidade.value);
    //     const valor = parseFloat(this.inputValor.value);
    //     return new Negociacao(
    //         data,
    //         quantidade,
    //         valor
    //     )
    // }

    private limpaFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    // @inspetor()
    private atualizaUpdate(): void {
        this.negociacoesViews.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso.')
    }

    private validaDiaUtil (data: Date) {
        return data.getDay() > DiasDaSemana.DOMINGO 
            && data.getDay() < DiasDaSemana.SABADO
    }
}