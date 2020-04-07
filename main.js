$(document).ready(function(){

var ricomincia = $(".tablecontainer").html();

iniziaGioco();

function iniziaGioco() {



$(".tablecontainer").html(ricomincia);

$("button:nth-child(1)").click(function(){

  makeSquare("easy");
  $(".tablecontainer").html(ring);
  redClass(makeSquare("easy"),randomBox15(makeSquare("easy"),15))
  $(".square").addClass("startClass");
  $(".tablecontainer").append("<button class='ricomincia'>Ricomincia il gioco</button>")

  $(".square").click(function(){
    $(this).removeClass("startClass");
  });

  $(".ricomincia").click(function(){

    iniziaGioco();

  });

});
$("button:nth-child(2)").click(function(){

  makeSquare("medium");
  $(".tablecontainer").html(ring);
  redClass(makeSquare("medium"),randomBox15(makeSquare("medium"),15))
  $(".square").addClass("startClass");
  $(".tablecontainer").append("<button class='ricomincia'>Ricomincia il gioco</button>")

  $(".square").click(function(){
    $(this).removeClass("startClass");
  });

  $(".ricomincia").click(function(){
    //$(".tablecontainer").html(ricomincia);
    iniziaGioco();
  });

});
$("button:nth-child(3)").click(function(){

  makeSquare("hard");
  $(".tablecontainer").html(ring);
  redClass(makeSquare("hard"),randomBox15(makeSquare("hard"),15))
  $(".square").addClass("startClass");
  $(".tablecontainer").append("<button class='ricomincia'>Ricomincia il gioco</button>")

  $(".square").click(function(){
    $(this).removeClass("startClass");
  });

  $(".ricomincia").click(function(){
    //$(".tablecontainer").html(ricomincia);
    iniziaGioco();
  });

});

}



});
