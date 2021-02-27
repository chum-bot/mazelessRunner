function dragon() {
    p1 = playerDragon;
    isDragon = true;

    outOfPower = window.setTimeout(function () {
        p1 = invader;
        isDragon = false;
        isActive = false;
    }, dragonDuration);
}

function shootyShoot(obj, obsArr, objArr) {
    fireFlameFlow = window.setInterval(function () {
        if (obj.xPos != undefined && obj.yPos != undefined) {
            for (obstacle of obsArr) {
                if (obj.img == fire && obstacle.xPos === obj.xPos && obstacle.yPos === obj.yPos && obj.xPos != undefined && obj.yPos != undefined) {
                    contact = true;
                    myBoard[obstacle.xPos][obstacle.yPos] = blank;
                    obsArr.splice(obsArr.indexOf(obstacle), 1);
                    objArr.splice(objArr.indexOf(obj), 1);
                    obj.xPos = undefined;
                    obj.yPos = undefined;
                    window.clearInterval(fireFlameFlow);
                    break;
                }
            }
            if (contact == false) {
                projectileMovement(obj, objArr, fireFlameFlow);
            }
        }
    }, 80);
}