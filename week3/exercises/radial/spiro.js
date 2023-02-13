function setup() {
    createCanvas(600, 600);
    background(0);
    angleMode(DEGREES)
}

function draw() {
    translate(300, 300);
    rotate(8); // rotates canvas
    noFill();
    stroke('white');
    strokeWeight(2);
    ellipse(150, 150, 150);

}