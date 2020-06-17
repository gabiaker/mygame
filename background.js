console.log('background.js file is linked');
class Background {
    constructor() {

    }

    drawBackground() {
        game.preloadBackgoundImages.forEach(function (elem) {
            elem.x -= elem.speed;

            //image(source, x coordinate, y coordinate, width, height)
            image(elem.src, elem.x, 0, width, height);
            image(elem.src, elem.x + width, 0, width, height);

            if (elem.x <= -width) {
                elem.x = 0;
            }

        });


    }
}
