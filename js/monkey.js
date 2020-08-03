//monkey vars
var stepCount = 10;
var blinker = 0;
var bananaPositions = [];
var monkeyX = 14;
var monkeyY = 21;
var expirationDate = diffExpirationDate;
var expired = false;
function monkeyMovement() {
    if (gamestate == whatsAnEnum.GAMEPLAY) {
      if (score >= monkeyThreshold) {
        if (stepCount <= 0) {
          var midBanana = new Mine(monkeyX, monkeyY, 1, banana);
          var tlBanana = new Mine(monkeyX - 1, monkeyY - 1, 1, banana);
          var trBanana = new Mine(monkeyX + 1, monkeyY - 1, 1, banana);
          var blBanana = new Mine(monkeyX - 1, monkeyY + 1, 1, banana);
          var brBanana = new Mine(monkeyX + 1, monkeyY + 1, 1, banana);
          bananaPositions.push(midBanana, tlBanana, trBanana, blBanana, brBanana);
          timesUp = setTimeout(expiration, expirationDate);
          if (blinker == 0) {
            blinker = 1;
            myBoard[tlBanana.xPos][tlBanana.yPos] = tlBanana.img;
            myBoard[trBanana.xPos][trBanana.yPos] = trBanana.img;
            myBoard[blBanana.xPos][blBanana.yPos] = blBanana.img;
            myBoard[brBanana.xPos][brBanana.yPos] = brBanana.img;
          }
          else if (blinker == 1) {
            blinker = 0;
            if (score >= monkeySickoThreshold) {
              stepCount = 10;
            }
            else {
              stepCount = 17;
            }
  
            myBoard[monkeyX][monkeyY] = midBanana.img;
            monkeyX = Math.floor(Math.random() * 23) + 1;
            monkeyY = Math.floor(Math.random() * 23) + 1;
            if (myBoard[monkeyX][monkeyY] == myBoard[sunX][sunY]) {
              monkeyX = Math.floor(Math.random() * 23) + 1;
              monkeyY = Math.floor(Math.random() * 23) + 1;
            }
            for (objectOfBanana of bananaPositions) {
              if (myBoard[monkeyX][monkeyY] == myBoard[objectOfBanana.xPos][objectOfBanana.yPos]) {
                monkeyX = Math.floor(Math.random() * 23) + 1;
                monkeyY = Math.floor(Math.random() * 23) + 1;
              }
            }
            for (theMines of minePositions) {
              if (myBoard[monkeyX][monkeyY] == myBoard[theMines.xPos][theMines.yPos]) {
                monkeyX = Math.floor(Math.random() * 23) + 1;
                monkeyY = Math.floor(Math.random() * 23) + 1;
              }
            }
            myBoard[monkeyX][monkeyY] = monkey;
          }
        }
        myBoard[monkeyX][monkeyY] = monkey;
        displayBoard();
      }
    }
  }
  function expiration(){
    for(beNeeNeeObj of bananaPositions){
    myBoard[beNeeNeeObj.xPos][beNeeNeeObj.yPos] = blank;
    console.log("hello?");
    }
    bananaPositions.splice(0, 5);
    for(bononoObj of bananaPositions){
      myBoard[bononoObj.xPos][bononoObj.yPos] = banana;
      console.log("represent");
      }
    expired = true;
  }