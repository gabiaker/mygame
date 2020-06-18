console.log ('clouds.js is linked')

class Clouds {
    constructor() {
        this.gravity = 0.2;
        this.speed = 0;
    }
    
    drawClouds() {

        
        image(game.cloudImgs, this.x, this.y)
    }
}
