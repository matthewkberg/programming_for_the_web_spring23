function setup() {
    createCanvas(600, 600)
}
function createTile(originX, originY) {
    translate(originX, originY);
    fill('#1b3858');
    rect(0, 0, 200, 200);
    noFill();
    stroke('#d9dbec');
    strokeWeight(5);
    circle(100, 100, 20);
    circle(100, 100, 100);
    circle(100, 100, 200);
    noStroke();
    fill('#581b38');
    triangle(30, 75, 58, 20, 86, 75);
    triangle(170, 125, 142, 180, 114, 125);
    triangle(114, 75, 114, 20, 170, 47);
    triangle(30, 152, 86, 125, 86, 180);
    fill('#5f738a');
    circle(58, 60, 20);
    circle(142, 140, 20);
    circle(130, 48, 20);
    circle(70, 153, 20);
    noFill();
    stroke('#1d1b58');
    strokeWeight(2);
    circle(100, 100, 50);
    circle(100, 100, 150);
    circle(100, 100, 175);

}
function draw() {
    createTile(0, 0);
    createTile(0, 200);
}