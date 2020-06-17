console.log("main.js file is linked");

const game = new Game();
let img;

function preload() {
  img = loadImage("assets/background/1.jpg");

  game.preloadBackgoundImages();
}
function setup() {
  createCanvas(800, 600);
  background(img);
  //game.setup();
}
function draw() {
  game.draw();
}

//   function keyPressed() {
//     if (keyCode == 32) {
//       game.player.jump();
//     }
//   }
