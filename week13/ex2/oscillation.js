var pos; //position
var inc; //increment

function setup() {
    createCanvas(800, 600);
    angleMode(DEGREES);

    pos = 0.0; //float varible
    inc = 3.0;   //determines the frequency of the sin value

    pos2 = 0.0;
    inc2 = 7.0;

}

function draw() {
    background(175);
    translate(width/2, height/2); //begin drawing at the center of the canvas

    var mySinVal = sin(pos); //sin function call of the position
    var mySinVal2 = sin(pos2);

    amplified = mySinVal * 50; //multiplied to increase the movement result
    amplified2 = mySinVal2 * 50;

    fill(128, 128, 0);
    for (x = 0; x <= 360; x = x + 10) { //loop that starts at 0 and increases by 10
        curve(0, 10, 20, amplified2, amplified, 50, 60, 70);
        rotate(x);
    }

    pos = pos + inc; //position equals position PLUS the increment value set
    pos2 = pos2 + inc2;

}