function startup() {
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
      diffBoardColor = "linear-gradient(#9191e9, darkslateblue)";
      diffBgColor = "indigo";
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
  createBoard();
  for(i = 0; i < document.getElementsByClassName("cells").length; i++){
    document.getElementsByClassName("cells")[i].style.width = "15px";
    document.getElementsByClassName("cells")[i].style.height = "15px";
    document.getElementsByClassName("cells")[i].style.fontSize = "65%";
  }
  reposition(uni);
  nonEnemRepos(charPos, p1X, p1Y, charColor, p1);
  reposition(ninja);
  nonEnemRepos(sunPos, sunX, sunY, sunColor, sun);
  reposition(alien);
  reposition(robot);
  reposition(bee);
  displayBlock("lives");
  displayBlock("gameboard");
  document.body.style.backgroundColor = diffBgColor;
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
  for(i = 0; i < document.getElementsByClassName("cells").length; i++){
    document.getElementsByClassName("cells")[i].style.width = "10px";
    document.getElementsByClassName("cells")[i].style.height = "10px";
    document.getElementsByClassName("cells")[i].style.fontSize = "50%";
  }
  scores.push(score);
  difficulties.push(difficultySetting);
  document.removeEventListener("keydown", downOnTheKey);
  ninja.speed = diffFirstAggression;
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
  window.clearInterval(robot.idStorage);
  window.clearInterval(uni.idStorage);
  window.clearInterval(ninja.idStorage);
  window.clearInterval(alien.idStorage);
  window.clearTimeout(timesUp);
  window.clearTimeout(unfreeze);
  window.clearInterval(sleet);
  window.clearInterval(fireFlameFlow);
  throughTheFireAndFlames.splice(0, throughTheFireAndFlames.length);
  frozenHeart.splice(0, frozenHeart.length);
  p1 = invader;
  charColor = invaderColor;
  isActive = false;
  isGod = false;
  isGoddess = false;
  isDragon = false;
  isShielded = false;
}
function reset() {
  destroy("gameboard");
  gamestate = whatsAnEnum.MENU;
  displayBlock("title_screen");
  displayBlock("info");
  get("info").innerHTML = "";
  displayFlex("buttonDiv");
  displayBlock("secondaryTitleScreen");
  displayBlock("wasdToggle");
  displayBlock("discordLink");
  document.body.style.backgroundColor = "midnightblue";
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
  alien.x = 24;
  alien.y = 24;
  ninja.x = 8;
  ninja.y = 24;
  sunX = 5;
  sunY = 11;
  p1X = 11;
  p1Y = 11;
  robot.x = 14;
  robot.y = 21;
  uni.x = 3;
  uni.y = 9;
  uni.pos = `cell${uni.x}_${uni.y}`;
  charPos = `cell${p1X}_${p1Y}`;
  ninja.pos = `cell${ninja.x}_${ninja.y}`;
  sunPos = `cell${sunX}_${sunY}`;
  alien.pos = `cell${alien.x}_${alien.y}`;
  robot.pos = `cell${robot.x}_${robot.y}`;
  powerX = undefined;
  powerY = undefined;
  minePositions = [];
  boltPositions = [];
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
      alien.threshold = 6000;
      alien.speed = 750;
      robot.threshold = 4500;
      robot.speed = 500;
      diffPowerSpawning = 4500;
      robotSickoThreshold = 9000;
      diffStepCount = 30;
      diffSickoStepCount = 15;
      alienSpeedSpawnThreshold = 15000;
      ninja.speed = 650;
      diffFirstAggression = 650;
      diffSecondAggression = 325;
      diffMineCap = 60;
      diffExpirationDate = 20000;
      get("difficultyMessage").innerHTML = "The game is on <span id='easy'>EASY</span> mode. The enemies are more tame, you gain score faster, and you have 5 lives.";
      
      break;
    case difficultyEnum.EZMODE:
      difficultySetting = difficultyEnum.NORMALMODE;
      difficultyLives = 3;
      difficultyScoreGained = 250;
      bee.threshold = 1000;
      bee.speed = 700;
      uni.threshold = 2000;
      uni.speed = 40;
      alien.threshold = 5000;
      alien.speed = 600;
      robot.threshold = 3000;
      robot.speed = 400;
      diffPowerSpawning = 3000;
      robotSickoThreshold = 7500;
      diffStepCount = 20;
      diffSickoStepCount = 10;
      alienSpeedSpawnThreshold = 10000;
      ninja.speed = 490;
      diffFirstAggression = 490;
      diffSecondAggression = 245;
      diffMineCap = 75;
      diffExpirationDate = 30000;
      get("difficultyMessage").innerHTML = "The game is on <span id='normal'>NORMAL</span> mode. The enemies are normal, you gain score at a normal rate, and you have 3 lives.";
      break;
    case difficultyEnum.NORMALMODE:
      difficultySetting = difficultyEnum.HARDMODE;
      difficultyLives = 1;
      difficultyScoreGained = 200;
      bee.threshold = 600;
      bee.speed = 500;
      uni.threshold = 1200;
      uni.speed = 25;
      alien.threshold = 3000;
      alien.speed = 400;
      robot.threshold = 1800;
      robot.speed = 300;
      diffPowerSpawning = 1800;
      robotSickoThreshold = 4000;
      diffStepCount = 10;
      diffSickoStepCount = 5;
      alienSpeedSpawnThreshold = 6000;
      diffFirstAggression = 325;
      diffSecondAggression = 250;
      diffMineCap = 90;
      diffExpirationDate = 40000;
      get("difficultyMessage").innerHTML = "The game is on <span id='hard'>HARD</span> mode. The enemies are more aggressive, you gain score slower, and you have only one life. Good luck.";
      break;
  }
}