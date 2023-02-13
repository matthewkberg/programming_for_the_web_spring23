// Create canvas
function setup() {
    createCanvas(200, 200);
}
function createTile() {
    translate(0, 0);
    fill('blue');
    rect(0, 0, 200, 200);
    noStroke();
    fill('yellow');
    triangle(30, 75, 58, 20, 86, 75);
    triangle(170, 125, 142, 180, 114, 125);
    triangle(114, 75, 114, 20, 170, 47);
    triangle(30, 152, 86, 125, 86, 180);
    fill('pink');
    circle(58, 60, 20);
    circle(142, 140, 20);

}

function draw() {
    createTile();
}