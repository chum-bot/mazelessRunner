function uniMovement() {
  if (gamestate == whatsAnEnum.GAMEPLAY) {
    if (score >= uni.threshold) {
      if (lives > 0) {
        myBoard[p1X][p1Y] = p1;
        if (moveAmtT == 0 && moveAmtR == 0 && moveAmtB == 0 && moveAmtL == 0) {
          moveAmtT = 4;
          moveAmtR = 4;
          moveAmtB = 4;
          moveAmtL = 4;
        }
        if (moveAmtT > 0) {
          myBoard[uni.x][uni.y] = blank;
          uni.x++;
          myBoard[uni.x][uni.y] = uni.img;
          moveAmtT--;
        } else if (moveAmtR > 0) {
          myBoard[uni.x][uni.y] = blank;
          uni.y++;
          myBoard[uni.x][uni.y] = uni.img;
          moveAmtR--;
        } else if (moveAmtB > 0) {
          myBoard[uni.x][uni.y] = blank;
          uni.x--;
          myBoard[uni.x][uni.y] = uni.img;
          moveAmtB--;
        } else if (moveAmtL > 0) {
          myBoard[uni.x][uni.y] = blank;
          uni.y--;
          myBoard[uni.x][uni.y] = uni.img;
          moveAmtL--;
        }
        uni.collision();
      }
      myBoard[uni.x][uni.y] = uni.img;
    }
  }
}