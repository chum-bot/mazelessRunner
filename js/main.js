var blank = "🔲";
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
const croc = "🐊";
const moon = "🌚";
const energy = "🔆";
var p1 = "👾";
const frog = "🐸";
const shark = "🦈";
const monkey = "🐒";
const banana = "🍌";
const bee = "🐝";
var ranAlready = false;

//actions on key press
document.addEventListener('keydown', function (event) {
  event.preventDefault();
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
    case 13:
      if (gamestate != whatsAnEnum.GAMEOVER) {
        startup();
      }
      break;
    case 82:
      gamestate = whatsAnEnum.MENU;
      reset();
      break;
  }
  if (gamestate == whatsAnEnum.GAMEPLAY) {
    //character and frog movement
    if (lives > 0) {
      charAndFrogMovement();
      //croc teleport and energy pickup
      teleport();
    }

    if (myBoard[frogX][frogY] === myBoard[p1X][p1Y]) {
      lives--;
      get("lives").innerHTML = " Lives: " + lives;
    }
    if (myBoard[sharkX][sharkY] === myBoard[p1X][p1Y]) {
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
  stepCount--;
});

//shark
var aggression = setInterval(sharkMovement, aggressionTime);

//bee
setInterval(beeMovement, 700);

//moon
var mineCap = 0;
var moveyBoi = setInterval(moonMovement, 470);
let minePositions = [];
var theBrokenCounter = 0;

//croc
setInterval(crocMovement, 35);

//monkey
setInterval(monkeyMovement, 400);

//life color change
var initPulse = setInterval(pulsingLifeColor, pulseSpeed);

//my version of unity's update function
function cooldownsAndRespawns() {
  if (gamestate == whatsAnEnum.GAMEPLAY) {
    myBoard[crocX][crocY] = croc;
    myBoard[sharkX][sharkY] = shark;
    myBoard[moonX][moonY] = moon;
    myBoard[beeX][beeY] = bee;
    myBoard[monkeyX][monkeyY] = monkey;
    for (bahnananaOhBeeJay of bananaPositions) {
      myBoard[bahnananaOhBeeJay.xPos][bahnananaOhBeeJay.yPos] = bahnananaOhBeeJay.img;
    }
    for (meenayOhBeeJay of minePositions) {
      myBoard[meenayOhBeeJay.xPos][meenayOhBeeJay.yPos] = meenayOhBeeJay.img;
    }
    myBoard[energyX][energyY] = energy;

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
    if (mineCap == 300) {
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
        let aggressionTime = 220;
        setInterval(pulsingLifeColor, pulseSpeed);
        setInterval(sharkMovement, aggressionTime);
      }
    }
    displayBoard();
  }
}
var cdsAndResps = setInterval(cooldownsAndRespawns, 10);