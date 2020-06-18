console.log("game.js file is linked");

class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    this.obstacles = [];
    this.clouds = new Clouds();
    this.score = 0;
  }

  preloadBackgoundImages() {
    this.backgroundImgs = [
      { src: loadImage("assets/background/edit.png"), y: 0, speed: 2 },
      {
        src: loadImage("assets/background/stars/mint-background-png-4.png"),
        y: 0,
        speed: 1,
      },
    ];

    this.unicornImg = loadImage("assets/unicorn/Final/unicorn-right.gif");
    this.redGem = loadImage("assets/gems/Final/red.png");
    this.greenGem = loadImage("assets/gems/Final/green.png");
    this.blueGem = loadImage("assets/gems/Final/blue.png");
    this.glassGem = loadImage("assets/gems/Final/transparent.png");

    this.cloudImgs = [
      { src: loadImage("assets/Clouds/final/cloud1.jpg"), y: 100, speed: 5 },
      // { src: loadImage("assets/Clouds/final/cloud2.jpg"), y: 0, speed: 5 },
      // { src: loadImage("assets/Clouds/final/cloud3.jpg"), y: 0, speed: 5 },
      // { src: loadImage("assets/Clouds/final/cloud4.jpg"), y: 0, speed: 5 },
      // { src: loadImage("assets/Clouds/final/cloud5.jpg"), y: 0, speed: 5 },
      // { src: loadImage("assets/Clouds/final/cloud6.jpg"), y: 0, speed: 5 },
      // { src: loadImage("assets/Clouds/final/cloud7.jpg"), y: 0, speed: 5 },
      // { src: loadImage("assets/Clouds/final/cloud8.jpg"), y: 0, speed: 5 },
      // { src: loadImage("assets/Clouds/final/cloud9.jpg"), y: 0, speed: 5 },
      // { src: loadImage("assets/Clouds/final/cloud10.jpg"), y: 0, speed: 5 },
      // { src: loadImage("assets/Clouds/final/cloud11.jpg"), y: 0, speed: 5 },
      // { src: loadImage("assets/Clouds/final/cloud12.jpg"), y: 0, speed: 5 },
      // { src: loadImage("assets/Clouds/final/cloud13.jpg"), y: 0, speed: 5 },
      // { src: loadImage("assets/Clouds/final/cloud14.jpg"), y: 0, speed: 5 },
      // { src: loadImage("assets/Clouds/final/cloud15.jpg"), y: 0, speed: 5 },
      // { src: loadImage("assets/Clouds/final/cloud16.jpg"), y: 0, speed: 5 }
    ];
    console.log("cloud image is preloaded");
  }

  setup() {
    this.player.setupPlayer();
  }

  drawingGame() {
    clear();
    frameRate(32);

    // this.clouds.drawClouds();
    this.background.drawBackground();
    this.player.drawingTheUnicorn();

    if (frameCount % 50 === 0) {
      //random function from p5
      let randomNumber = random(0, height - 60);
      this.obstacles.push(new Obstacles(randomNumber));
    }

    this.obstacles.forEach((elem) => {
      // we draw all of the obstacles
      elem.drawingObstacles();
      elem.checkCollision(this.player);
    });

    this.obstacles = this.obstacles.filter((obstacle) => {
      // here we check if the collision is happening, and if it is happenind we return false to filter the obstacle :D
      if (obstacle.checkCollision(this.player)) {
        console.log("Collision is accured");
        this.score += obstacle.gem.score;
        console.log("SCORE!", this.score);
        return false;
      } else {
        // here we keep the obstacles
        console.log(" Not colliding");

        return true;
      }
    });
  }
}
