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
  
  //pegando o campeão
  var campe = sessionStorage.getItem('campeao');
  var campeao = JSON.parse(campe);
 

//pegando segundo lugar
 var segu = sessionStorage.getItem('segundo');
 var segundo = JSON.parse(segu);

 //pegando o terceiro lugar
 var terce = sessionStorage.getItem('terceiroLugar');
 var terceiro = JSON.parse(terce);

//adicionando os campeões na tela
 $('.campe').append(campeao).text();
 $('.segu').append(segundo).text();
 $('.terce').append(terceiro).text();





 