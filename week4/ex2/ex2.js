let rectX = 0;
let rectWidth = 75;
function setup() {
    createCanvas(500, 500); 
}

function draw() {
    background(155);
    drawShape();
    rectX++; // moves box across the canvas on the x axis
}

function mousePressed() {
    if((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= 0 && mouseY <= 75)) {
        console.log('hit');
    }
}

function drawShape() {
    fill('purple');
    rect(rectX, 0, rectWidth, 75);
}
