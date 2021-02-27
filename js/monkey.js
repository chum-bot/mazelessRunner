function monkeyMovement() {
    if (gamestate == whatsAnEnum.GAMEPLAY) {
      if (score >= monkey.threshold) {
        if (stepCount <= 0) {
          midBanana = new Mine(monkey.x, monkey.y, 1, banana);
          tlBanana = new Mine(monkey.x - 1, monkey.y - 1, 1, banana);
          trBanana = new Mine(monkey.x + 1, monkey.y - 1, 1, banana);
          blBanana = new Mine(monkey.x - 1, monkey.y + 1, 1, banana);
          brBanana = new Mine(monkey.x + 1, monkey.y + 1, 1, banana);
          bananaPositions.push(midBanana, tlBanana, trBanana, blBanana, brBanana);
          timesUp = window.setTimeout(expiration, expirationDate);
          if (blinker == 0) {
            blinker = 1;
            myBoard[tlBanana.xPos][tlBanana.yPos] = tlBanana.img;
            myBoard[trBanana.xPos][trBanana.yPos] = trBanana.img;
            myBoard[blBanana.xPos][blBanana.yPos] = blBanana.img;
            myBoard[brBanana.xPos][brBanana.yPos] = brBanana.img;
          }
          else if (blinker == 1) {
            blinker = 0;
            if (score >= monkeySickoThreshold) {
              stepCount = 10;
            }
            else {
              stepCount = 17;
            }
  
            myBoard[monkey.x][monkey.y] = midBanana.img;
            monkey.x = Math.floor(Math.random() * 23) + 1;
            monkey.y = Math.floor(Math.random() * 23) + 1;
            if (myBoard[monkey.x][monkey.y] == myBoard[sunX][sunY]) {
              monkey.x = Math.floor(Math.random() * 23) + 1;
              monkey.y = Math.floor(Math.random() * 23) + 1;
            }
            for (objectOfBanana of bananaPositions) {
              if (myBoard[monkey.x][monkey.y] == myBoard[objectOfBanana.xPos][objectOfBanana.yPos]) {
                monkey.x = Math.floor(Math.random() * 23) + 1;
                monkey.y = Math.floor(Math.random() * 23) + 1;
              }
            }
            for (theMines of minePositions) {
              if (myBoard[monkey.x][monkey.y] == myBoard[theMines.xPos][theMines.yPos]) {
                monkey.x = Math.floor(Math.random() * 23) + 1;
                monkey.y = Math.floor(Math.random() * 23) + 1;
              }
            }
            myBoard[monkey.x][monkey.y] = monkey.img;
          }
        }
        myBoard[monkey.x][monkey.y] = monkey.img;
        displayBoard();
      }
    }
  }
  function expiration(){
    for(beNeeNeeObj of bananaPositions){
    myBoard[beNeeNeeObj.xPos][beNeeNeeObj.yPos] = blank;
    }
    bananaPositions.splice(0, 5);
    for(bononoObj of bananaPositions){
      myBoard[bononoObj.xPos][bononoObj.yPos] = banana;
      }
    expired = true;
  }