// console.log('background.js file is linked');

class Background {
    constructor() {

    }

    drawBackground() {
        game.backgroundImgs.forEach(function (elem) {
            elem.y -= elem.speed;

            //image(source, x coordinate, y coordinate, width, height)
            // image(elem.src, elem.x, 0, width, height);
            // image(elem.src, elem.x + width, 0, width, height);

            image(elem.src, 0, elem.y, width, height);
            image(elem.src, 0, elem.y + height, width, height);

            if (elem.y <= -height) {
                elem.y = 0;
            }

        });


    }
}



