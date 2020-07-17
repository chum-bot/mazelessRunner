function charAndFrogMovement() {
    if (gamestate == whatsAnEnum.GAMEPLAY && lives > 0) {
        switch (event.keyCode) {
            case upKey:
              switch (frogY) {
                case 19:
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
                  if (p1Y === 19) {
                    myBoard[p1X][p1Y] = p1;
                  } else {
                    myBoard[p1X][p1Y] = blank;
                    p1Y++;
                    myBoard[p1X][p1Y] = p1;
                  }
                  break;
                default:
                  switch (p1Y) {
                    case 19:
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
                case 19:
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
                  if (p1X === 19) {
                    myBoard[p1X][p1Y] = p1;
                  } else {
                    myBoard[p1X][p1Y] = blank;
                    p1X++;
                    myBoard[p1X][p1Y] = p1;
                  }
                  break;
                default:
                  switch (p1X) {
                    case 19:
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
