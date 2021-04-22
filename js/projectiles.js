class Projectile {
    constructor(img, x, y, direction) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.pos = `cell${this.x}_${this.y}`;
    }
}

function projectileMovement(objectInMotion, objectInMotionArr, objectMoveSpeed) {
        if (objectInMotion.x != undefined && objectInMotion.y != undefined && objectInMotion.pos != undefined && objectInMotion.pos != "cellundefined_undefined") {
            if (objectInMotion.direction == "up") {
                if (objectInMotion.y == 0) {
                    snowOut = false;
                    deposition(objectInMotion);
                    objectInMotionArr.splice(objectInMotionArr.indexOf(objectInMotion), 1);
                    objectInMotion.x = undefined;
                    objectInMotion.y = undefined;
                    window.clearInterval(objectMoveSpeed);
                }
                else if (objectInMotion.y == player.y) {
                    colorify(objectInMotion.pos, player.color);
                    get(objectInMotion.pos).innerText = player.img;
                }
                else {
                    deposition(objectInMotion);
                }
                if (objectInMotion.y != 0 && objectInMotion.y != undefined) {
                    objectInMotion.y--;
                    reposition(objectInMotion);
                }
            }
            if (objectInMotion.direction == "down") {
                if (objectInMotion.y == 24) {
                    snowOut = false;
                    deposition(objectInMotion);
                    objectInMotionArr.splice(objectInMotionArr.indexOf(objectInMotion), 1);
                    objectInMotion.x = undefined;
                    objectInMotion.y = undefined;
                    window.clearInterval(objectMoveSpeed);
                }
                else if (objectInMotion.y == player.y) {
                    colorify(objectInMotion.pos, player.color);
                    get(objectInMotion.pos).innerText = player.img;
                }
                else {
                    deposition(objectInMotion);
                }
                if (objectInMotion.y != 24 && objectInMotion.y != undefined) {
                    objectInMotion.y++;
                    reposition(objectInMotion);
                }
            }
            if (objectInMotion.direction == "left") {
                if (objectInMotion.x == 0) {
                    snowOut = false;
                    deposition(objectInMotion);
                    objectInMotionArr.splice(objectInMotionArr.indexOf(objectInMotion), 1);
                    objectInMotion.x = undefined;
                    objectInMotion.y = undefined;
                    window.clearInterval(objectMoveSpeed);
                }
                else if (objectInMotion.x == player.x) {
                    colorify(objectInMotion.pos, player.color);
                    get(objectInMotion.pos).innerText = player.img;
                }
                else {
                    deposition(objectInMotion);
                }
                if (objectInMotion.x != 0 && objectInMotion.x != undefined) {
                    objectInMotion.x--;
                    reposition(objectInMotion);
                }

            }
            if (objectInMotion.direction == "right") {
                if (objectInMotion.x == 24) {
                    snowOut = false;
                    deposition(objectInMotion);
                    objectInMotionArr.splice(objectInMotionArr.indexOf(objectInMotion), 1);
                    objectInMotion.x = undefined;
                    objectInMotion.y = undefined;
                    window.clearInterval(objectMoveSpeed);
                }
                else if (objectInMotion.x == player.x) {
                    colorify(objectInMotion.pos, player.color);
                    get(objectInMotion.pos).innerText = player.img;
                }
                else {
                    deposition(objectInMotion);
                }
                if (objectInMotion.x != 24 && objectInMotion.x != undefined) {
                    objectInMotion.x++;
                    reposition(objectInMotion);
                }
            }
        }
    }

