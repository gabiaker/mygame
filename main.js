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
  game.drawingGame();
}

// function keyPressed() {
//   if (keyCode == 32) {
//     console.log(" 32 was pressed");
//     game.player.jump();
//     //console.log(" 32 was pressed");
//   }
// }

function keyPressed() {
  if (keyCode == 32) {
    game.player.jump();
    //console.log(" Space-bar was pressed");
  }
}

function keyPressed() {
  if (keyCode == 68) {
    game.player.moveRight();
    
  }
}
