import { Negociacao } from "./Negociacao.js";

export class Negociacoes {
    #negociacoes: Array<Negociacao> /* Negociacao[] */ = [];

    adiciona(negociacao: Negociacao): void {
        this.#negociacoes.push(negociacao);
    }

    lista(): ReadonlyArray<Negociacao>  /*readonly Negociacao[]*/ {
        return this.#negociacoes;
    }
}