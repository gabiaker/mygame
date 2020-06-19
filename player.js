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
    }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    moveRight() {
        if (this.x >= 10 && this.x <= 670) {                    
            this.x += 10;
        } else {
            this.x += 0;
        }
    }

    moveLeft() {
        if (this.x > 10 && this.x >= 0) {
            this.x -= 10;
        } else {
            this.x += 0; 
        }
    }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    drawingTheUnicorn() {
        //gravity pushes player down in the canvas
        this.speed += this.gravity;
        this.y += this.speed;

        if (this.y >= height - game.unicornImg.height) {
            this.y = height - game.unicornImg.height;
            //we set the jumps to 0 so we can jump again
            this.jumps = 0;
        }

        image(game.unicornImg, this.x, this.y);

    }

}