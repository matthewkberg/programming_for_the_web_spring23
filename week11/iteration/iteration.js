function setup () {
    createCanvas(1200, 800);
    background(0);
    angleMode(DEGREES);
}

function makeBlob() {
    noStroke();
    fill(random(255), random(255), random(255));
    quad(300, 600, 400, 600, 750, 800, 400, 800)

}

function draw() {
    makeBlob();

}

