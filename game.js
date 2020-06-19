// console.log("game.js file is linked");

class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    this.obstacles = [];
    //this.clouds = new Clouds();
    this.score = 0;
    this.stamina = 100;
  }

  preloadBackgoundImages() {
    this.backgroundImgs = [
      { src: loadImage("assets/background/edit.png"), y: 0, speed: 4 },
      //{ src: loadImage("assets/background/edit.png"), y: 0, speed: 4 },
      { src: loadImage("assets/background/stars/mint-background-png-4.png"), y: 0, speed: 3, }
    ];

    this.gameIntro = loadImage("assets/background/game-intro.jpg");
    this.gameStart = loadImage("assets/background/game-start.png");
    this.gameOver = loadImage("assets/background/game-over.png");

    this.gameLifeStatus = loadImage("assets/background/game-life-status.png");
    this.gameScoreStatus = loadImage("assets/background/game-score-status.png");

    this.unicornImg = loadImage("assets/unicorn/Final/unicorn-right.gif");
    this.unicornImgLeft = loadImage("assets/unicorn/Final/unicorn-right.gif");

    this.redGem = loadImage("assets/gems/Final/red.gif");
    this.greenGem = loadImage("assets/gems/Final/green.gif");
    this.blueGem = loadImage("assets/gems/Final/blue.gif");
    this.rainbowGem = loadImage("assets/gems/Final/rainbow.gif");

    // this.cloudImgs = [
    //   { src: loadImage("assets/Clouds/final/cloud1.png"), y: 0, speed: 1 },
    //   { src: loadImage("assets/Clouds/final/cloud2.png"), y: 0, speed: 5 },
    //   { src: loadImage("assets/Clouds/final/cloud3.png"), y: 0, speed: 5 },
    //   { src: loadImage("assets/Clouds/final/cloud4.png"), y: 0, speed: 5 },
    //   { src: loadImage("assets/Clouds/final/cloud5.png"), y: 0, speed: 5 },
    //   { src: loadImage("assets/Clouds/final/cloud6.png"), y: 0, speed: 5 },
    //   { src: loadImage("assets/Clouds/final/cloud7.png"), y: 0, speed: 5 },
    //   { src: loadImage("assets/Clouds/final/cloud8.png"), y: 0, speed: 5 },
    //   { src: loadImage("assets/Clouds/final/cloud9.png"), y: 0, speed: 5 },
    //   { src: loadImage("assets/Clouds/final/cloud10.png"), y: 0, speed: 5 },
    //   { src: loadImage("assets/Clouds/final/cloud11.png"), y: 0, speed: 5 },
    //   { src: loadImage("assets/Clouds/final/cloud12.png"), y: 0, speed: 5 },
    //   { src: loadImage("assets/Clouds/final/cloud13.png"), y: 0, speed: 5 },
    //   { src: loadImage("assets/Clouds/final/cloud14.png"), y: 0, speed: 5 },
    //   { src: loadImage("assets/Clouds/final/cloud15.png"), y: 0, speed: 5 },
    //   { src: loadImage("assets/Clouds/final/cloud16.png"), y: 0, speed: 5 }
    // ];
    // console.log("cloud image is preloaded");
  }

  setup() {
    this.player.setupPlayer();
  }

  drawingGame() {
    clear();
    frameRate(32);

    this.background.drawBackground();
    this.player.drawingTheUnicorn();
    
    //this.background.drawGameStatus();
    //this.background.drawGameStatus();
    //this.clouds.drawClouds();
    
    if (frameCount % 50 === 0) {
      let randomNumber = random(0, height - 60);
      this.obstacles.push(new Obstacles(randomNumber));
    }

    this.obstacles.forEach((elem) => {
      // we draw all of the obstacles
      elem.drawingObstacles();
      elem.checkCollision(this.player);
    });
    
    // here we check if the collision is happening, and if it is happenind we return false to filter the obstacle :D
    this.obstacles = this.obstacles.filter((obstacle) => {
      if (obstacle.checkCollision(this.player)) {
        console.log("Gem is Collected");
        this.stamina -= 10;
        console.log("Oh, noooooo", this.stamina);
          if (this.stamina == 0) {
            gameState = gameState + 2;
          }
        return false;
      } else {
        // here we keep the obstacles
        // console.log(" Not colliding");
        return true;
      }
    });

  }
}
