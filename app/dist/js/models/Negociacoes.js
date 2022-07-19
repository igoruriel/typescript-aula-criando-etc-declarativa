export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
    paraTexto() {
        return ` O TEXTO AQUI NO NEGOCIAÇÕES É ${JSON.stringify(this.lista())}`;
    }
    comparaItens(objeto) {
        return JSON.stringify(objeto.lista()) === JSON.stringify(this.lista());
    }
}
