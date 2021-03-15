//mine class
class Mine {
  constructor(x, y, damage, img, color) {
    this.x = x;
    this.y = y;
    this.damage = damage;
    this.img = img;
    this.color = color;
    this.pos = `cell${this.x}_${this.y}`;
  }
}