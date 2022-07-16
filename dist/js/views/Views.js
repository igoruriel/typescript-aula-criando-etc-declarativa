export class View {
    elemento;
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    update(modelo) {
        const template = this.template(modelo);
        this.elemento.innerHTML = template;
    }
    template(modelo) {
        throw Error('O template tem que ser feito pela classe filha.');
    }
}
