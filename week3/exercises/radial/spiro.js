let rotateBy = 12;
function setup() {
    createCanvas(600, 600);
    background(0);
    angleMode(DEGREES)
}
function makeArm(rotateBy) {
    let alt = Math.round(rotateBy / 360); // adjust the rotation
    console.log(alt);
    noFill();
    stroke('lightblue');
    strokeWeight(1);
    ellipse(150, 150 + alt, 150 - alt);
    stroke('magenta');
    strokeWeight(3);
    triangle(alt + 30, alt * 75, 58, alt - 20, 86, 75);
    stroke('yellow');
    strokeWeight(1);
    square(30, 20, 20 * alt);
    stroke('blue');
    strokeWeight(4);
    bezier(alt + 10, 20, 10, alt - 10, 90, 90, 15, 80);
    bezier(10, alt * 20, alt + 10, 10, 90, 90, 15, 80);


}

function draw() {
    translate(300, 300);
    rotate(rotateBy); // rotates canvas
    makeArm(rotateBy);
    rotateBy += 12;
}
function mousePressed() {
    noLoop();
}