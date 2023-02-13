// Create canvas
function setup() {
    createCanvas(200, 200);
}
function createTile() {
    translate(0, 0);
    fill('blue');
    rect(0, 0, 200, 200);
    fill('yellow')
    triangle(30, 75, 58, 20, 86, 75);

}

function draw() {
    createTile();
}