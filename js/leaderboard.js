function leaderboard(){
    gamestate = whatsAnEnum.LEADERBOARD;
    get("title_screen").innerText = "Mazeless Score Log";
    removeElement("buttonDiv");
    removeElement("everything");
    removeElement("userContainer");
    removeElement("secondaryTitleScreen");
    removeElement("wasdToggle");
    get("info").innerText = "";
    displayBlock("topScores");
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
    displayBlock("wasdToggle");
    displayBlock("difficultyMessage");
    removeElement("topScores");
    removeElement("backToMenu");
}