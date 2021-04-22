//score and lives
var score = 0;
var lives = 3;
var scoreGained = 250;
var easyScores = [0];
var scores = [0];
var hardScores = [0];
var highScoreEasy = 0;
var highScore = 0;
var highScoreHard = 0;
var difficultyScoreGained = 250;
var difficultyLives = 3;
var pulseSpeed = 500;
var prevHiScoreEz = 0;
var prevHiScoreNrml = 0;
var prevHiScoreHrd = 0;

//player, enemy intervals, and the sun itself (intervals and positions)
var buzz;
var guard;
var oohOoh;
var moveyBoi;
var initPulse;
var aggression;
var cdsAndResps;
var maybeFramerate = 10;
var invaderColor = "rebeccapurple";
var mineColor = "dodgerblue";
var player = {
  x: 11,
  y: 11,
  pos: `cell${this.x}_${this.y}`,
  img: "👾",
  color: "rebeccapurple",
  lastDirection: undefined
}
var sun = {
  x: 5,
  y: 11,
  pos: `cell${this.x}_${this.y}`,
  img: "🔆",
  color: "#ffe96f"
}

//gamestate and difficulty
const whatsAnEnum = {
    MENU: "menu",
    GAMEPLAY: "gameplay",
    PAUSE: "pause",
    GAMEOVER: "gameover",
    LEADERBOARD: "leaderboard"
  };
const difficultyEnum = {
    EZMODE: "easy",
    NORMALMODE: "normal",
    HARDMODE: "hard"
  };
let gamestate = whatsAnEnum.MENU;
let difficultySetting = difficultyEnum.NORMALMODE;
var lbCurrentDiff = "normal";
let difficulties = [];
var diffBoardColor = "linear-gradient(yellow, goldenrod)";
var diffBgColor = "darkgoldenrod";
var paused = false;
var diffFirstAggression = 490;
var diffSecondAggression = 245; //for the ninja

//alien vars
var mine;
let minePositions = [];
var alienSpeedSpawnThreshold = 10000;
var diffMineCap = 75;
var mineCap = 0;
var thisMAYbeBroken;

//robot vars
var stepCount = 10;
var blinker = 0;
var boltPositions = [];
var expirationDate = diffExpirationDate;
var expired = false;
var diffStepCount = 17;
var diffSickoStepCount = 10;
var diffExpirationDate = 10000;
var timesUp;
var robotSickoThreshold = 7500;
var midBolt;
var tlBolt;
var trBolt;
var blBolt;
var brBolt;

//the board
var blankColor = "#383838";

//powerups and powerup-related vars
const fire = "🔥";
const snow = "❄️";
var fireColor = "orange";
var snowColor = "deepskyblue";
var charColor = "rebeccapurple";
var sunColor = "#ffe96f";
var invaderColor = "rebeccapurple";
var ninjaColor = "dimgrey";
var uniColor = "lightcyan";
var alienColor = "chartreuse";
var roboColor = "silver";
var beeColor = "#F3C622";
var mineColor = "dodgerblue";
var throughTheFireAndFlames = [];
var frozenHeart = [];
var isActive = false;
var isGod = false;
var isGoddess = false;
var isDragon = false;
var isShielded = false;
var outOfPower;
var ninjaFrozen = false;
var unfreeze;
var sleet;
var fireFlameFlow;
var frozeLast;
var powerLifetime = 45000;
var diffPowerSpawning = 3000;
var stasisTime = 5000;
var sleetSpeed = 35;
var contact = false;
var frostbite = false;
var snowOut = false;
var flameOut = false;

//unicorn/sun vars (don't even look at these they're disgusting and i don't want to see them again)
var moveAmtT = 4;
var moveAmtR = 4;
var moveAmtB = 4;
var moveAmtL = 4;
var sunTEY = sun.y - 2;
var sunBEY = sun.y + 2;
var sunREX = sun.x + 2;
var sunLEX = sun.x - 2;
var sunTBLX = sun.x - 1;
var sunTBRX = sun.x + 1;
var sunLRTY = sun.y - 1;
var sunLRBY = sun.y + 1;
var sunHMX = sun.x;
var sunVMY = sun.y;
