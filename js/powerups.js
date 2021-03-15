function powerups(){
    var rand = Math.random();

    if(rand <= 0.05){
        powerColor = godModeColor;
        spawn(godModeItem);
    }
    else if(rand <= 0.1){
        powerColor = extraLifeColor;
        spawn(extraLifeItem);
    }
    else if(rand <= 0.25){
        powerColor = khioneColor;
        spawn(khioneItem);
    }
    else if(rand <= 0.3){
        powerColor = shieldColor;
        spawn(shieldItem);
    }
    else if(rand <= 0.5){
        powerColor = miniSunColor;
        spawn(miniSunItem);
    }
    else if(rand >= 0.75 && score >= 5000){
        powerColor = dragonColor;
        spawn(dragonItem);
    }
    else{
        powerColor = randomItemColor;
        spawn(randomItem);
    }
}
function spawn(powerupItem){
    if(powerX != undefined && powerY != undefined){
        nonEnemDepos(powerPos);
    }
    powerX = Math.floor((Math.random() * 25));
    powerY = Math.floor((Math.random() * 25));
        switch(powerPos){
            case alien.pos:
            case bee.pos:
            case ninja.pos:
            case robot.pos:
                powerX = Math.floor((Math.random() * 25));
                powerY = Math.floor((Math.random() * 25));
                break;
        }
        for (var objectOfMine of minePositions) {
            if (powerPos == objectOfMine.pos) {
                powerX = Math.floor((Math.random() * 25));
                powerY = Math.floor((Math.random() * 25));
            }
        }
        for (var bolted of boltPositions) {
            if (powerPos == bolted.pos) {
                powerX = Math.floor((Math.random() * 25));
                powerY = Math.floor((Math.random() * 25));
            }
        }
        activePower = powerupItem;
        powerPos = `cell${powerX}_${powerY}`;
        get(powerPos).innerText = activePower;
        colorify(powerPos, powerColor);
}