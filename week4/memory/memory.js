let startingX = 100
let startingY = 100


function setup() {
    createCanvas(1000, 1000);
    background('#361d2e');
    for (let i = 0; i < 5; i++) {
        rect(startingX, startingY, 100, 150, 20);
        startingX += 150;
    }
}
