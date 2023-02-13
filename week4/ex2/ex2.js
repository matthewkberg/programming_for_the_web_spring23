function setup() {
    createCanvas(500, 500); 
}

function draw() {
    background(155);
    drawShape();  
}

function mousePressed() {
    if(mouseX >= 0 && mouseX <= 75) {
        console.log('hit');
    }
}

function drawShape() {
    fill('purple');
    rect(0, 0, 75, 75);
}
