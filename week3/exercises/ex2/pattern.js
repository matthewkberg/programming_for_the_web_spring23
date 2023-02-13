function setup() {
    createCanvas(600, 600)
}
function createTile(originX, originY, tileColor, strokeColor1, strokeColor2, triangleColor, dotColor) {
    translate(originX, originY);
    fill(tileColor);
    rect(0, 0, 200, 200);
    // Circles
    noFill();
    stroke(strokeColor1);
    strokeWeight(5);
    circle(100, 100, 20);
    circle(100, 100, 100);
    circle(100, 100, 200);
    stroke(strokeColor2);
    strokeWeight(2);
    circle(100, 100, 50);
    circle(100, 100, 150);
    circle(100, 100, 175);
    // Triangles
    noStroke();
    fill(triangleColor);
    triangle(30, 75, 58, 20, 86, 75);
    triangle(170, 125, 142, 180, 114, 125);
    triangle(114, 75, 114, 20, 170, 47);
    triangle(30, 152, 86, 125, 86, 180);
    // Dots on triangles
    fill(dotColor);
    circle(58, 60, 20);
    circle(142, 140, 20);
    circle(130, 48, 20);
    circle(70, 153, 20);

}
function draw() {
    createTile(0, 0, '#1b3858', '#d9dbec', '#1d1b58', '#581b38', '#5f738a');
    createTile(0, 200);
    createTile(0, 200);
    createTile(200, -400);
    createTile(0, 200);
    createTile()
}