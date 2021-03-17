function ninjaMovement() {
  if (gamestate == whatsAnEnum.GAMEPLAY) {
    if (lives <= 2) {
      // x movement
      if (ninja.x < player.x) {
        deposition(ninja);
        ninja.x++;
        reposition(ninja);
      } else if (ninja.x == player.x && ninja.y > player.y) {
        deposition(ninja);
        ninja.y--;
        reposition(ninja);
      } else if (ninja.x > player.x) {
        deposition(ninja);
        ninja.x--;
        reposition(ninja);
      } else if (ninja.x == player.x && ninja.y < player.y) {
        deposition(ninja);
        ninja.y++;
        reposition(ninja);
      }
    }
    collision(ninja);
    if (lives === 1) {
      ninja.speed = diffSecondAggression;
      if (ninjaFrozen == false) {
        window.clearInterval(aggression);
        window.clearInterval(ninja.idStorage);
        aggression = window.setInterval(ninja.move, ninja.speed);
      }

    }
    if (lives === 2) {
      ninja.speed = diffFirstAggression;
      if (ninjaFrozen == false) {
        window.clearInterval(aggression);
        window.clearInterval(ninja.idStorage);
        aggression = window.setInterval(ninja.move, ninja.speed);
      }
    }
  }
}