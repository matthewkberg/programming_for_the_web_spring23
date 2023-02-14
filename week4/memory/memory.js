let startingX = 100;
let startingY = 100;
let myRects =[];
// Canvas
function setup() {
    createCanvas(1000, 1000);
    background('#361d2e');
    for (let i = 0; i < 5; i++) {
        rect(startingX, startingY, 100, 150, 20);
        myRects.push({ x: startingX, y: startingY });
        startingX += 150;
    }
    console.log(myRects);
}
