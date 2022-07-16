export class Negociacao {
    #data;
    #quantidade;
    #valor;
    constructor(data, quantidade, valor) {
        this.#data = data;
        this.#quantidade = quantidade;
        this.#valor = valor;
    }
    get data() {
        const data = new Date(this.#data.getTime());
        return data;
    }
    get quantidade() {
        return this.#quantidade;
    }
    get valor() {
        return this.#valor;
    }
    get volume() {
        return this.#quantidade * this.#valor;
    }
    // exemplo de como um metodo static funciona. 
    static criaDe(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const data = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(data, quantidade, valor);
    }
}
