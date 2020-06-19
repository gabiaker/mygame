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
}

function keyPressed() {

  if (keyCode == 68 || keyCode == 39) {
    // unicorn image is facing Right 
    game.player.moveRight();

  } else if (keyCode == 32 || keyCode == 87) {
    game.player.jump();

  } else if (keyCode == 65 || keyCode == 37) {
    // unicorn image is facing Right 
    game.player.moveLeft();
  }

  if (gameState != 0 && keyCode == 32) {
    gameState = 0;
    game.stamina = 100;
  }
}
