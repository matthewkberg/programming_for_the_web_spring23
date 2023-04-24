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
        this.y = this.y + this.speed;

        if(this.y > height) { // when drops leave the canvas, y resets to 0
            this.y = random(0, -height);
        }

    }
}