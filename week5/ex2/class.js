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