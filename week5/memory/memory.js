
const DOWN = 'down';
const UP = 'up';
let startingX = 100; // starting x point
let startingY = 150; // starting y point
let cards = []; // Array for my cards
const gameState = {
    totalPairs: 0,
    flippedCards: [],
    numMatched: 0,
    attempts: 0,
    waiting: false
};
let cardfaceArray = [];
let cardBack;
function preload() {
    cardBack = loadImage('imgs/cardBack.png');
    cardfaceArray = [
        loadImage('imgs/bebeZaharaBenet.png'),
        loadImage('imgs/biancaDelRio.png'),
        loadImage('imgs/bob.png'),
        loadImage('imgs/jaidaEssenceHall.png'),
        loadImage('imgs/jinkxMonsoon.png'),
        loadImage('imgs/raja.png'),
        loadImage('imgs/symone.png'),
        loadImage('imgs/violetChachki.png'),
        loadImage('imgs/willowPill.png'),
        loadImage('imgs/yvieOddly.png')
    ]
}

function setup() {
    createCanvas(1600, 1600);
    background('#361d2e');
    let selectedFaces = [];
    for (let z = 0; z < 10; z++) {
        const randomIdx = floor(random(cardfaceArray.length));
        const face = cardfaceArray[randomIdx];
        // pushes the same cardface twice to make a matching set
        selectedFaces.push(face);
        selectedFaces.push(face);
        // remove the used cardface so it doesn't get selected again
        cardfaceArray.splice(randomIdx, 1); 
    }
    selectedFaces = shuffleArray(selectedFaces);
    for (let j = 0; j < 4; j++) { // Loop for new rows
        for (let i = 0; i < 5; i++) { // Loop for initial row
            const faceImage = selectedFaces.pop();
            cards.push(new Card(startingX, startingY, faceImage)); // New instance
            startingX += 250;
        }
       startingY += 350;
       startingX = 100;
        
    }
    

}

function mouseClicked() {
    for (let k = 0; k< cards.length; k++) { // Loops through all cards
        // If you click on a card it will flip
        if(gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) { 
            console.log('flipped', cards[k]);
            gameState.flippedCards.push(cards[k]);
        }
    }
    
}

// Create class for Card
class Card {
    // Properties = like variables but they are specific to this class
    constructor (x, y, cardFaceImg) { // x & y are the parameters for moving the card position
        this.x = x;
        this.y = y;
        this.width = 200;
        this.height = 300;
        this.face = DOWN;
        this.cardFaceImg = cardFaceImg;
        this.isMatch = false;
        this.show();
    }
    // Method = like functions but specific to this class
    show () {
        if (this.face === UP || this.isMatch) {
            fill('#e1b07e')
            rect(this.x, this.y, this.width, this.height, 10);
            image(this.cardFaceImg, this.x, this.y);

        } else {
            fill('#86a397')
            rect(this.x, this.y, this.width, this.height, 10);
            image(cardBack, this.x, this.y);
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

function shuffleArray (array) {
    let counter = array.length;
    while (counter > 0) {
        // Pick random index
        const idx = Math.floor(Math.random() * counter);
        // Decrease counter by 1 (decrement)
        counter--;
        // Swap tje last element with it
        const temp = array[counter];
        array[counter] = array[idx];
        array[idx] = temp;
    }
    return array;
}