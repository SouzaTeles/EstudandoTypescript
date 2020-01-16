const controller = new NegociacaoController();
$('.form').on('submit', ()=> controller.adiciona.bind(controller));
// document
//     .querySelector('.form')
//     .addEventListener('submit', controller.adiciona.bind(controller))