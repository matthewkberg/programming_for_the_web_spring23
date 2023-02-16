let bubble;


function setup() {
    createCanvas(600, 400);
    bubble = new Bubble();
    print(bubble.x, bubble.y);
}

function draw() {
    background(0);
    // move();
    // display();
}

class Bubble {
    constructor() {
        this.x = 200;
        this.y = 150;
    }
    
    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }

    display() {
        stroke(255);
        strokeWeight(1);
        noFill();
        ellipse(this.x, this.y, 24, 24);
    }

}

// function display() {
//     stroke(255);
//     strokeWeight(1);
//     noFill();
//     ellipse(bubble.x, bubble.y, 24, 24);
// }

// function move() {
//     bubble.x = bubble.x + random(-5, 5);
//     bubble.y = bubble.y + random(-5, 5);
    
// }