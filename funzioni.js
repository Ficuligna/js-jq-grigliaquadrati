
var ring="";


//creazione quadrati
function makeSquare(difficult){
  var nSquare = 0;
  if (difficult == "easy") {
    nSquare = 36;
    for (var i = 0; i < nSquare; i++) {
      ring+= "<div class='square'></div>";
    };
    $(".square").css("height", "calc(100%/6)");
    $(".square").css("width", "calc(100%/6)");

  }else if (difficult == "medium") {
    nSquare = 64;
    for (var i = 0; i < nSquare; i++) {
      ring+= "<div class='square'></div>";
    };
  }else if (difficult == "hard") {
    nSquare = 144;
    for (var i = 0; i < nSquare; i++) {
      ring+= "<div class='square'></div>";
    };
    $(".square").css("height", "calc(100%/12)");
    $(".square").css("width", "calc(100%/12)");
  }
  // randomBox15(nSquare,15)

  return nSquare;
};
//creazione array index random per elementi classe "red"
function randomBox15(numSquare,x){  // passare nSquare e numero di elementi con classe "red" desiderati
  var redSquareIndex;
  var redSquareRandomBox = [];
  while (redSquareRandomBox.length <x) {
    redSquareIndex = Math.floor(Math.random()*numSquare);
    var condizionePusher = true;
    for (var i = 0; i < redSquareRandomBox.length; i++) {
      if (redSquareIndex == redSquareRandomBox[i]) {
        condizionePusher = false;
      }
    };
    if (condizionePusher) {
      redSquareRandomBox.push(redSquareIndex);
    }
  }
  return redSquareRandomBox;
};
// assegnazione random classe "red"
function redClass(elementi,confronto){  //passare valore di makeSquare , randomBox15
  for (var j = 0; j < elementi; j++) {
    for (var k = 0; k < confronto.length; k++) {
      if (j == confronto[k]) {
        $(".square").eq(j).addClass("red");
      };
    };
  };
}
