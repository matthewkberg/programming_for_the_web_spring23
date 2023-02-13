function setup() {
    createCanvas(600, 600)
}
function createTile(originX, originY, tileColor, strokeWeight1, strokeColor1, strokeWeight2, strokeColor2, triangleColor, dotColor) {
    translate(originX, originY);
    fill(tileColor);
    noStroke();
    rect(0, 0, 200, 200);
    // Circles
    noFill();
    stroke(strokeColor1);
    strokeWeight(strokeWeight1);
    circle(100, 100, 20);
    circle(100, 100, 100);
    circle(100, 100, 200);
    stroke(strokeColor2);
    strokeWeight(strokeWeight2);
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
    createTile(0, 0, '#1b3858', 2, '#d9dbec', 2, '#1d1b58', '#581b38', '#5f738a');
    createTile(0, 200, '#a695d3', 4, '#8bc2f5', 7, '#f7c7c7', '#d32626', '#e74438');
    createTile(0, 200, '#662c92', 6, '#a283be', 1, '#5f5367', '#6888a7', '#d1dbe4');
    createTile(200, -400, '#031b31', 2, '#351c75', 2, '#6b1b74', '#9e3865', '#ff74ee');
    createTile(0, 200, '#ce7e00', 4, '#b71368', 7, '#44808d', '#074470', '#d6dc58');
    createTile(0, 200, '#035393', 6, '#ffdc77', 1, '#f6b26b', '#38b0c2', '#ffffff');
    createTile(200, -400, '#c5d0b6', 2, '#a0b0bf', 2, '#dcaa91', '#f4f6f1', '#ecdeb1');
    createTile(0, 200, '#000000', 4, '#696b4d', 7, '#f1c232', '#e1e1db', '#f0f0ed');
    createTile(0, 200, '#700d14', 6, '#2b3a67', 1, '#41337a', '#06050c', '#a3121c');
}