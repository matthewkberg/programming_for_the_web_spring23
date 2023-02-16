// Canvas and background
function setup() {
    createCanvas(500, 500);
    background(0);
    drawBlock();
}

// Set up function to draw square
function drawBlock(x, y, color) {
    fill(color || 255);
    rect(0, 0, 50, 50);
}