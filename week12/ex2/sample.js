var song;
var slider;
var button;
var amp;


function setup() {
    createCanvas(600, 400);
    song = loadSound("heart.mp3", loaded);
    amp = new p5.Amplitude();

}

function togglePlaying() {
    if (!song.isPlaying()) {
        song.play();
        song.setVolume(0.25);
        button.html("pause")
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
    background(77, 101, 164);
    var vol = amp.getLevel();
    var diam = map(vol, 0, 1, 10, 200);

    fill(143, 177, 177);
    noStroke();
    ellipse(200, 100, diam*4, diam*4);

    fill(253, 190, 209);
    noStroke();
    ellipse(400, 250, diam*6, diam*6);

    fill(172, 183, 255);
    noStroke();
    ellipse(50, 350, diam*3, diam*3);
    
    fill(249, 207, 149);
    noStroke();
    ellipse(275, 275, diam, diam);

    fill(143, 177, 177);
    noStroke();
    ellipse(550, 300, diam*8, diam*8);

    fill(249, 207, 149);
    noStroke();
    ellipse(150, 200, diam*5, diam*5);

    fill(253, 190, 209);
    noStroke();
    ellipse(100, 50, diam*2, diam*2);

    fill(172, 183, 255);
    noStroke();
    ellipse(500, 75, diam*8, diam*8);

}