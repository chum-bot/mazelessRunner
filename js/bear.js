function bearMovement() {
  if (gamestate == whatsAnEnum.GAMEPLAY) {
    if (lives <= 2) {
      // x movement
      if (bear.x < p1X) {
        myBoard[bear.x][bear.y] = blank;
        bear.x++;
        myBoard[bear.x][bear.y] = bear.img;
      } else if (bear.x == p1X && bear.y > p1Y) {
        myBoard[bear.x][bear.y] = blank;
        bear.y--;
        myBoard[bear.x][bear.y] = bear.img;
      } else if (bear.x > p1X) {
        myBoard[bear.x][bear.y] = blank;
        bear.x--;
        myBoard[bear.x][bear.y] = bear.img;
      } else if (bear.x == p1X && bear.y < p1Y) {
        myBoard[bear.x][bear.y] = blank;
        bear.y++;
        myBoard[bear.x][bear.y] = bear.img;
      }
    }
    bear.collision();
    if (lives === 1 && bearFrozen == false) {
      window.clearInterval(aggression);
      window.clearInterval(bear.idStorage);
      bear.speed = diffSecondAggression;
      aggression = window.setInterval(bear.move, bear.speed);
    }
    if(lives === 2 && bearFrozen == false){
      window.clearInterval(aggression);
      window.clearInterval(bear.idStorage);
      bear.speed = diffFirstAggression;
      aggression = window.setInterval(bear.move, bear.speed);
    }
  }
}