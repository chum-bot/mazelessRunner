function ninjaMovement() {
  if (gamestate == whatsAnEnum.GAMEPLAY) {
    if (lives <= 2) {
      // x movement
      if (ninja.x < p1X) {
        deposition(ninja);
        ninja.x++;
        reposition(ninja);
      } else if (ninja.x == p1X && ninja.y > p1Y) {
        deposition(ninja);
        ninja.y--;
        reposition(ninja);
      } else if (ninja.x > p1X) {
        deposition(ninja);
        ninja.x--;
        reposition(ninja);
      } else if (ninja.x == p1X && ninja.y < p1Y) {
        deposition(ninja);
        ninja.y++;
        reposition(ninja);
      }
    }
    collision(ninja);
    if (lives === 1 && ninjaFrozen == false) {
      window.clearInterval(aggression);
      window.clearInterval(ninja.idStorage);
      ninja.speed = diffSecondAggression;
      aggression = window.setInterval(ninja.move, ninja.speed);
    }
    if(lives === 2 && ninjaFrozen == false){
      window.clearInterval(aggression);
      window.clearInterval(ninja.idStorage);
      ninja.speed = diffFirstAggression;
      aggression = window.setInterval(ninja.move, ninja.speed);
    }
  }
}