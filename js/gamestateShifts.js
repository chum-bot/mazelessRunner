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
    removeElement("topScores");
    removeElement("submitted");
    displayFlex("everything");
    displayBlock("output_holder");
    get("lives").style.color = "aqua";    
    lives = 3;
    score = 0;
    myBoard[crocX][crocY] = croc;
    myBoard[p1X][p1Y] = p1;
    myBoard[frogX][frogY] = frog;
    myBoard[sharkX][sharkY] = shark;
    myBoard[energyX][energyY] = energy;
    myBoard[moonX][moonY] = moon;
    myBoard[monkeyX][monkeyY] = monkey;
    displayBoard();
    displayBlock("lives");
    get("output_holder").style.fontSize = "89%";
}
function ded() {
    document.body.style.background = "rgb(225,35,0)";
    removeElement("lives");
    displayBlock("game_over");
    displayBlock("ur_dead");
    get("everything").style.backgroundImage = "url(https://i.imgur.com/knQZJCq.jpg)";
    get("everything").style.backgroundSize = "100% 100%";
    get("everything").style.backgroundRepeat = "no-repeat";
    get("everything").style.backgroundSize = "100% 100%";
    get("everything").style.backgroundAttachment = "fixed";
    get("output_holder").style.opacity = "0";
    get("output_holder").style.fontSize = "78%";
    scores.push(score);
    scores.sort((a,b) => a-b);
    document.removeEventListener("keydown", downOnTheKey);
    clearInterval(buzz);
    clearInterval(oohOoh);
    clearInterval(guard);
    clearInterval(aggression);
    clearInterval(moveyBoi);
    clearInterval(initPulse);
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
    document.body.style.backgroundColor = "rgb(19, 57, 100)";
    removeElement("game_over");
    removeElement("ur_dead");
    highScore = scores[scores.length - 1];
    get("hiScore").innerText = `High Score: ${highScore}`;
    displayBlock("hiScore");
    displayBlock("userContainer");
    get("everything").style.backgroundImage = "";
    lives = 3;
    score = 0;
    get("output_holder").style.opacity = "100";
    removeElement("output_holder");
    frogX = 3;
    frogY = 3;
    beeX = 11;
    beeY = 3;
    moonX = 24;
    moonY = 24;
    sharkX = 8;
    sharkY = 24;
    energyX = 5;
    energyY = 11;
    p1X = 11;
    p1Y = 11;
    monkeyX = 14;
    monkeyY = 21;
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