//console.log("main.js file is linked");

const game = new Game();

let gameState = 1;

//let img;

function preload() {
  game.preloadBackgoundImages();
  img = loadImage('assets/Clouds/final/cloud1.jpg');
}
function setup() {
  createCanvas(800, 600);
  game.setup();
  //image(img, 0, 0);
}


function draw() {
  if (gameState == 1) {
    image(game.gameIntro, 0, 0, 800, 600);

  } else if (gameState == 0) {
      game.drawingGame();

  } else if (gameState !=0) {
      image(game.gameOver, 0, 0, width, height);
  }
}
  //clouds.drawClouds()



function keyPressed() {

  if (keyCode == 68 || keyCode == 39) {
    game.player.moveRight();

  } else if (keyCode == 32 || keyCode == 87) {
    game.player.jump();

  } else if (keyCode == 65 || keyCode == 37) {
    game.player.moveLeft();
  }

  if (gameState != 0 && keyCode == 32) {
    gameState = 0;
    game.stamina = 10;
  }
}
