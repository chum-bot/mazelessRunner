function moonMovement() {
    if (gamestate == whatsAnEnum.GAMEPLAY) {
      var mine = new Mine(moonX, moonY, 1, "🌑");
      if (score >= 3000) {
        myBoard[mine.xPos][mine.yPos] = mine.img;
        minePositions.push(mine);
        moonX = Math.floor((Math.random() * 20));
        moonY = Math.floor((Math.random() * 20));
        if (myBoard[moonX][moonY] == myBoard[cherryX][cherryY]) {
          moonX = Math.floor((Math.random() * 20));
          moonY = Math.floor((Math.random() * 20));
        }
        myBoard[moonX][moonY] = moon;
        mineCap++;
      }
      if (mineCap == 50) {
        clearInterval(moveyBoi);
      }
    }
  }