export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    static criaNegociacao(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const data = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(data, quantidade, valor);
    }
    paraTexto() {
        return `retorna um texto mesmo ${this.data}`;
    }
    comparaItens(objeto) {
        return this.data.getDate() === objeto.data.getDate()
            && this.data.getMonth() === objeto.data.getMonth()
            && this.data.getFullYear() === objeto.data.getFullYear();
    }
}
