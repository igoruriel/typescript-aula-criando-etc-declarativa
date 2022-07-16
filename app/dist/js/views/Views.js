export class View {
    elemento;
    escapar = false;
    constructor(seletor, escapar) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`O seletor ${seletor} não existe no document. Verifique.`);
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }
    update(modelo) {
        let template = this.template(modelo);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>[\s\S]+/, '');
        }
        this.elemento.innerHTML = template;
    }
}
