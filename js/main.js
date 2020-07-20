var blank = "🔲";
var paused = false;
//QoL function
function get(thingToGet) {
  return document.getElementById(thingToGet);
}

function createBoard() {
  myBoard = [];
  //board creation
  for (var x = 0; x < 20; x++) {
    myBoard[x] = [];

    for (var y = 0; y < 20; y++) {
      myBoard[x][y] = blank;
    }
  }
}

const whatsAnEnum = {
  MENU: "menu",
  GAMEPLAY: "gameplay",
  PAUSE: "pause",
  GAMEOVER: "gameover"
}
var timer = 0.00;
var myBoard = [];
let gamestate = whatsAnEnum.MENU;

function displayBoard() {
  get('output_holder').innerHTML = '';
  var outputString = '';

  for (var y = 0; y < myBoard.length; y++) {
    for (var x = 0; x < myBoard[y].length; x++) {
      outputString = outputString + myBoard[x][y];
    }
    outputString = outputString + "</br>";
  }
  get('output_holder').innerHTML = outputString;
}


//score and lives
var score = 0;
var lives = 3;
//weird title screen thing
var why = 1;
//monkey vars
var stepCount = 10;
var blinker = 0;
var bananaPositions = [];
//respawn of characters and elements
var respawn = 1;
//characters and elements
var pulseSpeed = 500;
var frogX = 3;
var frogY = 3;
var beeX = 11;
var beeY = 3;
var moonX = 19;
var moonY = 19;
var sharkX = 8;
var sharkY = 19;
var energyX = 5;
var energyY = 11;
var p1X = 7;
var p1Y = 7;
var monkeyX = 12;
var monkeyY = 5;
var crocX = 3;
var crocY = 9;
const croc = "🐊";
const moon = "🌚";
const energy = "🔆";
var p1 = "👾";
const frog = "🐸";
const shark = "🦈";
const monkey = "🐒"
const banana = "🍌"
const bee = "🐝"
var upKey = 38;
var downKey = 40;
var leftKey = 37;
var rightKey = 39;
var wasdCheck = false;
var ranAlready = false;
//croc variables (the ones with energy affect croc on energy pickup) (i feel like there's a better way to do this tho...)
var dontKnowSetTimeoutLol = 0;
var moveAmtT = 4;
var moveAmtR = 4;
var moveAmtB = 4;
var moveAmtL = 4;
var energyTEY = energyY - 2;
var energyBEY = energyY + 2;
var energyREX = energyX + 2;
var energyLEX = energyX - 2;
var energyTBLX = energyX - 1;
var energyTBRX = energyX + 1;
var energyLRTY = energyY - 1;
var energyLRBY = energyY + 1;
var energyHMX = energyX;
var energyVMY = energyY;
//shark variables
var disX = Math.abs(p1X - sharkX);
var disY = Math.abs(p1Y - sharkY);
var aggressionTime = 450;

//mines(OPTIMIZING because it can and should be)
//well now that im in vscode i COULD make a different file for this... nah
class Mine {
  constructor(xPos, yPos, damage, img) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.damage = damage;
    this.img = img;
  }
}

//ded function lol
function ded() {
  document.body.style.background = "rgb(225,35,0)";
  get("lives").style.display = "none";
  get("game_over").style.display = "block";
  get("ur_dead").style.display = "block";
  get("everything").style.backgroundImage = "url(https://i.imgur.com/knQZJCq.jpg)";
  get("everything").style.backgroundSize = "100% 100%";
  get("everything").style.backgroundRepeat = "no-repeat";
  get("everything").style.backgroundSize = "100% 100%";
  get("everything").style.backgroundAttachment = "fixed";
  get("output_holder").style.opacity = "0";
  get("output_holder").style.fontSize = "90%";
}

//element removal
function removeElement() {
  get("title_screen").style.display = "none";
  get("info").style.display = "none";
  get("buttonDiv").style.display = "none";
  get("secondaryTitleScreen").style.display = "none";
  get("wasdToggle").style.display = "none";
}

function reset() {
  createBoard();
  gamestate = whatsAnEnum.MENU;
  get("title_screen").style.display = "block";
  get("info").style.display = "block";
  get("info").innerHTML = "";
  get("buttonDiv").style.display = "flex";
  get("secondaryTitleScreen").style.display = "block";
  get("wasdToggle").style.display = "block";
  document.body.style.backgroundColor = "rgb(19, 57, 100)";
  get("game_over").style.display = "none";
  get("ur_dead").style.display = "none";
  get("everything").style.backgroundImage = "";
  lives = 3;
  score = 0;
  get("output_holder").style.opacity = "100";
  get("output_holder").style.display = "none";
  frogX = 3;
  frogY = 3;
  beeX = 11;
  beeY = 3;
  moonX = 19;
  moonY = 19;
  sharkX = 8;
  sharkY = 19;
  energyX = 5;
  energyY = 11;
  p1X = 7;
  p1Y = 7;
  monkeyX = 12;
  monkeyY = 5;
  crocX = 3;
  crocY = 9;
  minePositions = [];
  bananaPositions = [];
  myBoard[crocX][crocY] = croc;
  myBoard[p1X][p1Y] = p1;
  myBoard[frogX][frogY] = frog;
  myBoard[sharkX][sharkY] = shark;
  myBoard[energyX][energyY] = energy;
  myBoard[moonX][moonY] = moon;
  myBoard[monkeyX][monkeyY] = monkey;
  displayBoard();
}
function pause(){
  switch (paused) {
    case true:
      paused = false;
      gamestate = whatsAnEnum.GAMEPLAY;
      get("output_holder").style.opacity = "1";
      get("everything").style.backgroundImage = "none";
      break;
    case false:
      paused = true;
      gamestate = whatsAnEnum.PAUSE;
      get("everything").style.backgroundImage = "url(https://icon-library.com/images/pause-icon-transparent/pause-icon-transparent-16.jpg)";
      get("everything").style.backgroundPosition = "center";
      get("everything").style.backgroundRepeat = "no-repeat";
      get("everything").style.backgroundAttachment = "fixed";
      get("output_holder").style.opacity = "0.6";
      break;
  }
}
function startup() {
  createBoard();
  gamestate = whatsAnEnum.GAMEPLAY;
  removeElement();
  get("everything").style.display = "flex";
  get("output_holder").style.display = "block";
  get("lives").style.color = "aqua";
  myBoard[crocX][crocY] = croc;
  myBoard[p1X][p1Y] = p1;
  myBoard[frogX][frogY] = frog;
  myBoard[sharkX][sharkY] = shark;
  myBoard[energyX][energyY] = energy;
  myBoard[moonX][moonY] = moon;
  myBoard[monkeyX][monkeyY] = monkey;
  timer = 0.00;
  displayBoard();
  get("lives").style.display = "block";
  get("output_holder").style.fontSize = "102%";
}
function wasd() {
  switch (wasdCheck) {
    case true:
      upKey = 38;
      downKey = 40;
      leftKey = 37;
      rightKey = 39;
      get("wasdToggle").innerHTML = "WASD is now OFF.";
      wasdCheck = false;
      break;

    case false:
      upKey = 87;
      downKey = 83;
      leftKey = 65;
      rightKey = 68;
      get("wasdToggle").innerHTML = "WASD is now ON.";
      wasdCheck = true;
      break;
  }
}

//actions on key press
document.addEventListener('keydown', function (event) {
  event.preventDefault();
  switch (event.keyCode) {
    case 80:
      if(gamestate == whatsAnEnum.GAMEPLAY){
        pause();
      }
      break;
    case 186:
      gamestate = whatsAnEnum.GAMEPLAY;
      removeElement();
      get("everything").style.display = "flex";
      lives = 99999;
      get("lives").style.color = "gold";
      get("godMode").style.display = "block";
      p1 = "🌞";
      break;
    case 13:
      if (gamestate == whatsAnEnum.MENU) {
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
setInterval(beeMovement, 750);

//moon
var mineCap = 0;
var moveyBoi = setInterval(moonMovement, 500);
let minePositions = [];
var theBrokenCounter = 0;

//croc
setInterval(crocMovement, 40);

//monkey
setInterval(monkeyMovement, 450);

//life color change
var initPulse = setInterval(pulsingLifeColor, pulseSpeed);

//my version of unity's update function
function cooldownsAndRespawns() {
  if (gamestate == whatsAnEnum.GAMEPLAY) {
    get("time").innerHTML = `Time: ${timer.toFixed(2)}`;
    timer += 0.01;
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
        let aggressionTime = 270;
        setInterval(pulsingLifeColor, pulseSpeed);
        setInterval(sharkMovement, aggressionTime);
      }
    }
    displayBoard();
  }
}
setInterval(cooldownsAndRespawns, 10);