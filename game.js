console.log("game.js file is linked");

class Game {
    constructor() {
        this.background = new Background();
        this.player = new Player();
        this.obstacles = [];
    }

    preloadBackgoundImages() {
        this.backgroundImgs = [
            { src: loadImage("assets/background/edit.png"), x: 0, speed: 0 },
            { src: loadImage("assets/background/stars/star-png-transparent-background-6.png"), x: 0, speed: 1 },
        ];

        this.unicornImg = loadImage("assets/unicorn/Final/unicorn-right.gif");
        this.gemImg = loadImage("assets/gems/Final/red.jpg");

        
    }

    setup() {
        this.player.setupPlayer();
      }

    drawingGame() {
        clear();
        frameRate(20);       

        this.background.drawBackground();
        this.player.drawingTheUnicorn();
    }
}
