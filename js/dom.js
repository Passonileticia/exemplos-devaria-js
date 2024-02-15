const divs = $('div');
const h2s = $('h2');
const titulo = $('#titulo');
const paragrafo = $('#paragrafo');
const input = $('input');
const elementsMarginTop2 = $('.mt-2');


function alterarHtml(){
    titulo.text(input.val());
    titulo.css('color','#ac4389');
   for(let element of elementsMarginTop2){
    $(element).addClass('mt-4');
   }

   input.val('');

   const novoP = document.createElement('p');
   novoP.textContent = 'Novo texto adicionado via javascript';

   paragrafo.after(novoP);
}

