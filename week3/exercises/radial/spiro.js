let rotateBy = 8;
function setup() {
    createCanvas(600, 600);
    background(0);
    angleMode(DEGREES)
}
function makeArm(rotateBy) {
    let alt = Math.round(rotateBy / 360); // adjust the rotation
    console.log(alt);
    noFill();
    stroke('white');
    strokeWeight(2);
    ellipse(150, 150 + alt, 150 - alt);
}

function draw() {
    translate(300, 300);
    rotate(rotateBy); // rotates canvas
    makeArm(rotateBy);
    rotateBy += 8;
}
function mousePressed() {
    noLoop();
}