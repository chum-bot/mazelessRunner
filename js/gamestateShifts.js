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
  myBoard[unicornX][unicornY] = unicorn;
  myBoard[p1X][p1Y] = p1;
  myBoard[bearX][bearY] = bear;
  myBoard[sunX][sunY] = sun;
  myBoard[moonX][moonY] = moon;
  myBoard[monkeyX][monkeyY] = monkey;
  displayBoard();
  displayBlock("lives");
  document.body.style.backgroundColor = diffBgColor;
  get("output_holder").style.fontSize = "89%";
}
function ded() {
  gamestate = whatsAnEnum.GAMEOVER;
  document.body.style.background = "rgb(225,35,0)";
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
  aggressionTime = 400;
  pulseSpeed = 500;
  mineCap = 0;
  clearInterval(initPulse);
  clearInterval(cdsAndResps);
  clearInterval(buzz);
  clearInterval(oohOoh);
  clearInterval(guard);
  clearInterval(aggression);
  clearInterval(moveyBoi);
  clearTimeout(timesUp);
  ranAlready = false;
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
  beeX = 16;
  beeY = 8;
  moonX = 24;
  moonY = 24;
  bearX = 8;
  bearY = 24;
  sunX = 5;
  sunY = 11;
  p1X = 11;
  p1Y = 11;
  monkeyX = 14;
  monkeyY = 21;
  unicornX = 3;
  unicornY = 9;
  minePositions = [];
  bananaPositions = [];
  myBoard[unicornX][unicornY] = unicorn;
  myBoard[p1X][p1Y] = p1;
  myBoard[bearX][bearY] = bear;
  myBoard[sunX][sunY] = sun;
  myBoard[moonX][moonY] = moon;
  myBoard[monkeyX][monkeyY] = monkey;
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
      beeThreshold = 1500;
      buzzTime = 800;
      uniThreshold = 3000;
      uniSpeed = 50;
      moonThreshold = 6000;
      moonSkip = 750;
      monkeyThreshold = 4500;
      monkeyBoi = 500;
      monkeySickoThreshold = 9000;
      diffStepCount = 30;
      diffSickoStepCount = 15;
      moonSpeedSpawnThreshold = 15000;
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
      beeThreshold = 1000;
      buzzTime = 700;
      uniThreshold = 2000;
      uniSpeed = 40;
      moonThreshold = 5000;
      moonSkip = 600;
      monkeyThreshold = 3000;
      monkeyBoi = 400;
      monkeySickoThreshold = 7500;
      diffStepCount = 20;
      diffSickoStepCount = 10;
      moonSpeedSpawnThreshold = 10000;
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
      beeThreshold = 600;
      buzzTime = 500;
      uniThreshold = 1200;
      uniSpeed = 25;
      moonThreshold = 3000;
      moonSkip = 400;
      monkeyThreshold = 1800;
      monkeyBoi = 300;
      monkeySickoThreshold = 4000;
      diffStepCount = 10;
      diffSickoStepCount = 5;
      moonSpeedSpawnThreshold = 6000;
      diffSecondAggression = 250;
      diffMineCap = 90;
      diffExpirationDate = 40000;
      get("difficultyMessage").innerHTML = "The game is now on <span id='hard'>HARD</span> mode. The enemies are more aggressive, you gain score slower, and you have only one life. Good luck.";
      break;
  }

}