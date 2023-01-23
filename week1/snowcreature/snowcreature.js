let grid = undefined;
function setup() {
    createCanvas(1000,800);
    background("#9c92b0")
    grid = loadImage("imgs/100px_grid.png")
}
function draw() {
    background(grid);
    // snowcreature base
    fill("#e8e8e8");
    strokeWeight(10);
    stroke("#335379");
    ellipse(500, 600, 300);
    // snowcreature body
    ellipse(500, 425, 200);
    //snowcreature head
    ellipse(500, 275, 150);
    // hat brim
    stroke("#e0d09d");
    strokeWeight(30);
    line(400, 225, 600, 225);
    // hat body
    fill("#e0d09d");
    quad(415, 150, 595, 150, 575, 200, 435, 200);
    // eyes
    stroke(0);
    strokeWeight(40);
    point(475, 275);
    point(525, 275);
    // pupils
    stroke("#e8e8e8");
    strokeWeight(15);
    point(465, 275);
    point(515, 275);
    // mouth
    noFill();
    stroke(0);
    strokeWeight(5);
    arc(500, 310, 50, 50, 0, 2.63, HALF_PI);

}