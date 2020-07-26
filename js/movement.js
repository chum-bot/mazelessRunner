var p1X = 11;
var p1Y = 11;
function charMovement() {
  if (gamestate == whatsAnEnum.GAMEPLAY && lives > 0) {
    switch (event.keyCode) {
      case upKey:
        switch (p1Y) {
          case 0:
            myBoard[p1X][p1Y] = p1;
            break;
          default:
            myBoard[p1X][p1Y] = blank;
            p1Y--;
            myBoard[p1X][p1Y] = p1;
            break;
        }
        break;
      case downKey:
        switch (p1Y) {
          case 24:
            myBoard[p1X][p1Y] = p1;
            break;
          default:
            myBoard[p1X][p1Y] = blank;
            p1Y++;
            myBoard[p1X][p1Y] = p1;
            break;
        }
        break;
      case leftKey:
        switch (p1X) {
          case 0:
            myBoard[p1X][p1Y] = p1;
            break;
          default:
            myBoard[p1X][p1Y] = blank;
            p1X--;
            myBoard[p1X][p1Y] = p1;
            break;
        }
        break;
      case rightKey:
        switch (p1X) {
          case 24:
            myBoard[p1X][p1Y] = p1;
            break;
          default:
            myBoard[p1X][p1Y] = blank;
            p1X++;
            myBoard[p1X][p1Y] = p1;
            break;
        }
        break;
    }
  }
}
