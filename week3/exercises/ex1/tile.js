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

}

function draw() {
    createTile();
}