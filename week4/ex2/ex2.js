let rectX = 0;
let rectY;
let clickCount = 0;
const rectWidth = 75;
const rectHeight = 75;
let speed;
function setup() {
    createCanvas(500, 500);
    rectY = random(height - rectHeight); // selects a random placement on the y axis between 75 and 500
    speed = random(1, 3);
}

function draw() {
    background(155);
    drawShape();
    rectX += speed; // moves box across the canvas on the x axis
    if (rectX > width) {
        noLoop();
        text('Your score was ' + clickCount, 100, 300);
        
    }
}

function mousePressed() {
    if((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= rectY && mouseY <= rectY + rectHeight)) {
        clickCount++;
        console.log('hit', clickCount);
    }
    
}

function drawShape() {
    fill('purple');
    rect(rectX, rectY, rectWidth, rectHeight);
}
