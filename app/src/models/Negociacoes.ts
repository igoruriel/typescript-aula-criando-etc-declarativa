import { Negociacao } from "./Negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> /* Negociacao[] */ = [];

    public adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    public lista(): ReadonlyArray<Negociacao>  /*readonly Negociacao[]*/ {
        return this.negociacoes;
    }
}