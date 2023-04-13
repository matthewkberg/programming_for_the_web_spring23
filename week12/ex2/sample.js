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
        button.html("pause")
    } else {
        song.pause();
        button.html("play");
    }

}

function loaded() {
    button = createButton("play");
    button.mousePressed(togglePlaying);
    slider = createSlider(0, 1, 0.25, 0.01);
}

function draw() {
    background(77, 101, 164);
    var vol = amp.getLevel();
    var diam = map(vol, 0, 1, 10, 200);
    
    fill(249, 207, 149);
    noStroke();
    ellipse(width/2, height/2, diam, diam);
    song.setVolume(slider.value());
}