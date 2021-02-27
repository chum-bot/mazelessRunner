function moonMovement() {
    if (gamestate == whatsAnEnum.GAMEPLAY) {
      mine = new Mine(moon.x, moon.y, 1, "🌕");
      if (score >= moon.threshold) {
        myBoard[mine.xPos][mine.yPos] = mine.img;
        minePositions.push(mine);
        moon.x = Math.floor((Math.random() * 25));
        moon.y = Math.floor((Math.random() * 25));
        if (myBoard[moon.x][moon.y] == myBoard[sunX][sunY]) {
          moon.x = Math.floor((Math.random() * 25));
          moon.y = Math.floor((Math.random() * 25));
        }
        myBoard[moon.x][moon.y] = moon.img;
        mineCap++;
      }
    }
  }