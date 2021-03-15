function dragon() {
    p1 = playerDragon;
    isDragon = true;
    charColor = dragonColor;

    outOfPower = window.setTimeout(function () {
        p1 = invader;
        isDragon = false;
        isActive = false;
        charColor = invaderColor;
    }, dragonDuration);
}

function shootyShoot(obj, obsArr, objArr) {
    fireFlameFlow = window.setInterval(function () {
        if (obj.x != undefined && obj.y != undefined) {
            for (obstacle of obsArr) {
                if (obj.img == fire && obstacle.pos === obj.pos && obj.x != undefined && obj.y != undefined) {
                    contact = true;
                    snowOut = false;
                    deposition(obstacle);
                    obsArr.splice(obsArr.indexOf(obstacle), 1);
                    objArr.splice(objArr.indexOf(obj), 1);
                    obj.x = undefined;
                    obj.y = undefined;
                    break;
                }
            }
            if (contact == false) {
                projectileMovement(obj, objArr, fireFlameFlow);
            }
        }
    }, 35);
}