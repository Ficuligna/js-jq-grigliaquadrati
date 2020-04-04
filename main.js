$(document).ready(function(){

var ring="";
//  creare la casella di input per definire il parametro di makeSquare
var sceltautente = prompt("scegli difficoltà");


makeSquare(sceltautente);
$(".tablecontainer").html(ring);
redClass(makeSquare(sceltautente),randomBox15(makeSquare(sceltautente)))














//creazione quadrati
function makeSquare(difficult){
  var nSquare = 0;
  if (difficult == "easy") {
    nSquare = 32;
    for (var i = 0; i < nSquare; i++) {
      ring+= "<div class='square'></div>";
    };
  }else if (difficult == "medium") {
    nSquare = 64;
    for (var i = 0; i < nSquare; i++) {
      ring+= "<div class='square'></div>";
    };
  }else if (difficult == "hard") {
    nSquare = 128;
    for (var i = 0; i < nSquare; i++) {
      ring+= "<div class='square'></div>";
    };
  };
  randomBox15(nSquare)
  return nSquare;
};
//creazione array index random per elementi classe "red"
function randomBox15(numSquare){  // passare nSquare
  var redSquareIndex;
  var redSquareRandomBox = [];
  var condizionePusher = true;
  while (redSquareRandomBox.length <15) {
    redSquareIndex = Math.floor(Math.random()*numSquare);

    for (var i = 0; i < redSquareRandomBox.length; i++) {
      if (redSquareIndex != redSquareRandomBox[i]) {
        condizionePusher = true;
      }else{
        condizionePusher = false
      }
    };
    if (condizionePusher) {
      redSquareRandomBox.push(redSquareIndex)
    }
  }
  return redSquareRandomBox;
};



function redClass(elementi,confronto){  //passare valore di makeSquare , randomBox15
  console.log(confronto);
  console.log(elementi);
  for (var j = 0; j < elementi; j++) {
    for (var k = 0; k < confronto.length; k++) {
      if (j == confronto[k]) {

        $(".square").eq(j).addClass("red");
      };
    };
  };
}

console.log($(".square").eq(0).addClass("red"));




});
