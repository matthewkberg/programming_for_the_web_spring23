let grid = undefined;
function setup() {
    createCanvas(1000,800);
    background("#9c92b0")
    grid = loadImage("imgs/100px_grid.png")
}
function draw() {
    background(grid);
}