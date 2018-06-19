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
//var classificados =  sessionStorage.getItem('vencedores');
// array rerseva
var classificados = [
  { nome: "Rúsia", pontos: 3 },
  { nome: "Uruguai", pontos: 4 },
  { nome: "Irã", pontos: 4 },
  { nome: "Espanha", pontos: 3 },
  { nome: "França", pontos: 4 },
  { nome: "Dinamarca", pontos: 3 },
  { nome: "Cróacia", pontos: 4 },
  { nome: "Argentina", pontos: 3 },
  { nome: "Sérvia", pontos: 4 },
  { nome: "Brasil", pontos: 3 },
  { nome: "México", pontos: 4 },
  { nome: "Suécia", pontos: 3 },
  { nome: "Bélgica", pontos: 4 },
  { nome: "Inglaterra", pontos: 3 },
  { nome: "Japão", pontos: 4 },
  { nome: "Senegal", pontos: 3 },
]
//var oitavas = JSON.parse(classificados);

//pegando todos os inputs e colocando os times
classificados.forEach(function (time, index) {
  $('.clas')[index].value = time.nome;  ///pecorrendo array e pegando um elemento por vez e adicionando no input
});

//variaveis globais
var vencedor1_nome;
var vencedor2_nome;
var vencedor3_nome;
var vencedor4_nome;
var vencedor5_nome;
var vencedor6_nome;
var vencedor7_nome;
var vencedor8_nome;

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

function vencedor5() {
  var gol9 = $('#9 .gol1').val();
  var gol10 = $('#10 .gol2').val();
  var nome_time9 = $('#time9').val();
  var nome_time10 = $('#time10').val();

  if (gol9 > gol10) {
    vencedor5_nome = nome_time9;
  }
  else {
    vencedor5_nome = nome_time10;
  }

  //alerta toast
  Materialize.toast('Ganhou -->' + vencedor5_nome, 2500, 'rounded')
}

function vencedor6() {
  var gol11 = $('#11 .gol1').val();
  var gol12 = $('#12 .gol2').val();
  var nome_time11 = $('#time11').val();
  var nome_time12 = $('#time12').val();

  if (gol11 > gol12) {
    vencedor6_nome = nome_time11;
  }
  else {
    vencdor6_nome = nome_time12;
  }

  //alerta toast
  Materialize.toast('Ganhou -->' + vencedor6_nome, 2500, 'rounded')
}

function vencedor7() {
  var gol13 = $('#13 .gol1').val();
  var gol14 = $('#14 .gol2').val();
  var nome_time13 = $('#time13').val();
  var nome_time14 = $('#time14').val();

  if (gol13 > gol14) {
    vencedor7_nome = nome_time13;
  }
  else {
    vencedor7_nome = nome_time14;
  }

  //alerta toast
  Materialize.toast('Ganhou -->' + vencedor7_nome, 2500, 'rounded')
}

function vencedor8() {
  var gol15 = $('#15 .gol1').val();
  var gol16 = $('#16 .gol2').val();
  var nome_time15 = $('#time15').val();
  var nome_time16 = $('#time16').val();

  if (gol15 > gol16) {
    vencedor8_nome = nome_time15;
  }
  else {
    vencedor8_nome = nome_time16;
  }

  //alerta toast
  Materialize.toast('Ganhou --> ' + vencedor8_nome, 2500, 'rounded')
}

function salvar() {
  var VencedoresOitava = [vencedor1_nome, vencedor2_nome, vencedor3_nome, vencedor4_nome, vencedor5_nome, vencedor6_nome, vencedor7_nome, vencedor8_nome];
  // //salvando no localstorage vencedores da oitava
  sessionStorage.setItem("oitavas", JSON.stringify(VencedoresOitava));
}
