let startingX = 100;
let startingY = 100;
let myRects =[];
let startingId = 0;
// Canvas
function setup() {
    createCanvas(1200, 1000);
    background('#361d2e');
    for (let k = 0; k < 4; k++) {
            for (let i = 0; i < 5; i++) {
            rect(startingX, startingY, 100, 150, 20);
            myRects.push({ x: startingX, y: startingY, id: startingId });
            startingX += 150;
            startingId++
        }
        startingY += 200;
        startingX = 100;
    
    }
    console.log(myRects);
}
