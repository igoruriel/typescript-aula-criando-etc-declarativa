import { NegociacoesController } from "./controllers/Negociacoes-controller.js";

const controller = new NegociacoesController();
const form = document.querySelector('.form');
form.addEventListener('submit', e => {
    e.preventDefault();
    controller.adiciona();
})