var bearX = 8;
var bearY = 24;
var disX = Math.abs(p1X - bearX);
var disY = Math.abs(p1Y - bearY);
var aggressionTime = diffFirstAggression;
function bearMovement() {
  if (gamestate == whatsAnEnum.GAMEPLAY) {
    if (lives <= 2) {
      // x movement
      if (bearY == 0) {
        myBoard[bearX][bearY] = blank;
        bearY++;
        myBoard[bearX][bearY] = bear;
      } else if (bearY == 24) {
        myBoard[bearX][bearY] = blank;
        bearY--;
        myBoard[bearX][bearY] = bear;
      } else if (bearX == 0) {
        myBoard[bearX][bearY] = blank;
        bearX++;
        myBoard[bearX][bearY] = bear;
      } else if (bearX == 24) {
        myBoard[bearX][bearY] = blank;
        bearX--;
        myBoard[bearX][bearY] = bear;
      }
      else if (bearX < p1X) {
        myBoard[bearX][bearY] = blank;
        bearX++;
        myBoard[bearX][bearY] = bear;
      } else if (bearX == p1X && bearY > p1Y) {
        myBoard[bearX][bearY] = blank;
        bearY--;
        myBoard[bearX][bearY] = bear;
      } else if (bearX > p1X) {
        myBoard[bearX][bearY] = blank;
        bearX--;
        myBoard[bearX][bearY] = bear;
      } else if (bearX == p1X && bearY < p1Y) {
        myBoard[bearX][bearY] = blank;
        bearY++;
        myBoard[bearX][bearY] = bear;
      }
      else if (bearX == p1X - 1) {
        myBoard[bearX][bearY] = blank;
        bearX += 2;
        myBoard[bearX][bearY] = bear;
      }
      else if (bearX == p1X + 1) {
        myBoard[bearX][bearY] = blank;
        bearX -= 2;
        myBoard[bearX][bearY] = bear;
      }
      else if (bearY == p1Y - 1) {
        myBoard[bearX][bearY] = blank;
        bearY += 2;
        myBoard[bearX][bearY] = bear;
      }
      else if (bearY == p1Y + 1) {
        myBoard[bearX][bearY] = blank;
        bearY -= 2;
        myBoard[bearX][bearY] = bear;
      }
    }
    if (myBoard[bearX][bearY] == myBoard[p1X][p1Y]) {
      lives--;
      get("lives").innerHTML = " Lives: " + lives;
    }
  }
}