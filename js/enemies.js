//enemy class
class Enemy {
    constructor(img, x, y, speed, threshold, move, name, idStorage) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.threshold = threshold;
        this.move = move;
        this.name = name;
        this.idStorage = idStorage
    }

    collision() {
        if(myBoard[this.x][this.y] == myBoard[p1X][p1Y] && isGod == false){
            if (isShielded) {
                isShielded = false;
                isActive = false;
                p1 = invader;
              }
              else {
                lives--;
                get("lives").innerHTML = " Lives: " + lives;
                pulsingLifeColor();
              }
                if(lives === 2){
                    window.clearInterval(initPulse);
                    let pulseSpeed = 500;
                    initPulse = window.setInterval(pulsingLifeColor, pulseSpeed);
                }
                if(lives === 1){
                    window.clearInterval(initPulse);
                    let pulseSpeed = 250;
                    initPulse = window.setInterval(pulsingLifeColor, pulseSpeed);
                      }
              
        }
    }
}