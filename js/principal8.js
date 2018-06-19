
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

$(document).ready(function () {
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
var ponto_uru;
var ponto_egi;



//*************** CALCULOS DA TABELA******* */
function tabela1() {

    //RUS X ARA
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

       
        //alerta toast
        Materialize.toast('Russia Ganhou', 2500, 'rounded')
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

         //alerta toast
         Materialize.toast('Arabia Ganhou', 2500, 'rounded')
    }
    //*****EMPATE *******/
    if (gol_rus == gol_ara) {
        //rus
        this.ponto_rus = empate;
        this.jogadas++;
        this.empates++;
        vitoria_table.html(0);
        ponto_table.html(this.ponto_rus);
        jogada_table.html(this.jogadas);
        derota_table.html(0);
        empate_table.html(this.empates);


        //ara
        this.ponto_ara = empate;
        this.jogadas2++;
        this.empates2++;
        derota_table2.html(0);
        jogada_table2.html(this.jogadas2);
        ponto_table2.html(this.ponto_ara);
        vitoria_table2.html(0);
        empate_table2.html(this.empates2);

        
         //alerta toast
         Materialize.toast('Empate !', 2500, 'rounded');
    }



}

function tabela2() {
    //EGI X URU
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
        this.ponto_egi = vitoria;
        this.vitorias3++;
        vitoria_table3.html(this.vitorias3);
        ponto_table3.html(this.ponto_egi);
        jogada_table3.html(this.jogadas3);

        //uru
        this.jogadas4++;
        this.ponto_uru = derota;
        this.derota4++;
        derota_table4.html(this.derota4);
        jogada_table4.html(this.jogadas4);
        ponto_table4.html(this.ponto_uru);
        vitoria_table4.html(this.vitorias4);

       
         //alerta toast
         Materialize.toast('Egito Ganhou', 2500, 'rounded')
    }
    //++++++ URU GANHA ***
    if (gol_egi < gol_uru) {
        //egi
        this.ponto_egi = derota;
        this.derotas3++;
        this.jogadas3++;
        vitoria_table3.html(this.derotas3);
        ponto_table3.html(this.ponto_egi);
        jogada_table3.html(this.jogadas3);
        derota_table3.htmt(this.derotas3);

        //uru
        this.ponto_uru = vitoria;
        this.jogadas4++;
        this.vitorias4++;
        derota_table4.html(this.derota4);
        jogada_table4.html(this.jogadas4);
        ponto_table4.html(this.ponto_uru);
        vitoria_table4.html(this.vitorias4);

      
         //alerta toast
         Materialize.toast('Uruguai Ganhou', 2500, 'rounded')
    }
    //*****EMPATE *******/
    if (gol_egi == gol_uru) {
        //egi
        this.ponto_egi = empate;
        this.empates3++;
        this.jogadas3++;
        vitoria_table3.html(this.vitorias3);
        ponto_table3.html(this.ponto_egi);
        jogada_table3.html(this.jogadas3);
        derota_table3.html(this.derotas3);
        empate_table3.html(this.empates3);

        //uru
        this.ponto_uru = empate;
        this.jogadas4++;
        this.empates4++;
        derota_table4.html(this.derota4);
        jogada_table4.html(this.jogadas4)
        ponto_table4.html(this.ponto_uru);
        vitoria_table4.html(this.vitorias4);
        empate_table4.html(this.empates4);

       
         //alerta toast
         Materialize.toast('Empate', 2500, 'rounded')
    }
}

function tabela3() {
    //RUS X EGI

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
    var ponto_table = $('.ponto3');
    var empate_table = $('.empate3');
    var derota_table = $('.derota3');

    //Pontuação de Vitoria, Derota e empate
    const derota = 0;
    const vitoria = 3;
    const empate = 1;


    //******RUS GANHA*******
    if (gol_rus2 > gol_egi2) {
        //rus
        this.jogadas++;
        this.vitorias++;
        this.ponto_rus = this.ponto_rus + vitoria;
        vitoria_table.html(this.vitorias);
        ponto_table.html(this.ponto_rus);
        jogada_table.html(this.jogadas);


        //egi
        this.derotas3++;
        this.jogadas3++;
        derota_table3.html(this.derotas3);
        jogada_table3.html(this.jogadas3);
        ponto_table3.html(this.ponto_egi + 0);
        vitoria_table3.html(this.vitorias3);

        

         //alerta toast
         Materialize.toast('Russia Ganhou', 2500, 'rounded')


    }
    //++++++ EGI  GANHA ***
    if (gol_rus2 < gol_egi2) {
        //rus
        this.jogadas++;
        this.derotas++;
        this.ponto_rus = this.ponto_rus + derota;
        vitoria_table.html(this.derota);
        ponto_table.html(this.ponto_rus);
        jogada_table.html(this.jogadas);
        derota_table.html(this.derotas);

        //egi
        this.jogadas3++;
        this.vitorias3++;
        this.ponto_egi = this.ponto_egi + vitoria;
        derota_table3.html(this.derotas3);
        jogada_table3.html(this.jogadas3);
        ponto_table3.html(this.ponto_egi);
        vitoria_table3.html(this.vitorias3);

        
         //alerta toast
         Materialize.toast('Egito Ganhou', 2500, 'rounded')
    }
    //*****EMPATE *******/
    if (gol_rus2 == gol_egi2) {
        //rus
        this.ponto_rus = this.ponto_rus + empate;
        this.jogadas++;
        this.empates++;
        vitoria_table.html(this.vitorias);
        ponto_table.html(this.ponto_rus);
        jogada_table.html(this.jogadas);
        derota_table.html(this.derotas);
        empate_table.html(this.empates);

        //egi
        this.ponto_ara = this.ponto_ara + empate;
        this.jogadas3++;
        this.empates3++;
        derota_table3.html(this.derotas3);
        jogada_table3.html(this.jogadas3);
        ponto_table3.html(this.ponto_egi);
        vitoria_table3.html(this.vitorias3);
        empate_table3.html(this.empates3);

        
         //alerta toast
         Materialize.toast('Empate', 2500, 'rounded')
    }

}

function tabela4() {

    //URU X ARA 

    //pegando o atual input do gols
    var gol_uru2 = $('#7 .gol1').val();
    var gol_ara2 = $("#8 .gol2").val();


    //pegando referencia da tabela time ARA
    var vitoria_table2 = $('.vitoria1');
    var jogada_table2 = $('.jogada1');
    var ponto_table2 = $('.ponto1');
    var empate_table2 = $('.empate1');
    var derota_table2 = $('.derota1');

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


    //******URU GANHA*******
    if (gol_uru2 > gol_ara2) {
        //uru
        this.jogadas4++;
        this.vitorias4++;
        this.ponto_uru = this.ponto_uru + vitoria;
        vitoria_table4.html(this.vitorias4);
        ponto_table4.html(this.ponto_uru);
        jogada_table4.html(this.jogadas4);


        //ara
        this.derota2++;
        this.jogadas2++;
        this.ponto_ara = this.ponto_ara + derota;
       
        derota_table2.html(this.derota2);
        jogada_table2.html(this.jogadas2);
        ponto_table2.html(this.ponto_ara);
        vitoria_table2.html(this.vitorias2);verifica(this.ponto_rus, this.ponto_ara, this.ponto_uru, this.ponto_egi);
         //alerta toast
         Materialize.toast('Uruguai Ganhou', 2500, 'rounded')

    }
    //++++++ ARA GANHA ***
    if (gol_uru2 < gol_ara2) {
        //uru
        this.jogadas4++;
        this.derotas4++;
        this.ponto_uru = this.ponto_uru + derota;
        vitoria_table4.html(this.derotas4);
        ponto_table4.html(this.ponto_uru);
        jogada_table4.html(this.jogadas4);
        derota_table4.html(this.derotas4);

        //ara
        this.jogadas2++;
        this.vitorias2++;
        this.ponto_ara = this.ponto_ara + vitoria;
        derota_table2.html(this.derotas2);
        jogada_table2.html(this.jogadas2);
        ponto_table2.html(this.ponto_ara);
        vitoria_table2.html(this.vitorias2);

        
         //alerta toast
         Materialize.toast('Arabia Ganhou', 2500, 'rounded')
    }
    //*****EMPATE *******/
    if (gol_uru2 == gol_ara2) {
        //uru
        this.ponto_uru = this.ponto_uru + empate;
        this.jogadas4++;
        this.empates4++;
        vitoria_table4.html(this.vitorias4);
        ponto_table4.html(this.ponto_uru);
        jogada_table4.html(this.jogadas4);
        derota_table4.html(this.derotas4);
        empate_table4.html(this.empates4);

        //ara
        this.ponto_ara = this.ponto_ara + empate;
        this.jogadas2++;
        this.empates2++;
        derota_table2.html(this.derotas2);
        jogada_table2.html(this.jogadas2);
        ponto_table2.html(this.ponto_ara);
        vitoria_table2.html(this.vitorias2);
        empate_table2.html(this.empates2);

        
         //alerta toast
         Materialize.toast('Empate', 2500, 'rounded')
    }

}

function tabela5() {
    //URU X RUS

    //pegando o atual input do gols
    var gol_uru2 = $('#9 .gol1').val();
    var gol_rus2 = $("#10 .gol2").val();


    //pegando referencia da tabela time RUS
    var vitoria_table = $('.vitoria3');
    var jogada_table = $('.jogada3');
    var ponto_table_rus = $('.ponto3');
    var empate_table = $('.empate3');
    var derota_table = $('.derota3');

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

    //******URU GANHA*******
    if (gol_uru2 > gol_rus2) {
        //uru
        this.jogadas4++;
        this.vitorias4++;
        this.ponto_uru = this.ponto_uru + vitoria;
        vitoria_table4.html(this.vitorias4);
        ponto_table4.html(this.ponto_uru);
        jogada_table4.html(this.jogadas4);


        //rus
        this.jogadas++;
        this.derotas++;
        this.ponto_rus = this.ponto_rus + derota;
        vitoria_table.html(this.derota);
        ponto_table_rus.html(this.ponto_rus);
        jogada_table.html(this.jogadas);
        derota_table.html(this.derotas);
    
         //alerta toast
         Materialize.toast('Uruguai Ganhou', 2500, 'rounded')

    }
    //++++++  RUS GANHA ***
    if (gol_uru2 < gol_rus2) {
        //uru
        this.jogadas4++;
        this.derotas14++;
        this.ponto_uru = this.ponto_uru + derota;
        vitoria_table4.html(this.derotas4);
        ponto_table4.html(this.ponto_uru);
        jogada_table4.html(this.jogadas4);
        derota_table4.html(this.derotas4);

        //rus
        this.jogadas++;
        this.vitorias++;
        this.ponto_rus = this.ponto_rus + vitoria;
        vitoria_table.html(this.vitorias);
        ponto_table_rus.html(this.ponto_rus);
        jogada_table.html(this.jogadas);

        

         //alerta toast
         Materialize.toast('Russia Ganhou', 2500, 'rounded')
    }
    //*****EMPATE *******/
    if (gol_uru2 == gol_rus2) {
        //uru
        this.ponto_uru = this.ponto_uru + empate;
        this.jogadas4++;
        this.empates4++;
        vitoria_table4.html(this.vitorias4);
        ponto_table4.html(this.ponto_uru);
        jogada_table4.html(this.jogadas4);
        derota_table4.html(this.derotas4);
        empate_table4.html(this.empates4);

        //rus
        this.ponto_rus = this.ponto_rus + empate;
        this.jogadas++;
        this.empates++;
        vitoria_table.html(this.vitorias);
        ponto_table_rus.html(this.ponto_rus);
        jogada_table.html(this.jogadas);
        derota_table.html(this.derotas);
        empate_table.html(this.empates);

      

         //alerta toast
         Materialize.toast('Empate Ganhou', 2500, 'rounded')
    }

}

function tabela6() {
    //ARA X EGI
    //pegando o atual input do gols
    var gol_ara2 = $('#11 .gol1').val();
    var gol_egi2 = $("#12 .gol2").val();

  

    //pegando referencia da tabela time EGI
    var vitoria_table3 = $('.vitoria2');
    var jogada_table3 = $('.jogada2');
    var ponto_table3 = $('.ponto2');
    var empate_table3 = $('.empate2');
    var derota_table3 = $('.derota2');

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

    //******EGI GANHA*******
    if (gol_egi2 > gol_ara2) {
        //egi
        this.jogadas3++;
        this.ponto_egi = this.ponto_egi + vitoria;
      
        this.vitorias3++;
        vitoria_table3.html(this.vitorias3);
        ponto_table3.html(this.ponto_egi);
        jogada_table3.html(this.jogadas3);
       

        //ara
        this.derotas2++;
        this.jogadas2++;
        this.ponto_ara = this.ponto_ara + derota;
        derota_table2.html(this.derotas2);
        jogada_table2.html(this.jogadas2);
        ponto_table2.html(this.ponto_ara);
        vitoria_table2.html(this.vitorias2);

      
        Materialize.toast('Egito Ganhou', 4000)
    }
    //++++++ ARA GANHA ***
    if (gol_egi2 < gol_ara2) {
        //egi
        this.ponto_egi = derota;
        this.derotas3++;
        this.jogadas3++;
        vitoria_table3.html(this.derotas3);
        ponto_table3.html(this.ponto_egi);
        jogada_table3.html(this.jogadas3);
        derota_table3.htmt(this.derotas3);

        //ara
        this.jogadas2++;
        this.vitorias2++;
        this.ponto_ara = this.ponto_ara + vitoria;
        derota_table2.html(this.derotas2);
        jogada_table2.html(this.jogadas2);
        ponto_table2.html(this.ponto_ara);
        vitoria_table2.html(this.vitorias2);
      
         //alerta toast
         Materialize.toast('Arabia Ganhou', 2500, 'rounded')
    }
    //*****EMPATE *******/
    if (gol_egi2 == gol_ara2) {
        //egi
        this.ponto_egi = empate;
        this.empates3++;
        this.jogadas3++;
        vitoria_table3.html(this.vitorias3);
        ponto_table3.html(this.ponto_egi);
        jogada_table3.html(this.jogadas3);
        derota_table3.html(this.derotas3);
        empate_table3.html(this.empates3);

        //ara
        this.ponto_ara = this.ponto_ara + empate;
        this.jogadas2++;
        this.empates2++;
        derota_table2.html(this.derotas2);
        jogada_table2.html(this.jogadas2);
        ponto_table2.html(this.ponto_ara);
        vitoria_table2.html(this.vitorias2);
        empate_table2.html(this.empates2);

         //alerta toast
         Materialize.toast('Empate', 2500, 'rounded')
    }
}

function vencedores() {
    var times = [{nome:"Rusia", pontos:this.ponto_rus},{nome:"Arabia", pontos:this.ponto_ara},{nome:"Uruguai", pontos:this.ponto_uru},{nome:"egito",pontos:this.ponto_egi}];  
    var vencedor1;
    var vencedor2;

    // me retona o valor maximo encontrado na array
    vencedor1 = times.reduce(function(a, b) {
        if(a.pontos > b.pontos){
            return a;
        }
        else return b;
          });
    
    //remove o primeiro valor maximo 
    var index = times.indexOf(vencedor1);
    times.splice(index, 1);
    
    // me retona o segundo valor maximo encontrado na array
    vencedor2 = times.reduce(function(a, b) {
        if(a.pontos > b.pontos){
            return a;
        }
        else return b;
    });

    //array dos vencedores do grupo
    var vencedores =[vencedor1,vencedor2];

   //salvando no localstorage
   sessionStorage.setItem("vencedores", JSON.stringify(vencedores));

   //alerta toast
   Materialize.toast('Classificados -->' + vencedor1.nome + '/' + vencedor2.nome, 2500, 'rounded')
  }







