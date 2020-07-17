function beeMovement() {
    if (gamestate == whatsAnEnum.GAMEPLAY) {
      if (score >= 1000) {
        var bee1stMove = Math.floor((Math.random() * 4) + 1);
        var bee2ndMove = Math.floor((Math.random() * 4) + 1);
        myBoard[beeX][beeY] = bee;
        switch (bee1stMove) {
          case 1:
            if (beeY == 0 || beeY == 1) {
              bee1stMove = 2;
              bee2ndMove = 2;
            } else {
              myBoard[beeX][beeY] = blank;
              beeY--;
              myBoard[beeX][beeY] = bee;
            }
            break;
          case 2:
            if (beeY == 19 || beeY == 18) {
              bee1stMove = 1;
              bee2ndMove = 1;
            } else {
              myBoard[beeX][beeY] = blank;
              beeY++;
              myBoard[beeX][beeY] = bee;
            }
            break;
          case 3:
            if (beeX == 0 || beeX == 1) {
              bee1stMove = 4;
              bee2ndMove = 4;
            } else {
              myBoard[beeX][beeY] = blank;
              beeX--;
              myBoard[beeX][beeY] = bee;
            }
            break;
          case 4:
            if (beeX == 19 || beeX == 18) {
              bee1stMove = 3;
              bee2ndMove = 3;
            } else {
              myBoard[beeX][beeY] = blank;
              beeX++;
              myBoard[beeX][beeY] = bee;
            }
            break;
        }
        switch (beeY) {
          case 1:
          case 0:
            bee1stMove = 2;
            bee2ndMove = 2;
            break;
          case 19:
          case 18:
            bee1stMove = 1;
            bee2ndMove = 1;
            break;
        }
        switch (beeX) {
          case 1:
          case 0:
            bee1stMove = 4;
            bee2ndMove = 4;
            break;
          case 19:
          case 18:
            bee1stMove = 3;
            bee2ndMove = 3;
            break;
        }
        switch (bee2ndMove) {
          case 1:
            myBoard[beeX][beeY] = blank;
            beeY -= 2;
            myBoard[beeX][beeY] = bee;
            break;
          case 2:
            myBoard[beeX][beeY] = blank;
            beeY += 2;
            myBoard[beeX][beeY] = bee;
            break;
          case 3:
            myBoard[beeX][beeY] = blank;
            beeX -= 2;
            myBoard[beeX][beeY] = bee;
            break;
          case 4:
            myBoard[beeX][beeY] = blank;
            beeX += 2;
            myBoard[beeX][beeY] = bee;
            break;
        }
      }
    }
  }