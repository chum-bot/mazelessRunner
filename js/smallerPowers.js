function guarded(){
    player.img = shield.playerImg;
    isShielded = true;
    player.color = shield.color;

    outOfPower = window.setTimeout(function(){
        player.img = invader;
        isShielded = false;
        isActive = false;
        player.color = invaderColor;
    }, shield.duration);
}
function godMode(){
    player.img = helios.playerImg;
    isGod = true;
    player.color = helios.color;

    outOfPower = window.setTimeout(function(){
        player.img = invader;
        isGod = false;
        isActive = false;
        player.color = invaderColor;
    }, godMode.duration);
}
function minisun(){
    score += scoreGained / 2;
    isActive = false;
}
function extraLife(){
    lives++;
    pulsingLifeColor();
    isActive = false;
}