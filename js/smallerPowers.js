function shield(){
    p1 = playerShield;
    isShielded = true;

    outOfPower = window.setTimeout(function(){
        p1 = invader;
        isShielded = false;
        isActive = false;
    }, shieldDuration);
}
function godMode(){
    p1 = playerGodMode;
    isGod = true;

    outOfPower = window.setTimeout(function(){
        p1 = invader;
        isGod = false;
        isActive = false;
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