var star = [];
var tree = [];
var song;
var amp;
var fft;
var volhistory = [];


function setup() {
    createCanvas(800, 600);
    // loop to create new stars
    for (var i = 0; i < 500; i++) {
        star[i] = new Star();
        tree[i] = new Tree();

    };
    song = loadSound("./music/gaybar.mp3",loaded);
    amp = new p5.Amplitude();
    fft = new p5.FFT(0, 1024);

}

function togglePlaying() {
    if (!song.isPlaying()) {
        song.play();
        song.setVolume(0.5);
        button.html("Pause")    
    } else {
        song.pause();
        button.html("play");
    }
}

function loaded() {
    button = createButton("play");
    button.mousePressed(togglePlaying);
}

function draw() {
    background("#00002c");
    // loop that draws new stars across the top half of the canvas
    for (var i = 0; i < 500; i++) {
        star[i].show();
    };
    
    var vol = amp.getLevel();
    volhistory.push(vol);

    var spectrum = fft.analyze();
    //console.log(spectrum);
    
    fill(157, 2, 215, 35);
    noStroke();
    beginShape(QUAD_STRIP);
    for (var j = 0; j < volhistory.length; j++) {
        var y = map(volhistory[j], 0, 1, 285, 0);
        vertex(j, y);
        vertex(j, y * .25);
        vertex(j + 5, y);
        vertex(j + 5, y * 1.75);
    }
    endShape();

    fill(141, 255, 65, 45);
    noStroke();
    beginShape(QUAD_STRIP);
    for (var j = 0; j < volhistory.length; j++) {
        var y = map(volhistory[j], 0, 1, 310, 0);
        vertex(j + 5, y);
        vertex(j + 5, y * .25);
        vertex(j + 10, y);
        vertex(j + 10, y * 1.5);
    }
    endShape();

    if (volhistory.length > width) {
        volhistory.splice(0, 1);
    }

    for (var i = 0; i < 500; i++) {
        tree[i].show();
    };


}

function Star() {
    this.x = random(0, width);
    this.y = random(0, 500);

    this.show = function() {
        noStroke();
        fill("#ffd700");
        ellipse(this.x, this.y, random(1, 2), random(1, 2)); // small random variance to width and height to create twinkle effect
    }
}

function Tree() {
    this.x = random(-width, width);
    this.y = random(475, height + 50);

    this.show = function() {
        stroke("#000E00");
        fill("#001000");
        triangle(this.x, this.y, this.x + 75 , this.y - 115 , this.x + 155, this.y);
        stroke("#000E00");
        fill("#001500");
        triangle(this.x, this.y, this.x + 50 , this.y - 100 , this.x + 100, this.y)
    }
}