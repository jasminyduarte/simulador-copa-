//variaveis globais

//Teste ajax
function apaga() {
    //apaga o conteúdo
    $('.principal').empty();
    $('.sls').empty();

}
//select
$(document).ready(function () {
    $('select').material_select();

});

//pegando dados da tabela
function Selecionado() {
    $("select option:selected").each(function () {
        var sele = $(this).val();
        var Nome_Tabela = $('#nometabela');
        var Nome_Time_input = $('#nometime').val();
        var times = {}; // objeto time

        //     Verificando Qual Grupo Foi selecionando
        if (sele === 'a') {
            Nome_Tabela.html("Grupo A");
            var table = $('.pai');
            if (sele !== "a") {
                table.empty();
            }
            else {
                times = {
                    times: $("#times option:selected").val(),
                    grupo: Nome_Tabela
                }
                table.append(
                    "<tr>" +
                    "<td  class= 'center-align white black-text'>" +
                    times.times +
                    " </td>" +
                    "</tr>"
                );
                console.log(times)
            }

        }
        else if (sele === 'b') {
            Nome_Tabela.html("Grupo B");
            var table = $('.pai');

            if (sele !== "b") {
                table.empty();
            }
            else {
                table.append(
                    "<tr>" +
                    "<td  class= 'center-align white black-text'>" +
                    times +
                    " </td>" +
                    "</tr>"
                );
            } // adiciona novo
        }
        else if (sele === 'c') {
            Nome_Tabela.html("Grupo C");
            if (sele !== "c") {
                table.empty();
            }
            else {
                table.append(
                    "<tr>" +
                    "<td  class= 'center-align white black-text'>" +
                    times +
                    " </td>" +
                    "</tr>"
                );
            } // adiciona novo
        }
        else if (sele === 'd') {
            Nome_Tabela.html("Grupo D");
            var table = $('.pai').append(
                "<tr>" +
                "<td  class= 'center-align white black-text'>" +
                times +
                " </td>" +
                "</tr>"
            );
        }
        else if (sele === 'e') {
            Nome_Tabela.html("Grupo E");
            var table = $('.pai').append(
                "<tr>" +
                "<td  class= 'center-align white black-text'>" +
                times +
                " </td>" +
                "</tr>"
            );
        }
        else if (sele === 'f') {
            Nome_Tabela.html("Grupo f");
            var table = $('.pai').append(
                "<tr>" +
                "<td  class= 'center-align white black-text'>" +
                times +
                " </td>" +
                "</tr>"
            );
        }
        else if (sele === 'g') {
            Nome_Tabela.html("Grupo f");
            var table = $('.pai').append(
                "<tr>" +
                "<td  class= 'center-align white black-text'>" +
                times +
                " </td>" +
                "</tr>"
            );
        }
        else if (sele === 'h') {
            Nome_Tabela.html("Grupo H");
            var table = $('.pai').append(
                "<tr>" +
                "<td  class= 'center-align white black-text'>" +
                times +
                " </td>" +
                "</tr>"
            );
        }
    });
}

//iniciando carouesl
$(document).ready(function () {
    $('.carousel').carousel();
    $(".button-collapse").sideNav({
        menuWidth: 300, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true, // Choose whether you can drag to open on touch screens,
        onOpen: function (el) { },
        onClose: function (el) { }, // A function to be called when sideNav is closed
    });
});



//Pegando o valor do input e colocando na tabela
$('input').keyup(function () {
    //pegando o atual input
    var gol = $(this).val();
    console.log(gol)

    //pegando referencia da tabela
    var vitoria_table = $('.vitoria');
    var jogada_table = $('.jogada');
    var ponto_table = $('.ponto');
     ponto_table.html(gol);

});
