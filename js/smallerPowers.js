function shield(){
    p1 = playerShield;
    isShielded = true;
    charColor = shieldColor;

    outOfPower = window.setTimeout(function(){
        p1 = invader;
        isShielded = false;
        isActive = false;
        charColor = invaderColor;
    }, shieldDuration);
}
function godMode(){
    p1 = playerGodMode;
    isGod = true;
    charColor = godModeColor;

    outOfPower = window.setTimeout(function(){
        p1 = invader;
        isGod = false;
        isActive = false;
        charColor = invaderColor;
    }, godModeDuration);
}
function miniSun(){
    score += scoreGained / 2;
    isActive = false;
}
function extraLife(){
    lives++;
    pulsingLifeColor();
    if(lives === 2){
        window.clearInterval(initPulse);
        let pulseSpeed = 500;
        initPulse = window.setInterval(pulsingLifeColor, pulseSpeed);
          }
    isActive = false;
}