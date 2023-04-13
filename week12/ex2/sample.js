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
    
    fill(249, 207, 149);
    noStroke();
    ellipse(width/2, height/2, diam, diam);

}