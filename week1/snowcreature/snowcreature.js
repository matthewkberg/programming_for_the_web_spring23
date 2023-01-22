let grid = undefined;
function setup() {
    createCanvas(1000,800);
    background("#9c92b0")
    grid = loadImage("imgs/100px_grid.png")
}
function draw() {
    background(grid);
    // snowcreature legs
    fill("#e8e8e8");
    strokeWeight(10);
    stroke("#335379");
    ellipse(500, 600, 300);
}