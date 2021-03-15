function charMovement() {
  if (gamestate == whatsAnEnum.GAMEPLAY && lives > 0) {
    switch (event.keyCode) {
      case upKey:
        if (p1Y != 0){
          decolorify(charPos);
          get(charPos).innerText = "";
          p1Y--;
          charPos = `cell${p1X}_${p1Y}`;
          colorify(charPos, charColor);
          get(charPos).innerText = p1;
          lastDirection = "up";
        }
        break;
      case downKey:
        if (p1Y != 24) {
          decolorify(charPos);
          get(charPos).innerText = "";
          p1Y++;
          charPos = `cell${p1X}_${p1Y}`;
          colorify(charPos, charColor);
          get(charPos).innerText = p1;
          lastDirection = "down";
        }
        break;
      case leftKey:
        if (p1X != 0) {
          decolorify(charPos);
          get(charPos).innerText = "";
          p1X--;
          charPos = `cell${p1X}_${p1Y}`;
          colorify(charPos, charColor);
          get(charPos).innerText = p1;
            lastDirection = "left";
        }
        break;
      case rightKey:
        if (p1X != 24) {
          decolorify(charPos);
          get(charPos).innerText = "";
          p1X++;
          charPos = `cell${p1X}_${p1Y}`;
          colorify(charPos, charColor);
          get(charPos).innerText = p1;
            lastDirection = "right";
        }
        break;
    }
  }
}
