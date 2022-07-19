import { Imprimivel } from "../interfaces/Imprimivel.js";

export function imprimir (...objetos: Array<Imprimivel>) {
    objetos.forEach(obj => {
        console.log(obj)
    })
}