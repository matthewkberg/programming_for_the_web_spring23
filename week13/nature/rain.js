var drop = [];

function setup() {
    createCanvas(800, 600);
    for (var i = 0; i < 100; i++) {
        drop[i] = new Drop();
    }


}

function draw() {
    background('#0a2136');
    for (var i = 0; i < 100; i++) {
        drop[i].show();
        drop[i].fall();
    }
    
}

function Drop() {
    this.x = random(0, width);
    this.y = random(0, 10);

    this.show = function() {
        noStroke();
        fill(138, 43, 226);
        ellipse(this.x, this.y, 2, 10);
    }

    this.fall = function() {
        this.y = this.y + 1;

    }
}