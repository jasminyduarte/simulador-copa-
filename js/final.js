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
  var semis = sessionStorage.getItem('semis');
  var novo = JSON.parse(semis);
 
  
  //pegando todos os inputs e colocando os times
  novo.forEach(function (time, index) {
    $('.clas')[index].value = time;  ///pecorrendo array e pegando um elemento por vez e adicionando no input
  });
  
  //variaveis globais
  var vencedor1_nome;
  var segundo_nome;

  
  //funções para saber quem ganhou da tabela
  
  function vencedor1() {
    var gol1 = $('#1 .gol1').val();
    var gol2 = $('#2 .gol2').val();
    var nome_time1 = $('#time1').val();
    var nome_time2 = $('#time2').val();
  
    if (gol1 > gol2) {
      vencedor1_nome = nome_time1;
      segundo_nome = nome_time2;
      
    }
    else {
       vencedor1_nome = nome_time2;
       segundo_nome = nome_time1;
      
    }
  
    //alerta toast
    Materialize.toast('Ganhou --> ' + vencedor1_nome, 2500, 'rounded')
  }
  
  
  function salvar() {
   var campeao = [vencedor1_nome];
   var segundo = [segundo_nome];
     //salvando no localstorage vencedores da semi
    sessionStorage.setItem("campeao", JSON.stringify(campeao));
    //salvando o segundo lugar
    sessionStorage.setItem("segundo", JSON.stringify(segundo));
     
  }
  