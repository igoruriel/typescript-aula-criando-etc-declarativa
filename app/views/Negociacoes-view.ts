import { Negociacoes } from "../models/Negociacoes.js";
import { View } from "./Views.js";

export class NegociacoesViews extends View<Negociacoes>{

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
                                <td>${new Intl.DateTimeFormat().format(neg.data)}</td>
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
}