var blank = "⬛";
var paused = false;


get("submitButton").addEventListener("click", updateDB);
const whatsAnEnum = {
  MENU: "menu",
  GAMEPLAY: "gameplay",
  PAUSE: "pause",
  GAMEOVER: "gameover",
  LEADERBOARD: "leaderboard"
}

var myBoard = [];
let gamestate = whatsAnEnum.MENU;

createBoard();
displayBoard();

//characters/elements
const unicorn = "🦄";
const moon = "🌝";
const sun = "🔆";
var p1 = "👾";
const bear = "🐻";
const monkey = "🐒";
const banana = "🍌";
const bee = "🐝";

document.addEventListener("keydown", shiftsInGS);

function shiftsInGS() {
  switch (event.keyCode) {
    case 13:
      if (gamestate == whatsAnEnum.MENU) {
        startup();
      }
      break;
    case 82:
      if (gamestate != whatsAnEnum.MENU) {
        gamestate = whatsAnEnum.MENU;
        reset();
      }
      break;
  }
}

function downOnTheKey(event) {
  switch (event.keyCode) {
    case 80:
      if (gamestate == whatsAnEnum.GAMEPLAY || gamestate == whatsAnEnum.PAUSE) {
        pause();
      }
      break;
    /*case 186:
      gamestate = whatsAnEnum.GAMEPLAY;
      removeElement("info");
      removeElement("title_screen");
      removeElement("buttonDiv");
      removeElement("secondaryTitleScreen");
      removeElement("wasdToggle");
      removeElement("hiScore");
      removeElement("leaderboardButton");
      removeElement("userContainer");
      get("everything").style.display = "flex";
      lives = 99999;
      get("lives").style.color = "gold";
      get("godMode").style.display = "block";
      p1 = "🌞";
      break;*/
  }
  if (gamestate == whatsAnEnum.GAMEPLAY) {
    //character movement
    if (lives > 0) {
      charMovement();
      //unicorn teleport and sun pickup
      teleport();
    }


    if (myBoard[bearX][bearY] === myBoard[p1X][p1Y]) {
      lives--;
      get("lives").innerHTML = " Lives: " + lives;
    }
    if (myBoard[moonX][moonY] === myBoard[p1X][p1Y]) {
      lives--;
      get("lives").innerHTML = " Lives: " + lives;
    }
    if (myBoard[beeX][beeY] === myBoard[p1X][p1Y]) {
      lives--;
      get("lives").innerHTML = " Lives: " + lives;
    }
    if (myBoard[monkeyX][monkeyY] === myBoard[p1X][p1Y]) {
      lives--;
      get("lives").innerHTML = " Lives: " + lives;
    }
    for (var mineObj of minePositions) {
      if (myBoard[p1X][p1Y] == myBoard[mineObj.xPos][mineObj.yPos]) {
        lives -= mineObj.damage;
        get("lives").innerHTML = " Lives: " + lives;
        break;
      }
    }
    for (var bananaObj of bananaPositions) {
      myBoard[bananaObj.xPos][bananaObj.yPos] = bananaObj.img;
      if (myBoard[p1X][p1Y] == myBoard[bananaObj.xPos][bananaObj.yPos]) {
        lives -= bananaObj.damage;
        get("lives").innerHTML = " Lives: " + lives;
        break;
      }
    }
  }
  if (gamestate == whatsAnEnum.GAMEPLAY) {
    stepCount--;
  }
}

function gameplay() {
  document.addEventListener('keydown', downOnTheKey);

  //bear
  aggression = setInterval(bearMovement, aggressionTime);

  //bee
  buzz = setInterval(beeMovement, 700);

  //moon
  moveyBoi = setInterval(moonMovement, 600);
  var theBrokenCounter = 0;

  //unicorn
  guard = setInterval(unicornMovement, 40);

  //monkey
  oohOoh = setInterval(monkeyMovement, 400);

  //life color change
  initPulse = setInterval(pulsingLifeColor, pulseSpeed);

  //the thing that runs unity update
  cdsAndResps = setInterval(cooldownsAndRespawns, 10);

  //my version of unity's update function
  function cooldownsAndRespawns() {
    if (gamestate == whatsAnEnum.GAMEPLAY) {
      myBoard[unicornX][unicornY] = unicorn;
      myBoard[bearX][bearY] = bear;
      myBoard[moonX][moonY] = moon;
      myBoard[beeX][beeY] = bee;
      myBoard[monkeyX][monkeyY] = monkey;
      for (bahnananaOhBeeJay of bananaPositions) {
        myBoard[bahnananaOhBeeJay.xPos][bahnananaOhBeeJay.yPos] = bahnananaOhBeeJay.img;
      }
      for (meenayOhBeeJay of minePositions) {
        myBoard[meenayOhBeeJay.xPos][meenayOhBeeJay.yPos] = meenayOhBeeJay.img;
      }
      myBoard[sunX][sunY] = sun;

      if (lives <= 0) {
        gamestate = whatsAnEnum.GAMEOVER;
        ded();
      }
      if (score >= 10000) {
        if (theBrokenCounter == 0) {
          theBrokenCounter = 1;
          var thisMAYbeBroken = setInterval(moonMovement, 250);
        }
      }

      if (mineCap == 75) {
        clearInterval(moveyBoi);
      }
      if (mineCap == 450) {
        clearInterval(thisMAYbeBroken);
      }
      get("score").innerHTML = `Score: ${score}`;
      get("lives").innerHTML = `Lives: ${lives}`;

      if (ranAlready === false) {
        if (lives === 1) {
          ranAlready = true;
          clearInterval(initPulse);
          clearInterval(aggression);
          let pulseSpeed = 250;
          let aggressionTime = 245;
          initPulse = setInterval(pulsingLifeColor, pulseSpeed);
          aggression = setInterval(bearMovement, aggressionTime);
        }
      }
      displayBoard();
    }
  }
}