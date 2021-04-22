function charMovement() {
  if (gamestate == whatsAnEnum.GAMEPLAY && lives > 0) {
    switch (event.keyCode) {
      case 38:
      case 87:
        if (player.y != 0){
          deposition(player);
          player.y--;
          reposition(player);
          player.lastDirection = "up";
        }
        break;
      case 40:
      case 83:
        if (player.y != 24) {
          deposition(player);
          player.y++;
          reposition(player);
          player.lastDirection = "down";
        }
        break;
      case 37:
      case 65:
        if (player.x != 0) {
          deposition(player);
          player.x--;
          reposition(player);
            player.lastDirection = "left";
        }
        break;
      case 39:
      case 68:
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
