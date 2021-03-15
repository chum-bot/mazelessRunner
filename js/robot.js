function robotMovement() {
    if (gamestate == whatsAnEnum.GAMEPLAY) {
      if (score >= robot.threshold) {
        if (stepCount <= 0) {
          midBolt = new Mine(robot.x, robot.y, 1, bolt);
          tlBolt = new Mine(robot.x - 1, robot.y - 1, 1, bolt);
          trBolt = new Mine(robot.x + 1, robot.y - 1, 1, bolt);
          blBolt = new Mine(robot.x - 1, robot.y + 1, 1, bolt);
          brBolt = new Mine(robot.x + 1, robot.y + 1, 1, bolt);
          boltPositions.push(midBolt, tlBolt, trBolt, blBolt, brBolt);
          timesUp = window.setTimeout(expiration, expirationDate);
          if (blinker == 0) {
            blinker = 1;
            colorify(tlBolt.pos, robot.color);
            colorify(trBolt.pos, robot.color);
            colorify(blBolt.pos, robot.color);
            colorify(brBolt.pos, robot.color);
            get(tlBolt.pos).innerText = tlBolt.img;
            get(trBolt.pos).innerText = trBolt.img;
            get(blBolt.pos).innerText = blBolt.img;
            get(brBolt.pos).innerText = brBolt.img;
          }
          else if (blinker == 1) {
            blinker = 0;
            if (score >= robotSickoThreshold) {
              stepCount = 10;
            }
            else {
              stepCount = 17;
            }

            colorify(robot.pos, robot.color);
            get(robot.pos).innerText = midBolt.img;
            robot.x = Math.floor(Math.random() * 23) + 1;
            robot.y = Math.floor(Math.random() * 23) + 1;
            if (robot.pos == sunPos) {
              robot.x = Math.floor(Math.random() * 23) + 1;
              robot.y = Math.floor(Math.random() * 23) + 1;
            }
            for (objectOfBolt of boltPositions) {
              if (robot.pos == objectOfBolt.pos) {
                robot.x = Math.floor(Math.random() * 23) + 1;
                robot.y = Math.floor(Math.random() * 23) + 1;
              }
            }
            for (theMines of minePositions) {
              if (robot.pos == theMines.pos) {
                robot.x = Math.floor(Math.random() * 23) + 1;
                robot.y = Math.floor(Math.random() * 23) + 1;
              }
            }
            reposition(robot);
          }
        }
        reposition(robot);
      }
    }
  }
  function expiration(){
    for(boltNoThunder of boltPositions){
    decolorify(boltNoThunder.pos);
    get(boltNoThunder.pos).innerText = "";
    }
    boltPositions.splice(0, 5);
    for(boltNoLightning of boltPositions){
      colorify(boltNoLightning.pos, robot.color);
      get(boltNoLightning.pos).innerText = bolt;
      }
    expired = true;
  }