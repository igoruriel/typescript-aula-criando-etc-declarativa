import { Modelo } from "../interfaces/Modelo.js";

export class Negociacao implements Modelo<Negociacao>{
    constructor(
        private _data: Date,
        public readonly quantidade: number, 
        public readonly valor: number
    ) {}
    
    get data(): Date {
        const data = new Date(this._data.getTime());
        return data
    }

    get volume(): number {
        return this.quantidade * this.valor
    }

    // exemplo de como um metodo static funciona. 
    public static criaNegociacao(dataString: string, quantidadeString: string, valorString: string): Negociacao {
            const exp = /-/g;
            const data = new Date(dataString.replace(exp, ','));
            const quantidade = parseInt(quantidadeString);
            const valor = parseFloat(valorString);
            return new Negociacao(data,quantidade,valor)
        }
        
    public paraTexto (): string {
        return `retorna um texto mesmo ${this.data}`
    }

    public comparaItens(objeto: Negociacao): boolean {
        return this.data.getDate() === objeto.data.getDate()
            && this.data.getMonth() === objeto.data.getMonth()
            && this.data.getFullYear() === objeto.data.getFullYear();
    }
}