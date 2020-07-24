var p1X = 11;
var p1Y = 11;
var frogX = 3;
var frogY = 3;
function charAndFrogMovement() {
    if (gamestate == whatsAnEnum.GAMEPLAY && lives > 0) {
        switch (event.keyCode) {
            case upKey:
              switch (frogY) {
                case 24:
                  myBoard[frogX][frogY] = frog;
                  if (p1Y === 0) {
                    myBoard[p1X][p1Y] = p1;
                  } else {
                    myBoard[p1X][p1Y] = blank;
                    p1Y--;
                    myBoard[p1X][p1Y] = p1;
                  }
                  break;
                default:
                  switch (p1Y) {
                    case 0:
                      myBoard[p1X][p1Y] = p1;
                      break;
                    default:
                      myBoard[frogX][frogY] = blank;
                      frogY++;
                      myBoard[frogX][frogY] = frog;
                      myBoard[p1X][p1Y] = blank;
                      p1Y--;
                      myBoard[p1X][p1Y] = p1;
                      break;
                  }
                  break;
              }
              break;
            case downKey:
              switch (frogY) {
                case 0:
                  myBoard[frogX][frogY] = frog;
                  if (p1Y === 24) {
                    myBoard[p1X][p1Y] = p1;
                  } else {
                    myBoard[p1X][p1Y] = blank;
                    p1Y++;
                    myBoard[p1X][p1Y] = p1;
                  }
                  break;
                default:
                  switch (p1Y) {
                    case 24:
                      myBoard[p1X][p1Y] = p1;
                      break;
                    default:
                      myBoard[frogX][frogY] = blank;
                      frogY--;
                      myBoard[frogX][frogY] = frog;
                      myBoard[p1X][p1Y] = blank;
                      p1Y++;
                      myBoard[p1X][p1Y] = p1;
                      break;
                  }
                  break;
              }
              break;
            case leftKey:
              switch (frogX) {
                case 24:
                  myBoard[frogX][frogY] = frog;
                  if (p1X === 0) {
                    myBoard[p1X][p1Y] = p1;
                  } else {
                    myBoard[p1X][p1Y] = blank;
                    p1X--;
                    myBoard[p1X][p1Y] = p1;
                  }
                  break;
                default:
                  switch (p1X) {
                    case 0:
                      myBoard[p1X][p1Y] = p1;
                      break;
                    default:
                      myBoard[frogX][frogY] = blank;
                      frogX++;
                      myBoard[frogX][frogY] = frog;
                      myBoard[p1X][p1Y] = blank;
                      p1X--;
                      myBoard[p1X][p1Y] = p1;
                      break;
                  }
                  break;
              }
              break;
            case rightKey:
              switch (frogX) {
                case 0:
                  myBoard[frogX][frogY] = frog;
                  if (p1X === 24) {
                    myBoard[p1X][p1Y] = p1;
                  } else {
                    myBoard[p1X][p1Y] = blank;
                    p1X++;
                    myBoard[p1X][p1Y] = p1;
                  }
                  break;
                default:
                  switch (p1X) {
                    case 24:
                      myBoard[p1X][p1Y] = p1;
                      break;
                    default:
                      myBoard[frogX][frogY] = blank;
                      frogX--;
                      myBoard[frogX][frogY] = frog;
                      myBoard[p1X][p1Y] = blank;
                      p1X++;
                      myBoard[p1X][p1Y] = p1;
                      break;
                  }
                  break;
              }
              break;
          }
    }
}
