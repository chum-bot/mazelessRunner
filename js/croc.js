var crocX = 3;
var crocY = 9;
var moveAmtT = 4;
var moveAmtR = 4;
var moveAmtB = 4;
var moveAmtL = 4;
var energyTEY = energyY - 2;
var energyBEY = energyY + 2;
var energyREX = energyX + 2;
var energyLEX = energyX - 2;
var energyTBLX = energyX - 1;
var energyTBRX = energyX + 1;
var energyLRTY = energyY - 1;
var energyLRBY = energyY + 1;
var energyHMX = energyX;
var energyVMY = energyY;
function crocMovement() {
    if (gamestate == whatsAnEnum.GAMEPLAY) {
      if (score >= 2000) {
        if (lives > 0) {
          myBoard[p1X][p1Y] = p1;
          if (moveAmtT == 0 && moveAmtR == 0 && moveAmtB == 0 && moveAmtL == 0) {
            moveAmtT = 4;
            moveAmtR = 4;
            moveAmtB = 4;
            moveAmtL = 4;
          }
  
          if (moveAmtT > 0) {
            myBoard[crocX][crocY] = blank;
            crocX++;
            myBoard[crocX][crocY] = croc;
            moveAmtT--;
  
          } else if (moveAmtR > 0) {
            myBoard[crocX][crocY] = blank;
            crocY++;
            myBoard[crocX][crocY] = croc;
            moveAmtR--;
  
          } else if (moveAmtB > 0) {
            myBoard[crocX][crocY] = blank;
            crocX--;
            myBoard[crocX][crocY] = croc;
            moveAmtB--;
  
          } else if (moveAmtL > 0) {
            myBoard[crocX][crocY] = blank;
            crocY--;
            myBoard[crocX][crocY] = croc;
            moveAmtL--;
          }
          if (myBoard[crocX][crocY] == myBoard[p1X][p1Y]) {
            lives--;
            get("lives").innerHTML = " Lives: " + lives;
          }
  
        }
        myBoard[crocX][crocY] = croc;
      }
    }
  }