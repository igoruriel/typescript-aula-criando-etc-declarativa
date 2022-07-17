var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { inspetor } from "../decorators/inspector.js";
import { tempoDeExecucao } from "../decorators/tempo-de-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/Negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";
import { MensagemView } from "../views/Mensagem-view.js";
import { NegociacoesViews } from "../views/Negociacoes-view.js";
export class NegociacoesController {
    #inputData;
    #inputQuantidade;
    #inputValor;
    #negociacoes = new Negociacoes();
    #negociacoesViews = new NegociacoesViews('[data-id="negociacoesViews"]');
    #mensagemView = new MensagemView('[data-id="mensagemView"]');
    constructor() {
        this.#inputData = document.querySelector('#data');
        this.#inputQuantidade = document.querySelector('#quantidade');
        this.#inputValor = document.querySelector('#valor');
        this.#negociacoesViews.update(this.#negociacoes);
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        if (!this.validaDiaUtil(negociacao.data)) {
            this.#mensagemView.update('Apenas dias úteis');
            return;
        }
        this.#negociacoes.adiciona(negociacao);
        this.atualizaUpdate();
        this.limpaFormulario();
    }
    criaNegociacao() {
        const exp = /-/g;
        const data = new Date(this.#inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.#inputQuantidade.value);
        const valor = parseFloat(this.#inputValor.value);
        return new Negociacao(data, quantidade, valor);
    }
    limpaFormulario() {
        this.#inputData.value = '';
        this.#inputQuantidade.value = '';
        this.#inputValor.value = '';
        this.#inputData.focus();
    }
    atualizaUpdate() {
        this.#negociacoesViews.update(this.#negociacoes);
        this.#mensagemView.update('Negociação adicionada com sucesso.');
    }
    validaDiaUtil(data) {
        return data.getDay() > DiasDaSemana.DOMINGO
            && data.getDay() < DiasDaSemana.SABADO;
    }
}
__decorate([
    tempoDeExecucao(),
    inspetor()
], NegociacoesController.prototype, "adiciona", null);
__decorate([
    inspetor()
], NegociacoesController.prototype, "atualizaUpdate", null);
