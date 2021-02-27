function startup() {
  createBoard();
  gameplay();
  gamestate = whatsAnEnum.GAMEPLAY;
  removeElement("info");
  removeElement("title_screen");
  removeElement("buttonDiv");
  removeElement("secondaryTitleScreen");
  removeElement("wasdToggle");
  removeElement("hiScore");
  removeElement("userContainer");
  removeElement("difficultyMessage");
  removeElement("topScores");
  removeElement("submitted");
  removeElement("discordLink");
  removeElement("easyScores");
  removeElement("normalScores");
  removeElement("hardScores");
  removeElement("earlierPatchNoteButton");
  displayFlex("everything");
  displayBlock("output_holder");
  expirationDate = diffExpirationDate;
  switch (difficultySetting) {
    case "easy":
      get("lives").style.color = "aqua";
      diffBoardColor = "linear-gradient(springgreen, seagreen)";
      diffBgColor = "limegreen";
      get("output_holder").style.backgroundImage = diffBoardColor;
      break;
    case "normal":
      get("lives").style.color = "greenyellow";
      diffBoardColor = "linear-gradient(yellow, goldenrod)";
      diffBgColor = "darkgoldenrod";
      get("output_holder").style.backgroundImage = diffBoardColor;
      break;
    case "hard":
      get("lives").style.color = "red";
      diffBoardColor = "linear-gradient(red, darkred)";
      diffBgColor = "rgb(100, 0, 0)";
      get("output_holder").style.backgroundImage = diffBoardColor;
      break;
  }
  lives = difficultyLives;
  scoreGained = difficultyScoreGained;
  score = 0;
  myBoard[uni.x][uni.y] = uni.img;
  myBoard[p1X][p1Y] = p1;
  myBoard[bear.x][bear.y] = bear.img;
  myBoard[sunX][sunY] = sun;
  myBoard[moon.x][moon.y] = moon.img;
  myBoard[monkey.x][monkey.y] = monkey.img;
  displayBoard();
  displayBlock("lives");
  document.body.style.backgroundColor = diffBgColor;
  get("output_holder").style.fontSize = "89%";
}
function ded() {
  gamestate = whatsAnEnum.GAMEOVER;
  document.body.style.background = "rgb(225,35,0)";
  isActive = false;
  removeElement("lives");
  displayBlock("game_over");
  displayBlock("ur_dead");
  get("everything").style.backgroundImage = "url(https://i.imgur.com/knQZJCq.jpg)";
  get("everything").style.backgroundSize = "100% 100%";
  get("everything").style.backgroundRepeat = "no-repeat";
  get("everything").style.backgroundAttachment = "fixed";
  get("output_holder").style.opacity = "0";
  get("output_holder").style.fontSize = "78%";
  scores.push(score);
  difficulties.push(difficultySetting);
  document.removeEventListener("keydown", downOnTheKey);
  bear.speed = diffFirstAggression;
  pulseSpeed = 500;
  mineCap = 0;
  window.clearInterval(initPulse);
  window.clearInterval(cdsAndResps);
  window.clearInterval(buzz);
  window.clearInterval(oohOoh);
  window.clearInterval(guard);
  window.clearInterval(aggression);
  window.clearInterval(moveyBoi);
  window.clearInterval(bee.idStorage);
  window.clearInterval(monkey.idStorage);
  window.clearInterval(uni.idStorage);
  window.clearInterval(bear.idStorage);
  window.clearInterval(moon.idStorage);
  window.clearTimeout(timesUp);
  window.clearTimeout(unfreeze);
  window.clearInterval(sleet);
  window.clearInterval(fireFlameFlow);
  window.clearTimeout(outOfPower);
  throughTheFireAndFlames.splice(0, throughTheFireAndFlames.length);
  frozenHeart.splice(0, frozenHeart.length);
  p1 = invader;
  isActive = false;
  isGod = false;
  isSnow = false;
  isDragon = false;
  isShielded = false;
  uniFrozeOnce = false;
  beeFrozeOnce = false;
  bearFrozeOnce = false;
  moonFrozeOnce = false;
  monkeyFrozeOnce = false;
}
function reset() {
  createBoard();
  gamestate = whatsAnEnum.MENU;
  displayBlock("title_screen");
  displayBlock("info");
  get("info").innerHTML = "";
  displayFlex("buttonDiv");
  displayBlock("secondaryTitleScreen");
  displayBlock("wasdToggle");
  displayBlock("discordLink");
  document.body.style.backgroundColor = "rgb(19, 57, 100)";
  removeElement("game_over");
  displayBlock("difficultyMessage");
  removeElement("ur_dead");
  highScore = Math.max.apply(null, scores);
  get("hiScore").innerText = `High Score: ${highScore} (${difficulties[scores.indexOf(highScore)]} mode)`;
  displayBlock("hiScore");
  displayBlock("userContainer");
  get("everything").style.backgroundImage = "";
  get("output_holder").style.opacity = "100";
  removeElement("output_holder");
  bee.x = 16;
  bee.y = 8;
  moon.x = 24;
  moon.y = 24;
  bear.x = 8;
  bear.y = 24;
  sunX = 5;
  sunY = 11;
  p1X = 11;
  p1Y = 11;
  monkey.x = 14;
  monkey.y = 21;
  uni.x = 3;
  uni.y = 9;
  powerX = undefined;
  powerY = undefined;
  minePositions = [];
  bananaPositions = [];
  myBoard[uni.x][uni.y] = uni.img;
  myBoard[p1X][p1Y] = p1;
  myBoard[bear.x][bear.y] = bear.img;
  myBoard[sunX][sunY] = sun;
  myBoard[moon.x][moon.y] = moon.img;
  myBoard[monkey.x][monkey.y] = monkey.img;
  displayBoard();
}
function pause() {
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
      get("everything").style.backgroundImage = "url('pixil-frame-0 (3).png')";
      get("everything").style.backgroundSize = "100% 100%";
      get("everything").style.backgroundPosition = "center";
      get("everything").style.backgroundRepeat = "no-repeat";
      get("everything").style.backgroundAttachment = "fixed";
      get("output_holder").style.opacity = "0.6";
      break;
  }
}
function difficultySwitch() {
  switch (difficultySetting) {
    case difficultyEnum.HARDMODE:
      difficultySetting = difficultyEnum.EZMODE;
      difficultyLives = 5;
      difficultyScoreGained = 300;
      bee.threshold = 1500;
      bee.speed = 800;
      uni.threshold = 3000;
      uni.speed = 50;
      moon.threshold = 6000;
      moon.speed = 750;
      monkey.threshold = 4500;
      monkey.speed = 500;
      diffPowerSpawning = 4500;
      monkeySickoThreshold = 9000;
      diffStepCount = 30;
      diffSickoStepCount = 15;
      moonSpeedSpawnThreshold = 15000;
      bear.speed = 650;
      diffFirstAggression = 650;
      diffSecondAggression = 325;
      diffMineCap = 60;
      diffExpirationDate = 20000;
      get("difficultyMessage").innerHTML = "The game is now on <span id='easy'>EASY</span> mode. The enemies are more tame, you gain score faster, and you have 5 lives.";
      
      break;
    case difficultyEnum.EZMODE:
      difficultySetting = difficultyEnum.NORMALMODE;
      difficultyLives = 3;
      difficultyScoreGained = 250;
      bee.threshold = 1000;
      bee.speed = 700;
      uni.threshold = 2000;
      uni.speed = 40;
      moon.threshold = 5000;
      moon.speed = 600;
      monkey.threshold = 3000;
      monkey.speed = 400;
      diffPowerSpawning = 3000;
      monkeySickoThreshold = 7500;
      diffStepCount = 20;
      diffSickoStepCount = 10;
      moonSpeedSpawnThreshold = 10000;
      bear.speed = 490;
      diffFirstAggression = 490;
      diffSecondAggression = 245;
      diffMineCap = 75;
      diffExpirationDate = 30000;
      get("difficultyMessage").innerHTML = "The game is now on <span id='normal'>NORMAL</span> mode. The enemies are normal, you gain score at a normal rate, and you have 3 lives.";
      break;
    case difficultyEnum.NORMALMODE:
      difficultySetting = difficultyEnum.HARDMODE;
      difficultyLives = 1;
      difficultyScoreGained = 200;
      bee.threshold = 600;
      bee.speed = 500;
      uni.threshold = 1200;
      uni.speed = 25;
      moon.threshold = 3000;
      moon.speed = 400;
      monkey.threshold = 1800;
      monkey.speed = 300;
      diffPowerSpawning = 1800;
      monkeySickoThreshold = 4000;
      diffStepCount = 10;
      diffSickoStepCount = 5;
      moonSpeedSpawnThreshold = 6000;
      diffFirstAggression = 325;
      diffSecondAggression = 250;
      diffMineCap = 90;
      diffExpirationDate = 40000;
      get("difficultyMessage").innerHTML = "The game is now on <span id='hard'>HARD</span> mode. The enemies are more aggressive, you gain score slower, and you have only one life. Good luck.";
      break;
  }
}