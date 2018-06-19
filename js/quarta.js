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
  var classificados = sessionStorage.getItem('oitavas');
  var novo = JSON.parse(classificados);
 
  
  //pegando todos os inputs e colocando os times
  novo.forEach(function (time, index) {
    $('.clas')[index].value = time;  ///pecorrendo array e pegando um elemento por vez e adicionando no input
  });
  
  //variaveis globais
  var vencedor1_nome;
  var vencedor2_nome;
  var vencedor3_nome;
  var vencedor4_nome;
 
  
  //funções para saber quem ganhou da tabela
  
  function vencedor1() {
    var gol1 = $('#1 .gol1').val();
    var gol2 = $('#2 .gol2').val();
    var nome_time1 = $('#time1').val();
    var nome_time2 = $('#time2').val();
  
    if (gol1 > gol2) {
      vencedor1_nome = nome_time1;
    }
    else {
       vencedor1_nome = nome_time2;
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
    }
    else {
       vencedor2_nome = nome_time4;
    }
  
    //alerta toast
    Materialize.toast('Ganhou --> ' + vencedor2_nome, 2500, 'rounded')
  }
  
  function vencedor3() {
    var gol5 = $('#5 .gol1').val();
    var gol6 = $('#6 .gol2').val();
    var nome_time5 = $('#time5').val();
    var nome_time6 = $('#time6').val();
  
    if (gol5 > gol6) {
       vencedor3_nome = nome_time5;
    }
    else {
       vencedor3_nome = nome_time6;
    }
  
    //alerta toast
    Materialize.toast('Ganhou --> ' + vencedor3_nome, 2500, 'rounded')
  }
  
  function vencedor4() {
    var gol7 = $('#7 .gol1').val();
    var gol8 = $('#8 .gol2').val();
    var nome_time7 = $('#time7').val();
    var nome_time8 = $('#time8').val();
  
    if (gol7 > gol8) {
       vencedor4_nome = nome_time7;
    }
    else {
      vencedor4_nome = nome_time8;
    }
  
    //alerta toast
    Materialize.toast('Ganhou --> ' + vencedor4_nome, 2500, 'rounded')
  }
  
  
  function salvar() {
   var VencedoresQuartas = [vencedor1_nome,vencedor2_nome,vencedor3_nome,vencedor4_nome];
    // //salvando no localstorage vencedores da oitava
    sessionStorage.setItem("quartas", JSON.stringify(VencedoresQuartas));
  }
  