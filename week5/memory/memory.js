
const DOWN = 'down';
const UP = 'up';
let startingX = 100; // starting points
let startingY = 100;
let cards = []; // Array for my cards
const gameState = {

};
let cardBack;
function preload() {
    cardBack = loadImage('imgs/cardBack.png');
}

function setup() {
    createCanvas(1200, 1000);
    background('#361d2e');
    for (let j = 0; j < 4; j++) { // Loop for new rows
        for (let i = 0; i < 5; i++) { // Loop for initial row
            cards.push(new Card(startingX, startingY)); // New instance
            startingX += 150;
        }
       startingY += 200;
       startingX = 100;
        
    }
    

}

function mouseClicked() {
    for (let k = 0; k< cards.length; k++) { // Loops through all cards
        if(cards[k].didHit(mouseX, mouseY)) { // If you click on a card it will flip
            console.log('flipped');
        }
    }
    
}

// Create class for Card
class Card {
    // Properties = like variables but they are specific to this class
    constructor (x, y) { // x & y are the parameters for moving the card position
        this.x = x;
        this.y = y;
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
            image(cardBack, this.x, this.y, 100, 150);
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