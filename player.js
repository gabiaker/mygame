// console.log('player.js file is linked');
class Player {
    constructor() {
        this.gravity = 0.2;
        this.speed = 0;
        this.jumps = 0;
        this.x = 650;
    
    }

    setupPlayer() {
        this.y = height - game.unicornImg.height;
        this.width = game.unicornImg.width;
        this.height = game.unicornImg.height;
    }

    jump() {
        this.jumps += 1;

        // check how many times the player before touching the ground
        if (this.jumps < 2) {
            this.speed = -10;
        }


        // ANOTHER APPROACH WITHOUT THE JUMP VARIABLES
        /*  if(this.y >= height - game.playerImg.height){
            this.speed = -5;
        } */
    }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    moveRight() {
        if (this.x >= 10 && this.x <= 670) {                    
            //console.log('The Unicorn x-Position is:', this.x)
            this.x += 10;
            //this.x = 800 - (game.unicornImg.width - 1);    // My values in the if statement are hard-coded, to try to change that 
        } else {
            this.x += 0;
            //console.log('The Unicorn is out of the canvas', this.x)
        }
    }

    moveLeft() {
        if (this.x > 10 && this.x >= 0) {
            //console.log('The Unicorn x-Position is:', this.x)
            this.x -= 10;
            //this.x = 800 - (game.unicornImg.width - 1);
        } else {
            this.x += 0;  // stay in the same spot - do nothing
            //console.log('The Unicorn is out of the canvas', this.x)
        }
    }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    drawingTheUnicorn() {
        //gravity pushes poor antonio down in the canvas
        this.speed += this.gravity;
        this.y += this.speed;

        // console.log(this.speed.toFixed(2));
        // this if statement is to check that gravity doesnt affect antonio if he is outside of the canvas :D

        if (this.y >= height - game.unicornImg.height) {
            this.y = height - game.unicornImg.height;
            //we set the jumps to 0 so we can jump again
            this.jumps = 0;
        }

        // here i dont pass any width or height into the image function so the image takes the original size of the running man
        image(game.unicornImg, this.x, this.y);

    }

}