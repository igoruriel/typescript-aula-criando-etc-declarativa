export class View<T> {
    protected elemento: HTMLElement;
    constructor(seletor:string){
        this.elemento = document.querySelector(seletor)
    }

    update(modelo: T):void {
        const template = this.template(modelo)
        this.elemento.innerHTML = template;
        
    }

    template(modelo: T):string {
        throw Error('O template tem que ser feito pela classe filha.')
    }

}