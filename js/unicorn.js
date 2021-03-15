function uniMovement() {
  if (gamestate == whatsAnEnum.GAMEPLAY) {
    if (score >= uni.threshold) {
      if (lives > 0) {
        get(charPos).innerText = p1;
        if (moveAmtT == 0 && moveAmtR == 0 && moveAmtB == 0 && moveAmtL == 0) {
          moveAmtT = 4;
          moveAmtR = 4;
          moveAmtB = 4;
          moveAmtL = 4;
        }
        if (moveAmtT > 0) {
          deposition(uni);
          uni.x++;
          reposition(uni);
          moveAmtT--;
        } else if (moveAmtR > 0) {
          deposition(uni);
          uni.y++;
          reposition(uni);
          moveAmtR--;
        } else if (moveAmtB > 0) {
          deposition(uni);
          uni.x--;
          reposition(uni);
          moveAmtB--;
        } else if (moveAmtL > 0) {
          deposition(uni);
          uni.y--;
          reposition(uni);
          moveAmtL--;
        }
        collision(uni);
      }
      reposition(uni);
    }
  }
}