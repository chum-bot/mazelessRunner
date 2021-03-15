//enemy class
class Enemy {
    constructor(img, x, y, speed, threshold, move, name, idStorage, color) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.threshold = threshold;
        this.move = move;
        this.name = name;
        this.idStorage = idStorage;
        this.color = color;
        this.pos = `cell${this.x}_${this.y}`;
    }
  }