import { Negociacao } from "../models/Negociacao.js";

export function imprimir (...objetos: Array<Negociacao>) {
    objetos.forEach(obj => {
        console.log(obj)
    })
}