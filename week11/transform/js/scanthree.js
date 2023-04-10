var video;
var x = 0;
var y = 0;
var xb = 800;
var yb = 480;

function setup() {
    createCanvas(800, 480);
    pixelDensity(1);
    video = createCapture(VIDEO);
    video.size(320,240);
    background(200);
}

function draw () {
    video.loadPixels();

    var w = video.width;
    var h = video.height;


    copy(video, w/2, 0, 1, h, x, 0, 1, h)

        x = x + 1;

        if (x > width) { 
            x = 0;
        }
    
    copy(video, w/2, y/2, 240, 1, 300, yb, w, 1)

        yb = yb - 1;
    
        if (yb < 0) {
            yb = 480;
        }

    copy(video, w/2, 0, 1, h, xb, 240, 1, h)

        xb = xb - 1;

        if (xb < 0) { 
            xb = 240;
        }
    
    copy(video, w/2, y/2, 240, 1, 100, y, w, 1)

        y = y + 1;
    
        if (y > height) {
            y = 0;
        }
    

    copy(video, w/2, y/2, 240, 1, 300, yb, w, 1)

        yb = yb - 1;
    
        if (y > height) {
            y = 0;
        }

}