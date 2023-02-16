// Variables for parameters
let blockX = 0;
let blockY = 0;
// Canvas and background
function setup() {
    createCanvas(500, 500);
    background(0);
    drawBlock(blockX, blockY, 255);
}

// Set up function to draw square
function drawBlock(x, y, color) {
    fill(color || 255);
    rect(x, y, 50, 50);
}