let startingX = 100;
let startingY = 100;
let myRects =[];
// Canvas
function setup() {
    createCanvas(1000, 1000);
    background('#361d2e');
    for (let k = 0; k < 4; k++) {
            for (let i = 0; i < 5; i++) {
            rect(startingX, startingY, 100, 150, 20);
            myRects.push({ x: startingX, y: startingY, id: i });
            startingX += 150;
        }
        startingY += 200;
        startingX = 100;
    
    }
    console.log(myRects);
}
