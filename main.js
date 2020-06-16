console.log('main.js file is linked');

const game = new Game();

function preload() {
    game.preloadBackgoundImages();
  }
  function setup() {
    createCanvas(800, 600);
    //game.setup();
  }
  function draw() {
    game.drawingGame();
  }
  
//   function keyPressed() {
//     if (keyCode == 32) {
//       game.player.jump();
//     }
//   }
  
