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
    strokeWeight(1);
    ellipse(150, 150 / alt, 150 - alt);
    stroke('magenta');
    strokeWeight(3);
    triangle(alt + 30, alt * 75, 58, 20, 86, 75);
    stroke('aqua');
    strokeWeight(1);
    square(30, 20, 20 * alt);
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