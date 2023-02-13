// Create canvas
function setup() {
    createCanvas(200, 200);
}
function createTile() {
    translate(0, 0);
    fill('blue');
    rect(0, 0, 200, 200);
    noFill();
    stroke('green');
    strokeWeight(5);
    circle(100, 100, 20);
    circle(100, 100, 100);
    circle(100, 100, 200);
    noStroke();
    fill('yellow');
    triangle(30, 75, 58, 20, 86, 75);
    triangle(170, 125, 142, 180, 114, 125);
    triangle(114, 75, 114, 20, 170, 47);
    triangle(30, 152, 86, 125, 86, 180);
    fill('pink');
    circle(58, 60, 20);
    circle(142, 140, 20);
    circle(130, 48, 20);
    circle(70, 153, 20);
    noFill();
    stroke('orange');
    strokeWeight(2);
    circle(100, 100, 50);
    circle(100, 100, 150);
    circle(100, 100, 250);


}

function draw() {
    createTile();
}