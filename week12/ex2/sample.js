var song;
var slider;

function preload() {
    song = loadSound("heart.mp3");

}

function setup() {
    createCanvas(800, 600);
    slider = createSlider(0, 1, 0.5, 0.01);
    song.play();

}

function draw() {
    background(77, 101, 164);
    song.setVolume(slider.value());
}