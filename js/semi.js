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
  
  //pegando os dados do storage SS do navegador
  var quartas = sessionStorage.getItem('quartas');
  var novo = JSON.parse(quartas);
 
  
  //pegando todos os inputs e colocando os times
  novo.forEach(function (time, index) {
    $('.clas')[index].value = time;  ///pecorrendo array e pegando um elemento por vez e adicionando no input
  });
  
  //variaveis globais
  var vencedor1_nome;
  var vencedor2_nome;
  var terceiro1_nome;
  var terceiro2_nome;
  
  //funções para saber quem ganhou da tabela
  
  function vencedor1() {
    var gol1 = $('#1 .gol1').val();
    var gol2 = $('#2 .gol2').val();
    var nome_time1 = $('#time1').val();
    var nome_time2 = $('#time2').val();
  
    if (gol1 > gol2) {
      vencedor1_nome = nome_time1;
      terceiro1_nome = nome_time2;
    }
    else {
       vencedor1_nome = nome_time2;
       terceiro1_nome = nome_time1;
    }
  
    //alerta toast
    Materialize.toast('Ganhou --> ' + vencedor1_nome, 2500, 'rounded')
  }
  
  function vencedor2() {
    var gol3 = $('#3 .gol1').val();
    var gol4 = $('#4 .gol2').val();
    var nome_time3 = $('#time3').val();
    var nome_time4 = $('#time4').val();
  
    if (gol3 > gol4) {
      vencedor2_nome = nome_time3;
      terceiro2_nome = nome_time4;
    }
    else {
       vencedor2_nome = nome_time4;
       terceiro2_nome = nome_time3;
    }
  
    //alerta toast
    Materialize.toast('Ganhou --> ' + vencedor2_nome, 2500, 'rounded')
  }
  
  
  function salvar() {
   var VencedoresSemi = [vencedor1_nome,vencedor2_nome];
   var TerceirosSemi = [terceiro1_nome, terceiro2_nome];
     //salvando no localstorage vencedores da semi
    sessionStorage.setItem("semis", JSON.stringify(VencedoresSemi));
     //salvando no localstorage os terceiros da semi
     sessionStorage.setItem("semisTerceiro", JSON.stringify(TerceirosSemi));
  }
  