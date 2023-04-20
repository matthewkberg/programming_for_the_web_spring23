var pos; //position
var inc; //increment

function setup() {
    createCanvas(800, 600);
    angleMode(DEGREES);

    pos = 0.0; //float varible
    inc = 3.0   //determines the frequency of the sin value 

}

function draw() {
    background(175);

    var mySinVal = sin(pos); //sin function call of the position

    amplified = mySinVal * 50;

    ellipse(amplified + 150, height/2, 100, 100);

    pos = pos + inc //position equals position PLUS the increment value set

}