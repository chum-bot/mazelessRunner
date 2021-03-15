function alienMovement() {
    if (gamestate == whatsAnEnum.GAMEPLAY) {
      mine = new Mine(alien.x, alien.y, 1, "🌌");
      if (score >= alien.threshold) {
        get(mine.pos).innerText = mine.img;
        minePositions.push(mine);
        alien.x = Math.floor((Math.random() * 25));
        alien.y = Math.floor((Math.random() * 25));
        if (alien.pos == sunPos) {
          alien.x = Math.floor((Math.random() * 25));
          alien.y = Math.floor((Math.random() * 25));
        }
        if(alien.pos == charPos) {
          alien.x = Math.floor((Math.random() * 25));
          alien.y = Math.floor((Math.random() * 25));
        }
        reposition(alien);
        mineCap++;
      }
    }
  }