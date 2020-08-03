var unicornX = 3;
var unicornY = 9;
var moveAmtT = 4;
var moveAmtR = 4;
var moveAmtB = 4;
var moveAmtL = 4;
var sunTEY = sunY - 2;
var sunBEY = sunY + 2;
var sunREX = sunX + 2;
var sunLEX = sunX - 2;
var sunTBLX = sunX - 1;
var sunTBRX = sunX + 1;
var sunLRTY = sunY - 1;
var sunLRBY = sunY + 1;
var sunHMX = sunX;
var sunVMY = sunY;
function unicornMovement() {
    if (gamestate == whatsAnEnum.GAMEPLAY) {
      if (score >= uniThreshold) {
        if (lives > 0) {
          myBoard[p1X][p1Y] = p1;
          if (moveAmtT == 0 && moveAmtR == 0 && moveAmtB == 0 && moveAmtL == 0) {
            moveAmtT = 4;
            moveAmtR = 4;
            moveAmtB = 4;
            moveAmtL = 4;
          }
  
          if (moveAmtT > 0) {
            myBoard[unicornX][unicornY] = blank;
            unicornX++;
            myBoard[unicornX][unicornY] = unicorn;
            moveAmtT--;
  
          } else if (moveAmtR > 0) {
            myBoard[unicornX][unicornY] = blank;
            unicornY++;
            myBoard[unicornX][unicornY] = unicorn;
            moveAmtR--;
  
          } else if (moveAmtB > 0) {
            myBoard[unicornX][unicornY] = blank;
            unicornX--;
            myBoard[unicornX][unicornY] = unicorn;
            moveAmtB--;
  
          } else if (moveAmtL > 0) {
            myBoard[unicornX][unicornY] = blank;
            unicornY--;
            myBoard[unicornX][unicornY] = unicorn;
            moveAmtL--;
          }
          if (myBoard[unicornX][unicornY] == myBoard[p1X][p1Y]) {
            lives--;
            get("lives").innerHTML = " Lives: " + lives;
          }
  
        }
        myBoard[unicornX][unicornY] = unicorn;
      }
    }
  }