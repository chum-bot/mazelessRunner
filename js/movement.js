function charMovement() {
  if (gamestate == whatsAnEnum.GAMEPLAY && lives > 0) {
    switch (event.keyCode) {
      case upKey:
        if (player.y != 0){
          deposition(player);
          player.y--;
          reposition(player);
          player.lastDirection = "up";
        }
        break;
      case downKey:
        if (player.y != 24) {
          deposition(player);
          player.y++;
          reposition(player);
          player.lastDirection = "down";
        }
        break;
      case leftKey:
        if (player.x != 0) {
          deposition(player);
          player.x--;
          reposition(player);
            player.lastDirection = "left";
        }
        break;
      case rightKey:
        if (player.x != 24) {
          deposition(player);
          player.x++;
          reposition(player);
            player.lastDirection = "right";
        }
        break;
    }
  }
}
