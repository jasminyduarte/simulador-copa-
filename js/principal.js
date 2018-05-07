
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

$(document).ready(function() {
    $('select').material_select();
  });

  // contadores globais
  var jogadas = 0;
  var vitorias = 0;
  var empates = 0;
  var derotas = 0;
  var jogadas2 = 0;
  var vitorias2 = 0;
  var empates2 = 0;
  var derota2 = 0;
  var jogadas3 = 0;
  var vitorias3 = 0;
  var empates3 = 0;
  var derotas3 = 0;
  var jogadas4 = 0;
  var vitorias4 = 0;
  var empates4 = 0;
  var derota4 = 0;

  //variaveis globais
  var ponto_rus;
  var ponto_ara;

//*************** CALCULOS DA TABELA******* */
function tabela1() {
    // RUS X ARA
    if ($('.rus1').val() == "rus" && $('.ara1').val() == "ara") {
        //pegando o atual input do gols
        var gol_rus = $('#1 .gol1').val();
        var gol_ara = $("#2 .gol2").val();

        //pegando referencia da tabela time RUS
        var vitoria_table = $('.vitoria3');
        var jogada_table = $('.jogada3');
        var ponto_table = $('.ponto3');
        var empate_table = $('.empate3');
        var derota_table = $('.derota3');

        //pegando referencia da tabela time ARA
        var vitoria_table2 = $('.vitoria1');
        var jogada_table2 = $('.jogada1');
        var ponto_table2 = $('.ponto1');
        var empate_table2 = $('.empate1');
        var derota_table2 = $('.derota1');

        //Pontuação de Vitoria, Derota e empate
        const derota = 0;
        const vitoria = 3;
        const empate = 1;

        

        //******RUS GANHA*******
        if (gol_rus > gol_ara) {
            //rus
            this.ponto_rus = vitoria;
            this.jogadas++;
            this.vitorias++;
            vitoria_table.html(this.vitorias);
            ponto_table.html(this.ponto_rus);
            jogada_table.html(this.jogadas);

            //ara
            this.ponto_ara = derota;
            this.derota2++;
            this.jogadas2++;
            derota_table2.html(this.derota2);
            jogada_table2.html(this.jogadas2);
            ponto_table2.html(this.ponto_ara);
            vitoria_table2.html(0);
        }
        //++++++ ARA GANHA ***
        if (gol_rus < gol_ara) {
            //rus
            this.ponto_rus = derota;
            this.derotas++;
            this.jogadas++;
            vitoria_table.html(this.derota);
            ponto_table.html(this.ponto_rus);
            jogada_table.html(this.jogadas);
            derota_table.html(this.derotas);

            //ara
            this.ponto_ara = vitoria;
            this.jogadas2++;
            this.vitorias2++;
            derota_table2.html(0);
            jogada_table2.html(this.jogadas2);
            ponto_table2.html(this.ponto_ara);
            vitoria_table2.html(this.vitorias2);
        }
        //*****EMPATE *******/
        if (gol_rus == gol_ara) {
            //rus
            this.ponto_rus = empate;
            alert (this.jogadas)
            this.jogadas++;
            this.empates++;
            vitoria_table.html(0);
            ponto_table.html(this.ponto_rus);
            jogada_table.html(5);
            derota_table.html(0);
            empate_table.html(this.empates);
            alert(this.jogadas)

            //ara
            this.ponto_ara = empate;
            this.jogadas2++;
            this.empates2++;
            derota_table2.html(0);
            jogada_table2.html(this.jogadas2);
            ponto_table2.html(this.ponto_ara);
            vitoria_table2.html(0);
            empate_table2.html(this.empates2);
        }
    }




    
    //RUS X EGI 
    if ($('.rus1').val() == "rus" && $('.egi1').val() == "egi") {
        //pegando o atual input do gols
        var gol_rus2 = $('#5 .gol1').val();
        var gol_egi2 = $("#6 .gol2").val();
 
        //pegando referencia da tabela time EGI
        var vitoria_table3 = $('.vitoria2');
        var jogada_table3 = $('.jogada2');
        var ponto_table3 = $('.ponto2');
        var empate_table3 = $('.empate2');
        var derota_table3 = $('.derota2');
 
         //pegando referencia da tabela time RUS
         var vitoria_table = $('.vitoria3');
         var jogada_table = $('.jogada3');
         var ponto_table_rus = $('.ponto3');
         var empate_table = $('.empate3');
         var derota_table = $('.derota3');   

           //Pontuação de Vitoria, Derota e empate
        const derota = 0;
        const vitoria = 3;
        const empate = 1;

    
          //******RUS GANHA*******
        if (gol_rus2 > gol_egi2) {
            //rus
            this.ponto_rus = this.ponto_rus + vitoria;
            vitoria_table.html(this.vitorias);
            ponto_table_rus.html(this.ponto_rus);
            jogada_table.html(this.jogadas);

            //egi
            this.ponto_egi =  this.ponto_egi + derota;
            this.derota3++
            derota_table3.html(derota3);
            jogada_table3.html(this.jogadas3);
            ponto_table3.html(this.ponto_egi);
            vitoria_table3.html(this.vitorias3);
        
        }
        //++++++ EGI  GANHA ***
        if (gol_rus2 < gol_egi2) {
            //rus
            this.ponto_rus = derota;
            this.jogadas++;
            this.derotas++;
            vitoria_table.html(this.derota);
            ponto_table.html(this.ponto_rus);
            jogada_table.html(this.jogadas);
            derota_table.html(this.derotas);

            //ara
            ponto_ara = vitoria;
            derota_table2.html(derota2);
            jogada_table2.html(jogadas2 + 1);
            ponto_table2.html(ponto_ara);
            vitoria_table2.html(vitorias2 + 1);
        }
        //*****EMPATE *******/
        if (gol_rus == gol_ara) {
            //rus
            this.ponto_rus = empate;
            //this.jogadas++;
            //this.empates++;
            vitoria_table.html(0);
            ponto_table.html(this.ponto_rus);
            jogada_table.html(jogadas++);
            derota_table.html(0);
            empate_table.html(empates++);

            //ara
            this.ponto_ara = empate;
            derota_table2.html(0);
            jogada_table2.html(jogadas2++);
            ponto_table2.html(this.ponto_ara);
            vitoria_table2.html(0);
            empate_table2.html(empates2++);
        }
         
     }
}

function tabela2() {
     //EGI X URU
     if ($('.egi1').val() == "egi" && $('.uru1').val() == "uru") {
        //pegando o atual input do gols
        var gol_egi = $('#3 .gol1').val();
        var gol_uru = $("#4 .gol2").val();


        //pegando referencia da tabela time EGI
        var vitoria_table3 = $('.vitoria2');
        var jogada_table3 = $('.jogada2');
        var ponto_table3 = $('.ponto2');
        var empate_table3 = $('.empate2');
        var derota_table3 = $('.derota2');

        //pegando referencia da tabela time URU  
        var vitoria_table4 = $('.vitoria4');
        var jogada_table4 = $('.jogada4');
        var ponto_table4 = $('.ponto4');
        var empate_table4 = $('.empate4');
        var derota_table4 = $('.derota4');

        //Pontuação de Vitoria, Derota e empate
        const derota = 0;
        const vitoria = 3;
        const empate = 1;

        // contadores
        
        //******EGI GANHA*******
        if (gol_egi > gol_uru) {
            //egi
            this.jogadas3++
            var ponto_egi = vitoria;
            vitoria_table3.html(vitorias3 + 1);
            ponto_table3.html(ponto_egi);
            jogada_table3.html(jogadas3);

            //uru
            var ponto_uru = derota;
            derota_table4.html(derota4 + 1);
            jogada_table4.html(jogadas4 + 1);
            ponto_table4.html(ponto_uru);
            vitoria_table4.html(vitoria_table4);
        }
        //++++++ URU GANHA ***
        if (gol_egi < gol_uru) {
            //egi
            ponto_egi = derota;
            vitoria_table3.html(derotas3);
            ponto_table3.html(ponto_egi);
            jogada_table3.html(jogadas3 + 1);
            derota_table3.html(derotas3 +1);

            //uru
            ponto_uru = vitoria;
            derota_table4.html(derota4);
            jogada_table4.html(jogadas4 + 1);
            ponto_table4.html(ponto_uru);
            vitoria_table4.html(vitorias4 + 1);
        }
        //*****EMPATE *******/
        if (gol_egi == gol_uru) {
            //egi
            ponto_egi = empate;
            vitoria_table3.html(vitorias3);
            ponto_table3.html(ponto_egi);
            jogada_table3.html(jogadas3 + 1);
            derota_table3.html(derotas3);
            empate_table3.html(empates3 + 1);

            //uru
            ponto_uru = empate;
            derota_table4.html(derota4);
            jogada_table4.html(jogadas4 + 1);
            ponto_table4.html(ponto_uru);
            vitoria_table4.html(vitorias4);
            empate_table4.html(empates4 + 1);
        }

    }
}

//classificao
function classificao(ponto1,ponto2,ponto3,ponto4) {
    if (ponto1 > ponto2) {
        $('#rus').css({
            'color' : 'blue'
        });
    }
   
}






