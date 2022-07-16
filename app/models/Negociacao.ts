export class Negociacao {
    #data: Date;
    #quantidade: number;
    #valor: number;

    constructor(data: Date, quantidade: number, valor: number) {
        this.#data = data;
        this.#quantidade = quantidade;
        this.#valor = valor;
    }

    get data(): Date {
        const data = new Date(this.#data.getTime());
        return data
    }

    get quantidade(): number {
        return this.#quantidade;
    }

    get valor(): number {
        return this.#valor;
    }

    get volume(): number {
        return this.#quantidade * this.#valor
    }

    // exemplo de como um metodo static funciona. 
    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
            const exp = /-/g;
            const data = new Date(dataString.replace(exp, ','));
            const quantidade = parseInt(quantidadeString);
            const valor = parseFloat(valorString);
            return new Negociacao(
                data,
                quantidade,
                valor
            )
        }
}