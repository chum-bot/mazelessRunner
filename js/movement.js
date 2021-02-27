function charMovement() {
  if (gamestate == whatsAnEnum.GAMEPLAY && lives > 0) {
    switch (event.keyCode) {
      case upKey:
        if (p1Y != 0){
            myBoard[p1X][p1Y] = blank;
            p1Y--;
            myBoard[p1X][p1Y] = p1;
            lastDirection = "up";
        }
        break;
      case downKey:
        if (p1Y != 24) {
            myBoard[p1X][p1Y] = blank;
            p1Y++;
            myBoard[p1X][p1Y] = p1;
            lastDirection = "down";
        }
        break;
      case leftKey:
        if (p1X != 0) {
            myBoard[p1X][p1Y] = blank;
            p1X--;
            myBoard[p1X][p1Y] = p1;
            lastDirection = "left";
        }
        break;
      case rightKey:
        if (p1X != 24) {
            myBoard[p1X][p1Y] = blank;
            p1X++;
            myBoard[p1X][p1Y] = p1;
            lastDirection = "right";
        }
        break;
    }
  }
}
