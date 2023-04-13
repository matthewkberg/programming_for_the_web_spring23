var song;

function preload() {
    song = loadSound("heart.mp3");

}

function setup() {
    createCanvas(800, 600);
    song.play();

}

function draw() {
    background(77, 101, 164);
}