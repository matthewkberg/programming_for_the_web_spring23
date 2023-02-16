// Variables for parameters
let blockX = 0;
let blockY = 0;
let blockColor = 255;
let drawTimer;
const speed = 5; // milliseconds
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

// Mapping number keys to grey scale
function keyTyped() {
    let keyToNumber = Number(key);
    if (isNaN(keyToNumber)){
        return;
    }
    keyToNumber = map(keyToNumber, 1, 9, 1, 255);
    console.log('converted number', keyToNumber);
    blockColor = keyToNumber;
    
}

// setInterval to draw blocks and conditions for starting new columns
drawTimer = window.setInterval(() => {
    if(blockY - 50 <= height) {
        drawBlock(blockX, blockY, blockColor);
        blockY += distance;
    } else {
        blockY = 0;
        blockX += 50;
    }
    if(blockY - 50 > height && blockX - 50 > width){
        window.clearInterval(drawTimer);
        alert('done!');
    }

}, speed);