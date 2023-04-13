var song;
var slider;


function setup() {
    createCanvas(800, 600);
    song = loadSound("heart.mp3", loaded);
    slider = createSlider(0, 1, 0.25, 0.01);
}

function loaded() {
    song.play();
}

function draw() {
    background(77, 101, 164);
    song.setVolume(slider.value());
}