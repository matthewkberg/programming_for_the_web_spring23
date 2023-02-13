let rotateBy = 8;
function setup() {
    createCanvas(600, 600);
    background(0);
    angleMode(DEGREES)
}
function makeArm() {
    noFill();
    stroke('white');
    strokeWeight(2);
    ellipse(150, 150, 150);
}

function draw() {
    translate(300, 300);
    rotate(rotateBy); // rotates canvas
    makeArm();
    rotateBy += 8;

}