console.log("game.js file is linked");

class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    this.obstacles = [];
  }

  preloadBackgoundImages() {
    this.backgroundImgs = [
      { src: loadImage("assets/background/1.jpg"), x: 0, speed: 0 },
    ];

    this.unicornImg = loadImage("assets/unicorn/Final/unicorn-right.gif");
    this.gemImg = loadImage("assets/gems/Final/red.jpg");
  }

  draw() {
    //clear();
    //frameRate(20);

    this.background.drawBackground();
    this.player.drawingTheUnicorn();
  }
}
