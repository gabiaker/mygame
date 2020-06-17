console.log("main.js file is linked");

const game = new Game();

function preload() {
  game.preloadBackgoundImages();
}
function setup() {
  createCanvas(800, 600);
  game.setup();
}
function draw() {
  clear();
  game.drawingGame();
}

function keyPressed() {
  if (keyCode === 32) {
    game.player.jump();
  } else if (keyCode === 39) {
    game.player.MoveRight();
  } else if (keyCode === 37) {
    game.player.MoveLeft();
  }
}
