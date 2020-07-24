var sharkX = 8;
var sharkY = 24;
var disX = Math.abs(p1X - sharkX);
var disY = Math.abs(p1Y - sharkY);
var aggressionTime = 400;
function sharkMovement() {
    if (gamestate == whatsAnEnum.GAMEPLAY) {
      if (lives <= 2) {
        // x movement
        if (sharkY == 0) {
          myBoard[sharkX][sharkY] = blank;
          sharkY++;
          myBoard[sharkX][sharkY] = shark;
        } else if (sharkY == 24) {
          myBoard[sharkX][sharkY] = blank;
          sharkY--;
          myBoard[sharkX][sharkY] = shark;
        } else if (sharkX == 0) {
          myBoard[sharkX][sharkY] = blank;
          sharkX++;
          myBoard[sharkX][sharkY] = shark;
        } else if (sharkX == 24) {
          myBoard[sharkX][sharkY] = blank;
          sharkX--;
          myBoard[sharkX][sharkY] = shark;
        }
        else if (sharkX < p1X) {
          myBoard[sharkX][sharkY] = blank;
          sharkX++;
          myBoard[sharkX][sharkY] = shark;
        } else if (sharkX == p1X && sharkY > p1Y) {
          myBoard[sharkX][sharkY] = blank;
          sharkY--;
          myBoard[sharkX][sharkY] = shark;
        } else if (sharkX > p1X) {
          myBoard[sharkX][sharkY] = blank;
          sharkX--;
          myBoard[sharkX][sharkY] = shark;
        } else if (sharkX == p1X && sharkY < p1Y) {
          myBoard[sharkX][sharkY] = blank;
          sharkY++;
          myBoard[sharkX][sharkY] = shark;
        }
        else if (sharkX == p1X - 1) {
          myBoard[sharkX][sharkY] = blank;
          sharkX += 2;
          myBoard[sharkX][sharkY] = shark;
        }
        else if (sharkX == p1X + 1) {
          myBoard[sharkX][sharkY] = blank;
          sharkX -= 2;
          myBoard[sharkX][sharkY] = shark;
        }
        else if (sharkY == p1Y - 1) {
          myBoard[sharkX][sharkY] = blank;
          sharkY += 2;
          myBoard[sharkX][sharkY] = shark;
        }
        else if (sharkY == p1Y + 1) {
          myBoard[sharkX][sharkY] = blank;
          sharkY -= 2;
          myBoard[sharkX][sharkY] = shark;
        }
      }
      if (myBoard[sharkX][sharkY] == myBoard[p1X][p1Y]) {
        lives--;
        get("lives").innerHTML = " Lives: " + lives;
      }
    }
  }