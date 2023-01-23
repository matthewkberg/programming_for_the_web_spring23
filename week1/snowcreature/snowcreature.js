let grid = undefined;
let stroke1 = prompt("enter a basic color name in lowercase", "yellow")
let stroke2 = prompt("enter another basic color lowercase", "magenta")
function setup() {
    createCanvas(1000,800);
    background("#9c92b0")
    grid = loadImage("imgs/100px_grid.png")
}
function draw() {
    background(grid);
    // hill 1
    fill("#718e8b");
    stroke("#9caf88");
    ellipse(300, 600, 750, 400);
    // hill 2
    fill("#8fc9a3");
    stroke("#718e8b");
    ellipse(800, 600, 1000, 400);
    // grass
    fill("#9caf88");
    stroke("#718e8b");
    ellipse(500, 800, 1150, 400);
    // mini snowcreature 1 base
    fill("#e8e8e8");
    strokeWeight(5);
    stroke("#335379");
    ellipse(200, 500, 100);
    // mini snowcreature 1 body
    ellipse(200, 450, 65);
    //mini snowcreature 1 head
    ellipse(200, 400, 50);
    // mini snowcreature 1 eyes
    stroke(0);
    strokeWeight(10);
    point(200, 400);
    point(220, 400);
    // mini snowcreature 1 mouth
    noFill();
    stroke(stroke2);
    strokeWeight(5);
    arc(210, 410, 10, 10, 0, 2.63, HALF_PI);
    // mini snowcreature 2 base
    fill("#e8e8e8");
    strokeWeight(5);
    stroke("#335379");
    ellipse(800, 500, 100);
    // mini snowcreature 2 body
    ellipse(800, 450, 65);
    //mini snowcreature 2 head
    ellipse(800, 400, 50);
    // mini snowcreature 2 eyes
    stroke(0);
    strokeWeight(10);
    point(780, 400);
    point(800, 400);
    // mini snowcreature 2 mouth
    noFill();
    stroke(stroke2);
    strokeWeight(5);
    arc(790, 410, 10, 10, 0, 2.63, HALF_PI);
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
    stroke("#b68873");
    strokeWeight(30);
    line(400, 225, 600, 225);
    // hat body
    fill(stroke1);
    quad(425, 125, 575, 150, 545, 200, 450, 200);
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
    stroke(stroke2);
    strokeWeight(5);
    arc(500, 310, 50, 50, 0, 2.63, HALF_PI);

}