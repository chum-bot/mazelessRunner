function khione() {
    p1 = playerKhione;
    isGoddess = true;
    charColor = khioneColor;

    outOfPower = window.setTimeout(function () {
        p1 = invader;
        isGoddess = false;
        isActive = false;
        charColor = invaderColor;
    }, khioneDuration);
}

function breakout(mene, enemInterval) {
    window.clearInterval(enemInterval);
    enemInterval = window.setInterval(mene.move, mene.speed);
    style(mene.pos).transition = "none";
    mene.idStorage = enemInterval;
    frostbite = false;
}

function encased(enem, enemInt, flake, allFlakes) {
    frostbite = true;
    window.clearInterval(enemInt);
    enem.color = snowColor;
    reposition(enem);
    style(enem.pos).transition = "background-color 5000ms";
    switch (enem) {
        case uni:
            enem.color = uniColor;
            break;
        case bee:
            enem.color = beeColor;
            break;
        case ninja:
            enem.color = ninjaColor;
            break;
        case alien:
            enem.color = alienColor;
            break;
        case robot:
            enem.color = roboColor;
            break;
    }
    setTimeout(breakout, stasisTime - enem.speed, enem, enemInt);
    get(flake.pos).innerText = "";
    flake.x = undefined;
    flake.y = undefined;
    allFlakes.splice(allFlakes.indexOf(flake), 1);
}

function freezyFreeze(obj, objArr) {
    sleet = window.setInterval(function () {
        if (obj.x != undefined && obj.y != undefined) {
            switch (obj.pos) {

                case bee.pos:
                    if (bee.idStorage != undefined) {
                        buzz = bee.idStorage;
                    }
                    snowOut = false;
                    breakout(bee, buzz);
                    buzz = bee.idStorage;
                    encased(bee, buzz, obj, objArr);
                    frozeLast = bee.name;
                    window.clearInterval(sleet);
                    break;

                case uni.pos:
                    if (uni.idStorage != undefined) {
                        guard = uni.idStorage;
                    }
                    snowOut = false;
                    breakout(uni, guard);
                    guard = uni.idStorage;
                    encased(uni, guard, obj, objArr);
                    frozeLast = uni.name;
                    window.clearInterval(sleet);
                    break;

                case ninja.pos:
                    ninjaFrozen = true;
                    if (ninja.idStorage != undefined) {
                        aggression = ninja.idStorage;
                    }
                    snowOut = false;
                    breakout(ninja, aggression);
                    aggression = ninja.idStorage;
                    encased(ninja, aggression, obj, objArr);
                    frozeLast = ninja.name;
                    window.clearInterval(sleet);
                    break;

                case robot.pos:
                    if (robot.idStorage != undefined) {
                        oohOoh = robot.idStorage;
                    }
                    snowOut = false;
                    breakout(robot, oohOoh);
                    oohOoh = robot.idStorage;
                    encased(robot, oohOoh, obj, objArr);
                    frozeLast = robot.name;
                    window.clearInterval(sleet);
                    break;

                case alien.pos:
                    if (alien.idStorage != undefined) {
                        moveyBoi = alien.idStorage;
                    }
                    snowOut = false;
                    breakout(alien, moveyBoi);
                    moveyBoi = alien.idStorage;
                    encased(alien, moveyBoi, obj, objArr);
                    frozeLast = alien.name;
                    window.clearInterval(sleet);
                    break;
            }
            if (frostbite == false) {
                projectileMovement(obj, objArr, sleet);
            }
        }
    }, sleetSpeed);

}