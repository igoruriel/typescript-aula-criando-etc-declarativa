export class NegociacoesViews {
    #elemento;
    constructor(seletor) {
        this.#elemento = document.querySelector(seletor);
    }
    template(modelo) {
        return (`
            <table class="table table-hover table-border">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                ${modelo.lista().map(neg => {
            return (`
                            <tr>
                                <td>?</td>
                                <td>${neg.quantidade}</td>
                                <td>${neg.valor}</td>
                            </tr>
                        `);
        }).join('')}
                </tbody>
            </table>
            `);
    }
    update(modelo) {
        const template = this.template(modelo);
        this.#elemento.innerHTML = template;
    }
}
