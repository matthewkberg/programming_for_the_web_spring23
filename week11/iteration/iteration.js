let blob = [];

function setup () {
    createCanvas(1200, 800);
    for (let i = 0; i < 500; i++) {
       blob[i] = new Blob();
        
    }
}


function draw() {
    background(0);
    for (let i = 0; i < blob.length; i++) {
        blob[i].move();
        blob[i].show();
    }
}

class Blob {
    constructor() {
        this.x = 200;
        this.y = 150;

    }

    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);

    }

    show() {
        stroke(random(255), random(255), random(255));
        strokeWeight(3);
        noFill();
        rect(this.x, this.y, this.x, this.y);
    }
}