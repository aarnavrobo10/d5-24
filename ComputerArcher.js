class computerArcher{
    constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.compArcherImage = loadImage("assets/computerArcher.png")
  }
  display() {
    if (keyIsDown(RIGHT_ARROW) ) {
      this.angle += 0.02;
    }

    if (keyIsDown(LEFT_ARROW) ) {
      this.angle -= 0.02;
    }

    push();
    translate(this.x, this.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.compArcherImage, 0, 50, this.width, this.height);
    pop();
  }
}