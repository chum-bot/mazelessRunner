class Projectile {
    constructor(img, xPos, yPos, direction) {
        this.img = img;
        this.xPos = xPos;
        this.yPos = yPos;
        this.direction = direction;
    }
}

function projectileMovement(objectInMotion, objectInMotionArr, objectMoveSpeed) {
        if (objectInMotion.xPos != undefined || objectInMotion.yPos != undefined) {
            if (objectInMotion.direction == "up") {
                if (objectInMotion.yPos == 0) {
                    snowOut = false;
                    myBoard[objectInMotion.xPos][objectInMotion.yPos] = blank;
                    objectInMotionArr.splice(objectInMotionArr.indexOf(objectInMotion), 1);
                    objectInMotion.xPos = undefined;
                    objectInMotion.yPos = undefined;
                    window.clearInterval(objectMoveSpeed);
                }
                else if (objectInMotion.yPos == p1Y) {
                    myBoard[objectInMotion.xPos][objectInMotion.yPos] = p1;
                }
                else {
                    myBoard[objectInMotion.xPos][objectInMotion.yPos] = blank;
                }
                if (objectInMotion.yPos != 0 && objectInMotion.yPos != undefined) {
                    objectInMotion.yPos--;
                    myBoard[objectInMotion.xPos][objectInMotion.yPos] = objectInMotion.img;
                }
            }
            if (objectInMotion.direction == "down") {
                if (objectInMotion.yPos == 24) {
                    snowOut = false;
                    myBoard[objectInMotion.xPos][objectInMotion.yPos] = blank;
                    objectInMotionArr.splice(objectInMotionArr.indexOf(objectInMotion), 1);
                    objectInMotion.xPos = undefined;
                    objectInMotion.yPos = undefined;
                    window.clearInterval(objectMoveSpeed);
                }
                else if (objectInMotion.yPos == p1Y) {
                    myBoard[objectInMotion.xPos][objectInMotion.yPos] = p1;
                }
                else {
                    myBoard[objectInMotion.xPos][objectInMotion.yPos] = blank;
                }
                if (objectInMotion.yPos != 24 && objectInMotion.yPos != undefined) {
                    objectInMotion.yPos++;
                    myBoard[objectInMotion.xPos][objectInMotion.yPos] = objectInMotion.img;
                }
            }
            if (objectInMotion.direction == "left") {
                if (objectInMotion.xPos == 0) {
                    snowOut = false;
                    myBoard[objectInMotion.xPos][objectInMotion.yPos] = blank;
                    objectInMotionArr.splice(objectInMotionArr.indexOf(objectInMotion), 1);
                    objectInMotion.xPos = undefined;
                    objectInMotion.yPos = undefined;
                    window.clearInterval(objectMoveSpeed);
                }
                else if (objectInMotion.xPos == p1X) {
                    myBoard[objectInMotion.xPos][objectInMotion.yPos] = p1;
                }
                else {
                    myBoard[objectInMotion.xPos][objectInMotion.yPos] = blank;
                }
                if (objectInMotion.xPos != 0 && objectInMotion.xPos != undefined) {
                    objectInMotion.xPos--;
                    myBoard[objectInMotion.xPos][objectInMotion.yPos] = objectInMotion.img;
                }

            }
            if (objectInMotion.direction == "right") {
                if (objectInMotion.xPos == 24) {
                    snowOut = false;
                    myBoard[objectInMotion.xPos][objectInMotion.yPos] = blank;
                    objectInMotionArr.splice(objectInMotionArr.indexOf(objectInMotion), 1);
                    objectInMotion.xPos = undefined;
                    objectInMotion.yPos = undefined;
                    window.clearInterval(objectMoveSpeed);
                }
                else if (objectInMotion.xPos == p1X) {
                    myBoard[objectInMotion.xPos][objectInMotion.yPos] = p1;
                }
                else {
                    myBoard[objectInMotion.xPos][objectInMotion.yPos] = blank;
                }
                if (objectInMotion.xPos != 24 && objectInMotion.xPos != undefined) {
                    objectInMotion.xPos++;
                    myBoard[objectInMotion.xPos][objectInMotion.yPos] = objectInMotion.img;
                }
            }
        }
    }
