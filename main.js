var myBoard = [];

//board creation
for (var x = 0; x < 20; x++) {
  myBoard[x] = [];

  for (var y = 0; y < 20; y++) {
    myBoard[x][y] = "🔲";
  }
}



function displayBoard() {
  document.getElementById('output_holder').innerHTML = '';
  var outputString = '';

  for (var y = 0; y < myBoard.length; y++) {
    for (var x = 0; x < myBoard[y].length; x++) {
      outputString = outputString + myBoard[x][y];
    }
    outputString = outputString + "</br>";
  }
  document.getElementById('output_holder').innerHTML = outputString;
}

//score and lives
score = 0;
lives = 3;
//weird title screen thing
work = 1;
//respawn of characters and elements
var respawn = 1;
//characters and elements
var pulseSpeed = 500;
spiderX = 3;
spiderY = 3;
snakeX = 11;
snakeY = 3;
shadowX = 19;
shadowY = 19;
sharkX = 8;
sharkY = 13;
cherryX = 5;
cherryY = 11;
myCharacterX = 7;
myCharacterY = 7;
crocX = 3;
crocY = 9;
croc = "🐊";
moon = "🌚";
energy = "⚡";
player1 = "👾";
frog = "🐸";
shark = "🦈";
myBoard[crocX][crocY] = croc;
myBoard[myCharacterX][myCharacterY] = player1;
myBoard[spiderX][spiderY] = frog;
myBoard[sharkX][sharkY] = shark;
myBoard[cherryX][cherryY] = energy;
myBoard[shadowX][shadowY] = moon;
//croc variables (the ones with cherry affect croc on cherry pickup)

var dontKnowSetTimeoutLol = 0;
var moveAmtTL = 4;
var moveAmtTR = 4;
var moveAmtBR = 4;
var moveAmtBL = 4;
var cherryTLEY = cherryY - 2;
var cherryTREX = cherryX + 2;
var cherryBREY = cherryY + 2;
var cherryBLEX = cherryX - 2;
var cherryTLXc = cherryX - 2;
var cherryTLXm2 = cherryX - 1;
var cherryTLTRX = cherryX;
var cherryTRXm1 = cherryX + 1;
var cherryTRYc = cherryY - 2;
var cherryTRYm2 = cherryY - 1;
var cherryTRBRY = cherryY;
var cherryBRYm1 = cherryY + 1;
var cherryBRXc = cherryX + 2;
var cherryBRXm2 = cherryX + 1;
var cherryBRBLX = cherryX;
var cherryBLXm1 = cherryX - 1;
var cherryBLYc = cherryY + 2;
var cherryBLYm2 = cherryY + 1;
var cherryBLTLY = cherryY;
var cherryTLYm1 = cherryY - 1;
//shark variables
var disX = Math.abs(myCharacterX - sharkX);
var disY = Math.abs(myCharacterY - sharkY);



//mines(OPTIMIZING because it can and should be)
class Mine {
  constructor(xPos, yPos, damage, img) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.damage = damage;
    this.img = img;
  }
}

//ded function lol
function ded() {
  document.body.style.background = "rgb(225,35,0)";
  document.getElementById("lives").style.color = "black";
  document.getElementById("game_over").style.display = "block";
  document.getElementById("ur_dead").style.display = "block";
  document.getElementById("everything").style.backgroundImage = "url(https://i.imgur.com/knQZJCq.jpg)";
  document.getElementById("everything").style.backgroundSize = "100% 100%";
  document.getElementById("everything").style.backgroundRepeat = "no-repeat";
  document.getElementById("everything").style.backgroundSize = "100% 100%";
  document.getElementById("everything").style.backgroundAttachment = "fixed";
  document.getElementById("output_holder").style.opacity = "0";
  document.getElementById("output_holder").style.fontSize = "90%";
  
}


//element removal
function removeElement() {
  var element1 = document.getElementById("title_screen");
  var element2 = document.getElementById("info");
  var element3 = document.getElementById("infobutton");
  var element4 = document.getElementById("patchNoteButton");
  var element5 = document.getElementById("patch_notes");
  element1.parentNode.removeChild(element1);
  element2.parentNode.removeChild(element2);
  element3.parentNode.removeChild(element3);
  element4.parentNode.removeChild(element4);
  element5.parentNode.removeChild(element5);
}

//actions on key press
document.addEventListener('keydown', function(event) {

  event.preventDefault();
  if (event.keycode == 13) {
    displayBoard();
  }
  if(event.keyCode == 186){
    lives = 99999;
    document.getElementById("lives").style.color = "gold";
    document.getElementById("godMode").style.display = "block";
    player1 = "🌞";
  }
  if (work == 1) {
    work = 0;
    removeElement();
  }
  document.getElementById('output_holder').style.border = "thick double aquamarine";

 


  //shark 
  try{
  if (lives < 3) {

    if (sharkY == 0) {
      myBoard[sharkX][sharkY] = "🔲";
      sharkY++;
      myBoard[sharkX][sharkY] = shark;

    } else if (sharkY == 19) {
      myBoard[sharkX][sharkY] = "🔲";
      sharkY--;
      myBoard[sharkX][sharkY] = shark;
    } else if (sharkX == 0) {
      myBoard[sharkX][sharkY] = "🔲";
      sharkX++;
      myBoard[sharkX][sharkY] = shark;
    } else if (sharkX == 19) {
      myBoard[sharkX][sharkY] = "🔲";
      sharkX--;
      myBoard[sharkX][sharkY] = shark;
    } // x movement 
    else {
      if (sharkX < myCharacterX) {
        myBoard[sharkX][sharkY] = "🔲";
        sharkX++;
        myBoard[sharkX][sharkY] = shark;
      } else if (sharkX == myCharacterX) {
        myBoard[sharkX][sharkY] = "🔲";
        sharkY--;
        myBoard[sharkX][sharkY] = shark;
      } else {
        myBoard[sharkX][sharkY] = "🔲";
        sharkX--;
        sharkX--;
        myBoard[sharkX][sharkY] = shark;
      }

    }

  }
  }
 
  catch(error){
  		softlock();
  }
 function softlock(){
  document.body.style.backgroundImage = "url(https://ak0.picdn.net/shutterstock/videos/8502370/thumb/10.jpg)";
  document.getElementById("output_holder").style.opacity = "0";
	document.getElementById("softlocked").style.display = "block";
  document.getElementById("beCareful").style.display = "block";
  document.getElementById("lives").style.display = "none";
  lives = 0;
  }
  //reset
  if(event.keyCode == 82){
  window.location.reload(true);
  }
  
  //character and frog movement
  
  //god mode
  /*
  if(event.keyCode == the semicolon){
    lives = 9999;

  }
  */ 


  if(lives > 0){

  if (event.keyCode == 38 && myCharacterY > 0) {

    if (spiderY == 19) {
      myBoard[spiderX][spiderY] = frog;
      if (myCharacterY == 0) {
        myBoard[myCharacterX][myCharacterY] = player1;
      } else {
        myBoard[myCharacterX][myCharacterY] = "🔲";
        myCharacterY--;
        myBoard[myCharacterX][myCharacterY] = player1;
      }
    } else if (myCharacterY == 0) {
      myBoard[myCharacterX][myCharacterY] = player1;
    }
    if (spiderY != 19 && myCharacterY != 0) {
      myBoard[spiderX][spiderY] = "🔲";
      spiderY++;
      myBoard[spiderX][spiderY] = frog;
      myBoard[myCharacterX][myCharacterY] = "🔲";
      myCharacterY--;
      myBoard[myCharacterX][myCharacterY] = player1;
      myBoard[spiderX][spiderY] = frog;

    }

  }
  if (event.keyCode == 40 && myCharacterY < 19) {

    if (spiderY == 0) {
      myBoard[spiderX][spiderY] = frog;
      if (myCharacterY == 19) {
        myBoard[myCharacterX][myCharacterY] = player1;
      } else {
        myBoard[myCharacterX][myCharacterY] = "🔲";
        myCharacterY++;
        myBoard[myCharacterX][myCharacterY] = player1;
      }
    } else if (myCharacterY == 19) {
      myBoard[myCharacterX][myCharacterY] = player1;
    }
    if (spiderY != 0 && myCharacterY != 19) {
      myBoard[spiderX][spiderY] = "🔲";
      spiderY--;
      myBoard[spiderX][spiderY] = frog;
      myBoard[myCharacterX][myCharacterY] = "🔲";
      myCharacterY++;
      myBoard[myCharacterX][myCharacterY] = player1;
      myBoard[spiderX][spiderY] = frog;

    }

  }
  if (event.keyCode == 39 && myCharacterX < 19) {

    if (spiderX == 0) {
      myBoard[spiderX][spiderY] = frog;
      if (myCharacterX == 19) {
        myBoard[myCharacterX][myCharacterY] = player1;
      } else {
        myBoard[myCharacterX][myCharacterY] = "🔲";
        myCharacterX++;
        myBoard[myCharacterX][myCharacterY] = player1;
      }
    } else if (myCharacterX == 19) {
      myBoard[myCharacterX][myCharacterY] = player1;
    }
    if (spiderX != 0 && myCharacterX != 19) {
      myBoard[spiderX][spiderY] = "🔲";
      spiderX--;
      myBoard[spiderX][spiderY] = frog;
      myBoard[myCharacterX][myCharacterY] = "🔲";
      myCharacterX++;
      myBoard[myCharacterX][myCharacterY] = player1;
      myBoard[spiderX][spiderY] = frog;

    }

  }
  if (event.keyCode == 37 && myCharacterX > 0) {

    if (spiderX == 19) {
      myBoard[spiderX][spiderY] = frog;
      if (myCharacterX == 0) {
        myBoard[myCharacterX][myCharacterY] = player1;
      } else {
        myBoard[myCharacterX][myCharacterY] = "🔲";
        myCharacterX--;
        myBoard[myCharacterX][myCharacterY] = player1;
      }
    } else if (myCharacterX == 0) {
      myBoard[myCharacterX][myCharacterY] = player1;
    }
    if (spiderX != 19 && myCharacterX != 0) {
      myBoard[spiderX][spiderY] = "🔲";
      spiderX++;
      myBoard[spiderX][spiderY] = frog;
      myBoard[myCharacterX][myCharacterY] = "🔲";
      myCharacterX--;
      myBoard[myCharacterX][myCharacterY] = player1;

    }

  }

  //croc teleport and cherry pickup
  if (myBoard[myCharacterX][myCharacterY] == myBoard[cherryX][cherryY]) {
    score += 250;
    cherryX = Math.floor((Math.random() * 20));
    cherryY = Math.floor((Math.random() * 20));
    if (myBoard[cherryX][cherryY] == myBoard[shadowX][shadowY]) {
      cherryX = Math.floor((Math.random() * 20));
      cherryY = Math.floor((Math.random() * 20));
    }
    if (myBoard[cherryX][cherryY] == myBoard[snakeX][snakeY]) {
      cherryX = Math.floor((Math.random() * 20));
      cherryY = Math.floor((Math.random() * 20));
    }
    for(var objectOfMine of minePositions){
    if (myBoard[cherryX][cherryY] == myBoard[objectOfMine.xPos][objectOfMine.yPos]) {
      cherryX = Math.floor((Math.random() * 20));
      cherryY = Math.floor((Math.random() * 20));
    }
    }
    if (myBoard[cherryX][cherryY] == myBoard[sharkX][sharkY]) {
      cherryX = Math.floor((Math.random() * 20));
      cherryY = Math.floor((Math.random() * 20));
    }
    myBoard[cherryX][cherryY] = energy;
    cherryTLEY = cherryY - 2;
    cherryTREX = cherryX + 2;
    cherryBREY = cherryY + 2;
    cherryBLEX = cherryX - 2;
    cherryTLXc = cherryX - 2;
    cherryTLXm2 = cherryX - 1;
    cherryTLTRX = cherryX;
    cherryTRXm1 = cherryX + 1;
    cherryTRYc = cherryY - 2;
    cherryTRYm2 = cherryY - 1;
    cherryTRBRY = cherryY;
    cherryBRYm1 = cherryY + 1;
    cherryBRXc = cherryX + 2;
    cherryBRXm2 = cherryX + 1;
    cherryBRBLX = cherryX;
    cherryBLXm1 = cherryX - 1;
    cherryBLYc = cherryY + 2;
    cherryBLYm2 = cherryY + 1;
    cherryBLTLY = cherryY;
    cherryTLYm1 = cherryY - 1;

    if (cherryX <= 1 || cherryX >= 18 || cherryY <= 1 || cherryY >= 18) {
      myBoard[crocX][crocY] = croc;
    } else {

      //top left side
      if (moveAmtTL == 4) {
        if (myBoard[crocX][crocY] != myBoard[cherryTLXc][cherryTLEY]) {
          myBoard[crocX][crocY] = "🔲";
          crocX = cherryTLXc;
          crocY = cherryTLEY;
          myBoard[crocX][crocY] = croc;
        }
      }
      if (moveAmtTL == 3) {
        if (myBoard[crocX][crocY] != myBoard[cherryTLXm2][cherryTLEY]) {
          myBoard[crocX][crocY] = "🔲";
          crocX = cherryTLXm2;
          crocY = cherryTLEY;
          myBoard[crocX][crocY] = croc;
        }
      }
      if (moveAmtTL == 2) {
        if (myBoard[crocX][crocY] != myBoard[cherryTLTRX][cherryTLEY]) {
          myBoard[crocX][crocY] = "🔲";
          crocX = cherryTLTRX;
          crocY = cherryTLEY;
          myBoard[crocX][crocY] = croc;
        }
      }
      if (moveAmtTL == 1) {
        if (myBoard[crocX][crocY] != myBoard[cherryTRXm1][cherryTLEY]) {
          myBoard[crocX][crocY] = "🔲";
          crocX = cherryTRXm1;
          crocY = cherryTLEY;
          myBoard[crocX][crocY] = croc;
        }
      }
      //top right side
      if (moveAmtTL == 0 && moveAmtTR == 4) {
        if (myBoard[crocX][crocY] != myBoard[cherryTREX][cherryTRYc]) {
          myBoard[crocX][crocY] = "🔲";
          crocX = cherryTREX;
          crocY = cherryTRYc;
          myBoard[crocX][crocY] = croc;
        }
      }
      if (moveAmtTL == 0 && moveAmtTR == 3) {
        if (myBoard[crocX][crocY] != myBoard[cherryTREX][cherryTRYm2]) {
          myBoard[crocX][crocY] = "🔲";
          crocX = cherryTREX;
          crocY = cherryTRYm2;
          myBoard[crocX][crocY] = croc;
        }
      }
      if (moveAmtTL == 0 && moveAmtTR == 2) {
        if (myBoard[crocX][crocY] != myBoard[cherryTREX][cherryTRBRY]) {
          myBoard[crocX][crocY] = "🔲";
          crocX = cherryTREX;
          crocY = cherryTRBRY;
          myBoard[crocX][crocY] = croc;
        }
      }
      if (moveAmtTL == 0 && moveAmtTR == 1) {
        if (myBoard[crocX][crocY] != myBoard[cherryTREX][cherryBRYm1]) {
          myBoard[crocX][crocY] = "🔲";
          crocX = cherryTREX;
          crocY = cherryBRYm1;
          myBoard[crocX][crocY] = croc;
        }
      }
      //bottom right side
      if (moveAmtTL == 0 && moveAmtTR == 0 && moveAmtBR == 4) {
        if (myBoard[crocX][crocY] != myBoard[cherryBRXc][cherryBREY]) {
          myBoard[crocX][crocY] = "🔲";
          crocX = cherryBRXc;
          crocY = cherryBREY;
          myBoard[crocX][crocY] = croc;
        }
      }
      if (moveAmtTL == 0 && moveAmtTR == 0 && moveAmtBR == 3) {
        if (myBoard[crocX][crocY] != myBoard[cherryBRXm2][cherryBREY]) {
          myBoard[crocX][crocY] = "🔲";
          crocX = cherryBRXm2;
          crocY = cherryBREY;
          myBoard[crocX][crocY] = croc;
        }
      }
      if (moveAmtTL == 0 && moveAmtTR == 0 && moveAmtBR == 2) {
        if (myBoard[crocX][crocY] != myBoard[cherryBRBLX][cherryBREY]) {
          myBoard[crocX][crocY] = "🔲";
          crocX = cherryBRBLX;
          crocY = cherryBREY;
          myBoard[crocX][crocY] = croc;
        }
      }
      if (moveAmtTL == 0 && moveAmtTR == 0 && moveAmtBR == 1) {
        if (myBoard[crocX][crocY] != myBoard[cherryBLXm1][cherryBREY]) {
          myBoard[crocX][crocY] = "🔲";
          crocX = cherryBLXm1;
          crocY = cherryBREY;
          myBoard[crocX][crocY] = croc;
        }
      }
      //bottom left side
      if (moveAmtTL == 0 && moveAmtTR == 0 && moveAmtBR == 0 && moveAmtBL == 4) {
        if (myBoard[crocX][crocY] != myBoard[cherryBLEX][cherryBLYc]) {
          myBoard[crocX][crocY] = "🔲";
          crocX = cherryBLEX;
          crocY = cherryBLYc;
          myBoard[crocX][crocY] = croc;
        }
      }
      if (moveAmtTL == 0 && moveAmtTR == 0 && moveAmtBR == 0 && moveAmtBL == 3) {
        if (myBoard[crocX][crocY] != myBoard[cherryBLEX][cherryBLYm2]) {
          myBoard[crocX][crocY] = "🔲";
          crocX = cherryBLEX;
          crocY = cherryBLYm2;
          myBoard[crocX][crocY] = croc;
        }
      }
      if (moveAmtTL == 0 && moveAmtTR == 0 && moveAmtBR == 0 && moveAmtBL == 2) {
        if (myBoard[crocX][crocY] != myBoard[cherryBLEX][cherryBLTLY]) {
          myBoard[crocX][crocY] = "🔲";
          crocX = cherryBLEX;
          crocY = cherryBLTLY;
          myBoard[crocX][crocY] = croc;
        }
      }
      if (moveAmtTL == 0 && moveAmtTR == 0 && moveAmtBR == 0 && moveAmtBL == 1) {
        if (myBoard[crocX][crocY] != myBoard[cherryBLEX][cherryTLYm1]) {
          myBoard[crocX][crocY] = "🔲";
          crocX = cherryBLEX;
          crocY = cherryTLYm1;
          myBoard[crocX][crocY] = croc;
        }
      }
    }
  }


  document.getElementById("score").innerHTML = "Score: " + score;
  document.getElementById("lives").innerHTML = " Lives: " + lives;

  if (respawn == 1) {

    myBoard[cherryX][cherryY] = energy;
    myBoard[crocX][crocY] = croc
    myBoard[sharkX][sharkY] = shark;
    myBoard[shadowX][shadowY] = moon;
    myBoard[snakeX][snakeY] = "🐍"
  }
  }


  //lives
  if (myBoard[spiderX][spiderY] == myBoard[myCharacterX][myCharacterY]) {
    lives--;
    document.getElementById("lives").innerHTML = " Lives: " + lives;
  }
  if (myBoard[sharkX][sharkY] == myBoard[myCharacterX][myCharacterY]) {
    lives--;
    document.getElementById("lives").innerHTML = " Lives: " + lives;
  }
  if (myBoard[shadowX][shadowY] == myBoard[myCharacterX][myCharacterY]) {
    lives--;
    document.getElementById("lives").innerHTML = " Lives: " + lives;
  }
  if (myBoard[snakeX][snakeY] == myBoard[myCharacterX][myCharacterY]) {
    lives--;
    document.getElementById("lives").innerHTML = " Lives: " + lives;
  }
  if (lives == 0) {
    ded();
  }
  for (var mineObj of minePositions) {
    myBoard[mineObj.xPos][mineObj.yPos] = mineObj.img;
    if (myBoard[myCharacterX][myCharacterY] == myBoard[mineObj.xPos][mineObj.yPos]) {
      lives -= mineObj.damage;
      document.getElementById("lives").innerHTML = " Lives: " + lives;
      break;
    }
  }



});
displayBoard();

function pulsingLifeColor(){
  if(lives == 2){
    if(dontKnowSetTimeoutLol == 0){
    document.getElementById("lives").style.color = "orange";
    dontKnowSetTimeoutLol = 1;
    }
    else if (dontKnowSetTimeoutLol == 1){
      document.getElementById("lives").style.color = "yellow";
      dontKnowSetTimeoutLol = 0;
    }
  }
  if(lives == 1){
    if(dontKnowSetTimeoutLol == 0){
      document.getElementById("lives").style.color = "red";
      dontKnowSetTimeoutLol = 1;
    }
    else if (dontKnowSetTimeoutLol == 1){
      document.getElementById("lives").style.color = "white";
      dontKnowSetTimeoutLol = 0;
    }

  }

  }

var jeezJustWORK = 0;
//snake
function snakeMovement() {


  if (score >= 1000) {

    var snake1stMove = Math.floor((Math.random() * 4) + 1);
    var snake2ndMove = Math.floor((Math.random() * 4) + 1);

    myBoard[snakeX][snakeY] = "🐍";
    if (snake1stMove == 1) {
      if (snakeY == 0 || snakeY == 1) {
        snake1stMove = 2;
        snake2ndMove = 2;
      } else {
        myBoard[snakeX][snakeY] = "🔲"
        snakeY--;
        myBoard[snakeX][snakeY] = "🐍"
      }
    }
    if (snake1stMove == 2) {
      if (snakeY == 19 || snakeY == 18) {
        snake1stMove = 1;
        snake2ndMove = 1;
      } else {
        myBoard[snakeX][snakeY] = "🔲"
        snakeY++;
        myBoard[snakeX][snakeY] = "🐍"
      }
    }
    if (snake1stMove == 3) {
      if (snakeX == 0 || snakeX == 1) {
        snake1stMove = 4;
        snake2ndMove = 4;
      } else {
        myBoard[snakeX][snakeY] = "🔲"
        snakeX--;
        myBoard[snakeX][snakeY] = "🐍"
      }
    }
    if (snake1stMove == 4) {
      if (snakeX == 19 || snakeX == 18) {
        snake1stMove = 3;
        snake2ndMove = 3;
      } else {
        myBoard[snakeX][snakeY] = "🔲"
        snakeX++;
        myBoard[snakeX][snakeY] = "🐍"
      }
    }
    if (snakeY == 0 || snakeY == 1) {
      snake1stMove = 2;
      snake2ndMove = 2;
    }
    if (snakeY == 19 || snakeY == 18) {
      snake1stMove = 1;
      snake2ndMove = 1;
    }
    if (snakeX == 0 || snakeX == 1) {
      snake1stMove = 4;
      snake2ndMove = 4;
    }
    if (snakeX == 19 || snakeX == 18) {
      snake1stMove = 3;
      snake2ndMove = 3;
    }
    if (snake2ndMove == 1) {
      myBoard[snakeX][snakeY] = "🔲"
      snakeY = snakeY - 2;
      myBoard[snakeX][snakeY] = "🐍"
    }
    if (snake2ndMove == 2) {
      myBoard[snakeX][snakeY] = "🔲"
      snakeY = snakeY + 2;
      myBoard[snakeX][snakeY] = "🐍"
    }
    if (snake2ndMove == 3) {
      myBoard[snakeX][snakeY] = "🔲"
      snakeX = snakeX - 2;
      myBoard[snakeX][snakeY] = "🐍"
    }
    if (snake2ndMove == 4) {
      myBoard[snakeX][snakeY] = "🔲"
      snakeX = snakeX + 2;
      myBoard[snakeX][snakeY] = "🐍"
    }
  }
}
setInterval(snakeMovement, 750);

//shadow
var mineCap = 0;
var moveyBoi = setInterval(shadowMovement, 500);

let minePositions = [];

function shadowMovement() {

  var mine = new Mine(shadowX, shadowY, 1, "🌑");
  if (score >= 3000) {
    myBoard[mine.xPos][mine.yPos] = mine.img;
    minePositions.push(mine);
    shadowX = Math.floor((Math.random() * 20));
    shadowY = Math.floor((Math.random() * 20));
    if(myBoard[shadowX][shadowY] == myBoard[cherryX][cherryY]){
    shadowX = Math.floor((Math.random() * 20));
    shadowY = Math.floor((Math.random() * 20));
    }
    myBoard[shadowX][shadowY] = moon;
    mineCap++;
  }

  if (lives < 0) {
    lives = 0;
    document.getElementById("lives").innerHTML = " Lives: " + lives;
  }
  if (mineCap == 50) {
    clearInterval(moveyBoi);
  }

}  
var theBrokenCounter = 0;

//croc
setInterval(crocMovement, 40);


var initPulse = setInterval(pulsingLifeColor, pulseSpeed);

function crocMovement() {
if(score >= 2000){
  if(score >= 6000){
    if(theBrokenCounter == 0){
      theBrokenCounter = 1;
      var thisMAYbeBroken = setInterval(shadowMovement, 250);
    }
    }
    if (mineCap == 300) {
      clearInterval(thisMAYbeBroken);
    }

  if(jeezJustWORK == 0){
    if(lives == 1){
      clearInterval(initPulse);
      let pulseSpeed = 250;
      setInterval(pulsingLifeColor, pulseSpeed);
      jeezJustWORK = 1;
    }
    
  }

  if (lives > 0) {
    myBoard[myCharacterX][myCharacterY] = player1;
    if (moveAmtTL == 0 && moveAmtTR == 0 && moveAmtBR == 0 && moveAmtBL == 0) {
      moveAmtTL = 4;
      moveAmtTR = 4;
      moveAmtBR = 4;
      moveAmtBL = 4;
    }

    if (moveAmtTL > 0) {
      myBoard[crocX][crocY] = "🔲";
      crocX++;
      myBoard[crocX][crocY] = croc;
      moveAmtTL--;

    } else if (moveAmtTR > 0) {
      myBoard[crocX][crocY] = "🔲";
      crocY++;
      myBoard[crocX][crocY] = croc;
      moveAmtTR--;

    } else if (moveAmtBR > 0) {
      myBoard[crocX][crocY] = "🔲";
      crocX--;
      myBoard[crocX][crocY] = croc;
      moveAmtBR--;

    } else if (moveAmtBL > 0) {
      myBoard[crocX][crocY] = "🔲";
      crocY--;
      myBoard[crocX][crocY] = croc;
      moveAmtBL--;
    }

    if (myBoard[crocX][crocY] == myBoard[myCharacterX][myCharacterY]) {
      lives--;
      document.getElementById("lives").innerHTML = " Lives: " + lives;
    }
    
  }
  myBoard[crocX][crocY] = croc;
}
displayBoard();
}
