var drop;

function setup() {
    createCanvas(800, 600);
    drop = new Drop();

}

function draw() {
    background('#0a2136');
    drop.show();
    drop.fall();
    
}

function Drop() {
    this.x = width/2;
    this.y = 30;

    this.show = function() {
        noStroke();
        fill(138, 43, 226);
        ellipse(this.x, this.y, 2, 10);
    }

    this.fall = function() {
        this.y = this.y + 1;

    }
}