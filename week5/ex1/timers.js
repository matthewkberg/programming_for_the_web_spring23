// Variables for parameters
let blockX = 0;
let blockY = 0;
let drawTimer;
const speed = 50; // milliseconds
const distance = 2;

// Canvas and background
function setup() {
    createCanvas(500, 500);
    background(0);
   
}

// Set up function to draw square
function drawBlock(x, y, color) {
    fill(color || 255);
    rect(x, y, 50, 50);
}

drawTimer = window.setInterval(() => {
    if(blockY - 50 <= height) {
        drawBlock(blockX, blockY, 255);
        blockY += distance;
    } else {
        blockY = 0;
        blockX += 50;
    }

}, speed);