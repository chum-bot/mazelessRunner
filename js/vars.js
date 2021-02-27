//score and lives
var score = 0;
var lives = 3;
var scoreGained = 250;
var scores = [];
var highScore = 0;
var difficultyScoreGained = 250;
var difficultyLives = 3;
var pulseSpeed = 500;

//random variables that i used due to lack of skill
var why = 1;
var dontKnowSetTimeoutLol = true;

//player, enemies, and the sun itself (intervals and positions)
var buzz;
var guard;
var oohOoh;
var moveyBoi;
var initPulse;
var aggression;
var cdsAndResps;
var lastDirection;
var maybeFramerate = 10;
var p1X = 11;
var p1Y = 11;
var sunX = 5;
var sunY = 11;

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
var diffSecondAggression = 245; //for the bear

//moon vars
var mine;
let minePositions = [];
var moonSpeedSpawnThreshold = 10000;
var diffMineCap = 75;
var mineCap = 0;

//monkey vars
var stepCount = 10;
var blinker = 0;
var bananaPositions = [];
var expirationDate = diffExpirationDate;
var expired = false;
var diffStepCount = 17;
var diffSickoStepCount = 10;
var diffExpirationDate = 10000;
var timesUp;
var monkeySickoThreshold = 7500;
var midBanana;
var tlBanana;
var trBanana;
var blBanana;
var brBanana;

//wasd toggle
var upKey = 38;
var downKey = 40;
var leftKey = 37;
var rightKey = 39;
var wasdCheck = false;

//the board and the box
var myBoard = [];
var blank = "⬛";

//powerups and powerup-related vars
const playerGodMode = "🌞";
const godModeItem = "☀️";
const playerDragon = "🐉";
const dragonItem = "🐲";
const fire = "🔥";
const playerSnowman = "☃️";
const snowmanItem = "🧊";
const snow = "❄️";
const randomItem = "🎲";
const shieldItem = "🧿";
const playerShield = "💂‍♂️";
const miniSunItem = "🔅";
const extraLifeItem = "💖";
var throughTheFireAndFlames = [];
var frozenHeart = [];
var activePower;
var isActive = false;
var isGod = false;
var isSnow = false;
var isDragon = false;
var isShielded = false;
var randPow;
var outOfPower;
var bearFrozen = false;
var powerX;
var powerY;
var unfreeze;
var sleet;
var fireFlameFlow;
var frozeLast;
var godModeDuration = 7000;
var dragonDuration = 12000;
var shieldDuration = 30000;
var snowmanDuration = 12000;
var powerLifetime = 45000;
var diffPowerSpawning = 3000;
var stasisTime = 5000;
var sleetSpeed = 35;
var contact = false;
var frostbite = false;
var snowOut = false;

//unicorn/sun vars (don't even look at these they're disgusting and i don't want to see them again)
var moveAmtT = 4;
var moveAmtR = 4;
var moveAmtB = 4;
var moveAmtL = 4;
var sunTEY = sunY - 2;
var sunBEY = sunY + 2;
var sunREX = sunX + 2;
var sunLEX = sunX - 2;
var sunTBLX = sunX - 1;
var sunTBRX = sunX + 1;
var sunLRTY = sunY - 1;
var sunLRBY = sunY + 1;
var sunHMX = sunX;
var sunVMY = sunY;
