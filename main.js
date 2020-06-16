console.log('main.js file is linked');

//const game = new Game();

function preload() {
  let img;
  img = loadImage("assets/background/1.jpg");
    //game.preloadBackgoundImages();
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
  
