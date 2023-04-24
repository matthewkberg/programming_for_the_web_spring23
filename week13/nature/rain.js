var drop = [];

function setup() {
    createCanvas(800, 600);
    for (var i = 0; i < 500; i++) { // loop to create new raindrops
        drop[i] = new Drop();
    }


}

function draw() {
    background('#0a2136');
    for (var i = 0; i < 500; i++) { // loop to draw new raindrops across canvas
        drop[i].show();
        drop[i].fall();
    }
    
    fill('#69453a');
    stroke('#69453a');
    strokeWeight(10);
    line(width/2, 200, width/2, 425);
    noFill();
    arc(width/2, 410, 50, 30, HALF_PI, PI);

    noStroke();
    fill('#ffd700');
    arc(width/2, height/2, 200, 150, PI, TWO_PI);
}

function Drop() {
    this.x = random(0, width);
    this.y = random(0, -height);

    this.show = function() {
        noStroke();
        fill(138, 43, 226);
        ellipse(this.x, this.y, 2, 10);
    }

    this.fall = function() { // sets the rate the raindrop falls at
        this.speed = random(1, 15);
        this.gravity = 1.05;
        this.y = this.y + (this.speed + this.gravity);

        if(this.y > height) { // when drops leave the canvas, y resets to 0
            this.y = random(0, -height);
        }

    }
}