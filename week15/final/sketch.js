var star = [];


function setup() {
    createCanvas(800, 600);
    for (var i = 0; i < 500; i++) {
        star[i] = new Star();
    }
}

function draw() {
    background("#00007f");
    for (var i = 0; i < 500; i++) {
        star[i].show();
    }

}

function Star() {
    this.x = random(0, width);
    this.y = random(0, height/2);

    this.show = function() {
        noStroke();
        fill("#ffd700");
        ellipse(this.x, this.y, random(1, 2), random(1, 2));
    }
}