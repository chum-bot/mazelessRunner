function snowman() {
    p1 = playerSnowman;
    isSnow = true;

    outOfPower = window.setTimeout(function () {
        p1 = invader;
        isSnow = false;
        isActive = false;
    }, snowmanDuration);
}

function breakout(mene, enemInterval){
    window.clearInterval(enemInterval);
    enemInterval = window.setInterval(mene.move, mene.speed);
    mene.idStorage = enemInterval;
    frostbite = false;
    if(frozeLast == bear.name){
        bearFrozen = false;
    }
}

function encased(enem, enemInt, flake, allFlakes) {
    frostbite = true;
    window.clearInterval(enemInt);
    setTimeout(breakout, stasisTime, enem, enemInt);
    myBoard[flake.xPos][flake.yPos] = blank;
    flake.xPos = undefined;
    flake.yPos = undefined;
    allFlakes.splice(allFlakes.indexOf(flake), 1);
}

function freezyFreeze(obj, objArr) {
    sleet = window.setInterval(function () {
        if (obj.xPos != undefined && obj.yPos != undefined) {
            switch (myBoard[obj.xPos][obj.yPos]) {

                case myBoard[bee.x][bee.y]:
                    if(bee.idStorage != undefined){
                        buzz = bee.idStorage;
                    }
                    snowOut = false;
                    breakout(bee, buzz);
                    buzz = bee.idStorage;
                    encased(bee, buzz, obj, objArr);
                    frozeLast = bee.name;
                    window.clearInterval(sleet);
                    break;

                case myBoard[uni.x][uni.y]:
                    if(uni.idStorage != undefined){
                        guard = uni.idStorage;
                    }
                    snowOut = false;
                    breakout(uni, guard);
                    guard = uni.idStorage;
                    encased(uni, guard, obj, objArr);
                    frozeLast = uni.name;
                    window.clearInterval(sleet);
                    break;

                case myBoard[bear.x][bear.y]:
                    bearFrozen = true;
                    if(bear.idStorage != undefined){
                        aggression = bear.idStorage;
                    }
                    snowOut = false;
                    breakout(bear, aggression);
                    aggression = bear.idStorage;
                    encased(bear, aggression, obj, objArr);
                    frozeLast = bear.name;
                    window.clearInterval(sleet);
                    break;

                case myBoard[monkey.x][monkey.y]:
                    if(monkey.idStorage != undefined){
                        oohOoh = monkey.idStorage;
                    }
                    snowOut = false;
                    breakout(monkey, oohOoh);
                    oohOoh = monkey.idStorage;
                    encased(monkey, oohOoh, obj, objArr);
                    frozeLast = monkey.name;
                    window.clearInterval(sleet);
                    break;
                    
                case myBoard[moon.x][moon.y]:
                    if(moon.idStorage != undefined){
                        moveyBoi = moon.idStorage;
                    }
                    snowOut = false;
                    breakout(moon, moveyBoi);
                    moveyBoi = moon.idStorage;
                    encased(moon, moveyBoi, obj, objArr);
                    frozeLast = moon.name;
                    window.clearInterval(sleet);
                    break;
            }
            if (frostbite == false) {
                projectileMovement(obj, objArr, sleet);
            }
        }
    }, sleetSpeed);

}