window.onscroll = function() {
    var button = document.querySelector('.voltar-topo');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.opacity = '5'; //suaviza a exibição
    } else {
        button.style.opacity = '0'; //suaviza o desaparecimento do botão
    }
};
