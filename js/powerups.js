function powerups(){
    var rand = Math.random();

    if(rand <= 0.05){
        spawn(godModeItem);
    }
    else if(rand <= 0.1){
        spawn(extraLifeItem);
    }
    else if(rand <= 0.25){
        spawn(snowmanItem);
    }
    else if(rand <= 0.3){
        spawn(shieldItem);
    }
    else if(rand <= 0.5){
        spawn(miniSunItem);
    }
    else if(rand >= 0.75 && score >= 5000){
        spawn(dragonItem);
    }
    else{
        spawn(randomItem);
    }
    myBoard[powerX][powerY] = activePower;
}

function spawn(powerupItem){
    if(powerX != undefined && powerY != undefined){
        myBoard[powerX][powerY] = blank;
    }
    powerX = Math.floor((Math.random() * 25));
    powerY = Math.floor((Math.random() * 25));
        switch(myBoard[powerX][powerY]){
            case myBoard[moon.x][moon.y]:
            case myBoard[bee.x][bee.y]:
            case myBoard[bear.x][bear.y]:
            case myBoard[monkey.x][monkey.y]:
                powerX = Math.floor((Math.random() * 25));
                powerY = Math.floor((Math.random() * 25));
                break;
        }
        for (var objectOfMine of minePositions) {
            if (myBoard[powerX][powerY] == myBoard[objectOfMine.xPos][objectOfMine.yPos]) {
                powerX = Math.floor((Math.random() * 25));
                powerY = Math.floor((Math.random() * 25));
            }
        }
        for (var bananobject of bananaPositions) {
            if (myBoard[powerX][powerY] == myBoard[bananobject.xPos][bananobject.yPos]) {
                powerX = Math.floor((Math.random() * 25));
                powerY = Math.floor((Math.random() * 25));
            }
        }
        activePower = powerupItem;
}