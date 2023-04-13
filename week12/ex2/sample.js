var song;
var slider;
var button;


function setup() {
    createCanvas(800, 600);
    song = loadSound("heart.mp3", loaded);
    button = createButton("play");
    button.mousePressed(togglePlaying);
    slider = createSlider(0, 1, 0.25, 0.01);
}

function togglePlaying() {
    song.play();
}

function loaded() {
  //  song.play();
}

function draw() {
    background(77, 101, 164);
    song.setVolume(slider.value());
}