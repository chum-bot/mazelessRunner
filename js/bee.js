function beeMovement() {
  if (gamestate == whatsAnEnum.GAMEPLAY) {
    if (score >= bee.threshold) {
      var bee1stMove = Math.floor((Math.random() * 4) + 1);
      var bee2ndMove = Math.floor((Math.random() * 4) + 1);
      reposition(bee);
      switch (bee1stMove) {
        case 1:
          if (bee.y == 0 || bee.y == 1) {
            bee1stMove = 2;
            bee2ndMove = 2;
          } else {
            deposition(bee);
            bee.y--;
            reposition(bee);
          }
          break;
        case 2:
          if (bee.y == 24 || bee.y == 23) {
            bee1stMove = 1;
            bee2ndMove = 1;
          } else {
            deposition(bee);
            bee.y++;
            reposition(bee);
          }
          break;
        case 3:
          if (bee.x == 0 || bee.x == 1) {
            bee1stMove = 4;
            bee2ndMove = 4;
          } else {
            deposition(bee);
            bee.x--;
            reposition(bee);
          }
          break;
        case 4:
          if (bee.x == 24 || bee.x == 23) {
            bee1stMove = 3;
            bee2ndMove = 3;
          } else {
            deposition(bee);
            bee.x++;
            reposition(bee);
          }
          break;
      }
      switch (bee.y) {
        case 1:
        case 0:
          bee1stMove = 2;
          bee2ndMove = 2;
          break;
        case 24:
        case 23:
          bee1stMove = 1;
          bee2ndMove = 1;
          break;
      }
      switch (bee.x) {
        case 1:
        case 0:
          bee1stMove = 4;
          bee2ndMove = 4;
          break;
        case 24:
        case 23:
          bee1stMove = 3;
          bee2ndMove = 3;
          break;
      }
      switch (bee2ndMove) {
        case 1:
          deposition(bee);
          bee.y -= 2;
          reposition(bee);
          break;
        case 2:
          deposition(bee);
          bee.y += 2;
          reposition(bee);
          break;
        case 3:
          deposition(bee);
          bee.x -= 2;
          reposition(bee);
          break;
        case 4:
          deposition(bee);
          bee.x += 2;
          reposition(bee);
          break;
      }
    }
  }
}