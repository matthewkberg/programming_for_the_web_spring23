let myCard;
const DOWN = 'down';
const UP = 'up';
function setup() {
    createCanvas(1000, 800);
    background('#361d2e');
    myCard = new Card();
}

function mousePressed() {
    console.log(myCard.didHit(mouseX, mouseY));
    
}

// Create class for Card
class Card {
    // Properties = like variables but they are specific to this class
    constructor () {
        this.x = 100;
        this.y = 100;
        this.width = 100;
        this.height = 150;
        this.face = DOWN;
        this.show();
    }
    // Method = like functions but specific to this class
    show () {
        if (this.face === DOWN) {
            fill('#86a397')
            rect(this.x, this.y, this.width, this.height, 10);
        } else {
            fill('#e1b07e')
            rect(this.x, this.y, this.width, this.height, 10);
        }
        
    }

    didHit (mouseX, mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.width &&
            mouseY >= this.y && mouseY <= this.y + this.height) {
                this.flip();
                return true;
        } else {
            return false;
        }
    }

    flip () {
        if (this.face === DOWN) {
            this.face = UP;
        } else {
            this.face = DOWN;
        }
        this.show();
    }
}