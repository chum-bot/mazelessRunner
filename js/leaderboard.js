function leaderboard(){
    gamestate = whatsAnEnum.LEADERBOARD;
    get("title_screen").innerText = "Mazeless Leaderboard";
    removeElement("buttonDiv");
    removeElement("everything");
    removeElement("userContainer");
    removeElement("secondaryTitleScreen");
    removeElement("wasdToggle");
    get("info").innerText = "";
    displayBlock("topScores");
    displayBlock("easyScores");
    displayBlock("scoreDiffText");
    displayBlock("normalScores");
    displayBlock("hardScores");
    removeElement("earlierPatchNoteButton");
    for(i=0; i<document.getElementsByClassName(lbCurrentDiff).length; i++){
        document.getElementsByClassName(lbCurrentDiff)[i].style.display = "block";
    }
    removeElement("submitted");
    removeElement("difficultyMessage");
    displayBlock("backToMenu");
}
function backToMenu(){
    gamestate = whatsAnEnum.MENU;
    get("title_screen").innerText = "Mazeless Runner";
    displayFlex("buttonDiv");
    displayBlock("secondaryTitleScreen");
    if(highScore !== 0){
    displayBlock("userContainer");
    }
    removeElement("easyScores");
    removeElement("normalScores");
    removeElement("hardScores");
    removeElement("scoreDiffText");
    displayBlock("wasdToggle");
    displayBlock("difficultyMessage");
    removeElement("topScores");
    removeElement("backToMenu");
}
function scoreDifficultySwitch(difficulty){
    for(i=0; i<document.getElementsByClassName(lbCurrentDiff).length; i++){
        document.getElementsByClassName(lbCurrentDiff)[i].style.display = "none";
    }
    for(j=0; j<document.getElementsByClassName(difficulty).length; j++){
        document.getElementsByClassName(difficulty)[j].style.display = "block";
    }
    orderScores();
    lbCurrentDiff = difficulty;

    switch(difficulty){
        case "hard":
            get("topScores").style.background = "linear-gradient(orangered, darkred)";
            get("diff").innerText = "Hard";
            get("scoreDiffText").style.color = "red";
            break;
        case "easy":
            get("topScores").style.background = "linear-gradient(seagreen, forestgreen)";
            get("diff").innerText = "Easy";
            get("scoreDiffText").style.color = "springgreen";
            break;
        case "normal":
            get("topScores").style.background = "linear-gradient(gold, darkgoldenrod)";
            get("diff").innerText = "Normal";
            get("scoreDiffText").style.color = "yellow";
            break;
    }
}