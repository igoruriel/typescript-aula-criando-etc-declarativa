import { Modelo } from "../interfaces/Modelo.js";
import { Negociacao } from "./Negociacao.js";

export class Negociacoes implements Modelo<Negociacoes>{
    
    private negociacoes: Array<Negociacao> /* Negociacao[] */ = [];

    public adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    public lista(): ReadonlyArray<Negociacao>  /*readonly Negociacao[]*/ {
        return this.negociacoes;
    }
    
    public paraTexto(): string {
        return ` O TEXTO AQUI NO NEGOCIAÇÕES É ${JSON.stringify(this.lista())}`
    }

    public comparaItens(objeto: Negociacoes): boolean {
        return JSON.stringify(objeto.lista()) === JSON.stringify(this.lista())
    }
}