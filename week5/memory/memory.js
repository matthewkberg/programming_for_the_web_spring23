// Create class for Card
class Card {
    // Properties = like variables but they are specific to this class
    constructor () {
        this.x = 100;
        this.y = 100;
        this.width = 100;
        this.height = 150;
    }
    // Method = like functions but specific to this class
    show () {
        fill('#86a397')
        rect(this.x, this.y, this.width, this.height, 10);
    }
}