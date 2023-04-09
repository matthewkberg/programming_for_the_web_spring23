var video;

function setup() {
    createCanvas(800, 240);
    pixelDensity(1);
    video = createCapture(VIDEO);
    video.size(320,240);
}

function draw () {
    background(200);
}