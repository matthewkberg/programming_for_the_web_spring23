function setup () {
    createCanvas(1200, 800);
    background(0);
    angleMode(DEGREES);
}

function makeBlob() {
    stroke(random(255), random(255), random(255));
    strokeWeight(3);
    noFill();
    rect(300, 60, 400, 60);

}

function draw() {
    makeBlob();
    translate(random(50), random(75));
    rotate(random(360));

}

