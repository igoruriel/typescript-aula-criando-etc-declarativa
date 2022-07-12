import { Negociacoes } from "../models/Negociacoes.js";

export class NegociacoesViews {
    #elemento: HTMLElement;
    constructor(seletor:string){
        this.#elemento = document.querySelector(seletor)
    }

    template(modelo: Negociacoes):string {
        return (
            `
            <table class="table table-hover table-border">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                ${modelo.lista().map(neg => {
                    return (
                        `
                            <tr>
                                <td>?</td>
                                <td>${neg.quantidade}</td>
                                <td>${neg.valor}</td>
                            </tr>
                        `
                    )
                }).join('')}
                </tbody>
            </table>
            `
        )
    }

    update(modelo: Negociacoes):void {
        const template = this.template(modelo)
        this.#elemento.innerHTML = template;
        
    }
}