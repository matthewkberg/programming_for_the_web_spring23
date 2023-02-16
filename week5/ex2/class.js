let bubble1;
let bubble2;


function setup() {
    createCanvas(600, 400);
    bubble1 = new Bubble();
    bubble2 = new Bubble();
    // print(bubble.x, bubble.y);
}

function draw() {
    background(0);
    bubble1.move();
    bubble1.show();
    bubble2.move();
    bubble2.show();
}

class Bubble {              // defines the template
    constructor() {         // defines how the object is initialized
        this.x = 200;
        this.y = 150;
    }
    
    // functionality of the object

    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }

    show() {
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