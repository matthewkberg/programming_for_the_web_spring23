var star = [];
var song;


function setup() {
    createCanvas(800, 600);
    // loop to create new stars
    for (var i = 0; i < 500; i++) {
        star[i] = new Star();
    };
    song = loadSound("./music/gaybar.mp3",loaded);

}

function togglePlaying() {
    if (!song.isPlaying()) {
        song.play();
        song.setVolume(0.25);
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
    background("#00007f");
    // loop that draws new stars across the top half of the canvas
    for (var i = 0; i < 500; i++) {
        star[i].show();
    }

}

function Star() {
    this.x = random(0, width);
    this.y = random(0, height/2);

    this.show = function() {
        noStroke();
        fill("#ffd700");
        ellipse(this.x, this.y, random(1, 2), random(1, 2)); // small random variance to width and height to create twinkle effect
    }
}