// console.log("obstacles.js file is linked");

class Obstacles {
  constructor(randomX) {
    this.x = randomX;
    this.y = height;
    this.redGem = game.redGem;
    this.greenGem = game.greenGem;
    this.blueGem = game.blueGem;
    this.rainbowGem = game.rainbowGem;

    this.gems = [
      { gem: this.redGem, score: 10 },
      { gem: this.greenGem, score: 10 },
      { gem: this.blueGem, score: 1 },
      { gem: this.rainbowGem, score: 10 },
    ];
    
    this.gem = this.gems[Math.floor(Math.random() * 4)];

    this.width = this.redGem.width;
    this.height = this.redGem.height;
  }

  checkCollision(player) {
    let leftSide = this.x;
    let rightSide = this.x + this.width;
    let playerLeftSide = player.x;
    let playerRightSide = player.x + player.width;
    let topSide = this.y;
    let bottomSide = this.y + this.height;
    let playerTopSide = player.y;
    let playerBottomSide = player.y + player.height;
    //console.log(leftSide, playerLeftSide, playerRightSide);
    let xCollision =
      leftSide > playerLeftSide - 10 &&
      leftSide < playerRightSide + 10 &&
      rightSide > playerLeftSide - 10 &&
      rightSide < playerRightSide + 10;

    let yCollision =
      topSide > playerTopSide - 10 &&
      topSide < playerBottomSide + 10 &&
      bottomSide > playerTopSide - 10 &&
      bottomSide < playerBottomSide + 10;
    /*       playerLeftSide > leftSide > playerRightSide &&
          playerLeftSide > rightSide > playerRightSide; */
    if (yCollision && xCollision) {
      return true;
    } else {
      return false;
    }
  }

  drawingObstacles() {
    this.y -= 1;
    image(this.gem.gem, this.x, this.y, this.width, this.height);
  }
}
