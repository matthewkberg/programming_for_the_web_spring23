var video;
var y = 0;

function setup() {
    createCanvas(800, 240);
    pixelDensity(1);
    video = createCapture(VIDEO);
    video.size(320, 240);
    background(200);
}

function draw () {
    video.loadPixels();

    var w = video.width;
    var h = video.height;

    copy(video, w/2, y/2, w, 1, 0, y, w, 1)

    y = y + 1;

    if (y > height) {
        y = 0;
    }
}