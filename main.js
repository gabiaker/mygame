console.log("main.js file is linked");

const game = new Game();

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
  game.drawingGame();
  //clouds.drawClouds()

}

function keyPressed() {
  if (keyCode == 68 || keyCode == 39) {
    console.log(' D is pressed')
    game.player.moveRight();
  } else if (keyCode == 32) {
    console.log(" Space-bar was pressed");
    game.player.jump();
  } else if (keyCode == 65 || keyCode == 37) {
    console.log(' A is pressed')
    game.player.moveLeft();
  }
}
