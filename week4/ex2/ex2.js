let rectX = 0;
function setup() {
    createCanvas(500, 500); 
}

function draw() {
    background(155);
    drawShape();
    rectX += 2;
}

function mousePressed() {
    if((mouseX >= rectX && mouseX <= 75) && (mouseY >= 0 && mouseY <= 75)) {
        console.log('hit');
    }
}

function drawShape() {
    fill('purple');
    rect(rectX, 0, 75, 75);
}
