var moonX = 24;
var moonY = 24;
function moonMovement() {
    if (gamestate == whatsAnEnum.GAMEPLAY) {
      var mine = new Mine(moonX, moonY, 1, "🌑");
      if (score >= 3000) {
        myBoard[mine.xPos][mine.yPos] = mine.img;
        minePositions.push(mine);
        moonX = Math.floor((Math.random() * 25));
        moonY = Math.floor((Math.random() * 25));
        if (myBoard[moonX][moonY] == myBoard[energyX][energyY]) {
          moonX = Math.floor((Math.random() * 25));
          moonY = Math.floor((Math.random() * 25));
        }
        myBoard[moonX][moonY] = moon;
        mineCap++;
      }
    }
  }