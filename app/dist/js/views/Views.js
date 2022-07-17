export class View {
    constructor(seletor) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`O seletor ${seletor} não existe no document. Verifique.`);
        }
    }
    update(modelo) {
        let template = this.template(modelo);
        this.elemento.innerHTML = template;
    }
}
