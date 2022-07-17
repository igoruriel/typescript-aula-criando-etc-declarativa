export abstract class View<T> {
    protected elemento: HTMLElement;
    constructor(seletor:string) {
        const elemento = document.querySelector(seletor);
        if(elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`O seletor ${seletor} não existe no document. Verifique.`)
        }
    }

    public update(modelo: T):void {
        let template = this.template(modelo); 
        this.elemento.innerHTML = template;
        
    }

    protected abstract template(modelo: T):string;

}