//console.log("main.js file is linked");

const game = new Game();

let gameState = 1;
let myfont;

function preload() {
  //myFont = loadFont("assets/fonts/FugazOne-Regular.ttf");
  game.preloadBackgoundImages();
}

function setup() {
  createCanvas(800, 600);
  game.setup();
}


function draw() {
  if (gameState == 1) {
    
    image(game.gameStart, 280, 260, width, height);
    image(game.gameIntro, 0, 0, width, height);
    
  } else if (gameState == 0) {
      game.drawingGame();

  } else if (gameState !=0) {
      image(game.gameOver, 0, 0, width, height);
  }

  if (keyIsDown(68) || keyIsDown(39)) {
    game.player.moveRight();
  } else if (keyIsDown(65) || keyIsDown(37)) {
    game.player.moveLeft();
  } else if (keyIsDown(32) || keyIsDown(87)) {
    game.player.jump();
  }
}

function keyPressed() {
  if (gameState != 0 && keyCode == 13) {
    gameState = 0;
    game.stamina = 100;
  }
}
