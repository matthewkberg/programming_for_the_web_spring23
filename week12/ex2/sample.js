var song;
var slider;
var button;


function setup() {
    createCanvas(600, 400);
    song = loadSound("heart.mp3", loaded);

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
    song.setVolume(slider.value());
}