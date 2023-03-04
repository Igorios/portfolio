
$(document).ready(function() {

    $('.btn-filter').on('click', function() {
        let tipo = $(this).attr('id');
        //console.log(tipo);
        let caixa = $('.box-img');

        $('.btn-port').removeClass('active');
        $(this).addClass('active');

        if (tipo == 'btn-web') {
            caixaEscolhida('web', caixa);
        } else if (tipo == 'btn-jogo') {
            caixaEscolhida('jogo', caixa);
        } else if (tipo == "btn-pessoal") {
            caixaEscolhida('pessoal', caixa);
        } else {
            caixaEscolhida('all', caixa);
        }


    });


    function caixaEscolhida(tipo, caixa) {

        if (tipo == 'all') {
            $(caixa).fadeIn();
        } else {
            $(caixa).each(function() {
                if (!$(this).hasClass(tipo)) {
                    $(this).fadeOut('show');
                } else {
                    $(this).fadeIn();
                }
            });
        }

    }


});