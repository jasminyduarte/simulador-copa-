
//Teste ajax
function apaga() {
    //apaga o conteúdo
    $('.principal').empty();
    $('.sls').empty();

}
//select
$(document).ready(function() {
    $('select').material_select();

});

//pegando dados da tabela
function Selecionado(){
    $("select option:selected").each(function() {
        var sele = $(this).val();
        console.log(sele);
        var Nome_Tabela =  $('#nometabela');
        var Nome_Time_input = $('#nometime').val();
        var Nome_time = $('.nometimetable');
        var Nome_time_B = [];
        var Nome_time_C = [];
        var Nome_time_D = [];


    //     Verificando Qual Grupo Foi selecionando
        if(sele === 'a'){
            Nome_Tabela.html("Grupo A");
            Nome_time.html(Nome_Time_input);
        }
        else if (sele === 'b'){
            Nome_Tabela.html("Grupo B");
            for (let index = 0; index < Nome_time_B.length; index++) {
                nometime.html(Nome_time_B[index]);
            }
        }
        else if (sele === 'c'){
            Nome_Tabela.html("Grupo C");
            Nome_time.html(Nome_Time_input);
        }
        else if (sele === 'd'){
            Nome_Tabela.html("Grupo D");
            Nome_time.html(Nome_Time_input);
        }
    });
}

//iniciando carouesl
$(document).ready(function(){
    $('.carousel').carousel();
    $(".button-collapse").sideNav({
        menuWidth: 300, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true, // Choose whether you can drag to open on touch screens,
        onOpen: function(el) { },
      onClose: function(el) {}, // A function to be called when sideNav is closed
    });
});



//Pegando o valor do input e colocando na tabela
$('input').keyup(function(){
    //pegando o atual input
    var gol = $(this).val();
   console.log(gol)

    //pegando referencia da tabela
    var vitoria_table = $('.vitoria'); 
    var jogada_table = $('.jogada');
    var ponto_table = $('.ponto');

});
