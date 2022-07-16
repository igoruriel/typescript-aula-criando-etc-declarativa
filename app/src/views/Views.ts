export abstract class View<T> {
    protected elemento: HTMLElement;
    private escapar = false;
    constructor(seletor:string, escapar?: boolean) {
        const elemento = document.querySelector(seletor);
        if(elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`O seletor ${seletor} não existe no document. Verifique.`)
        }


        if (escapar) {
            this.escapar = escapar;
        }
    }

    public update(modelo: T):void {
        let template = this.template(modelo); 
        if(this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>[\s\S]+/, '')
        }
        this.elemento.innerHTML = template;
        
    }

    protected abstract template(modelo: T):string;

}