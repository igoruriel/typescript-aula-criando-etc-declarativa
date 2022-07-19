var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domInject } from "../decorators/dom-inject.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/Negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";
import { NegociacoesServices } from "../services/Negociacoes-services.js";
import { imprimir } from "../utils/imprimir.js";
import { MensagemView } from "../views/Mensagem-view.js";
import { NegociacoesViews } from "../views/Negociacoes-view.js";
export class NegociacoesController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesViews = new NegociacoesViews('[data-id="negociacoesViews"]');
        this.mensagemView = new MensagemView('[data-id="mensagemView"]');
        this.negociacoesDoDia = new NegociacoesServices();
        this.negociacoesViews.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = Negociacao.criaNegociacao(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.validaDiaUtil(negociacao.data)) {
            this.mensagemView.update('Apenas dias úteis');
            return;
        }
        this.negociacoes.adiciona(negociacao);
        imprimir(negociacao, this.negociacoes);
        this.atualizaUpdate();
        this.limpaFormulario();
    }
    importaDados() {
        this.negociacoesDoDia
            .obterNegociacoesDoDia()
            .then(negociacoesdeHoje => {
            return negociacoesdeHoje.filter(negcDeHoje => {
                return !this.negociacoes
                    .lista()
                    .some(negc => negc.comparaItens(negcDeHoje));
            });
        })
            .then(negociacoesDeHoje => {
            for (let negociacao of negociacoesDeHoje) {
                this.negociacoes.adiciona(negociacao);
            }
            this.negociacoesViews.update(this.negociacoes);
        });
    }
    limpaFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaUpdate() {
        this.negociacoesViews.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso.');
    }
    validaDiaUtil(data) {
        return data.getDay() > DiasDaSemana.DOMINGO
            && data.getDay() < DiasDaSemana.SABADO;
    }
}
__decorate([
    domInject('[data-id="data"]')
], NegociacoesController.prototype, "inputData", void 0);
__decorate([
    domInject('[data-id="quantidade"]')
], NegociacoesController.prototype, "inputQuantidade", void 0);
__decorate([
    domInject('[data-id="valor"]')
], NegociacoesController.prototype, "inputValor", void 0);
