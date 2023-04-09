var video;

var x = 0;

function setup() {
    createCanvas(800, 240);
    pixelDensity(1);
    video = createCapture(VIDEO);
    video.size(320,240);
    background(200);
}

function draw () {
    video.loadPixels();

    var w = video.width;
    var h = video.height;

// telling what to copy and where to copy it to
    copy(
         video, // source
         w/2, // where to start, center of video frame
         0, // top of video frame
         1, // how many pixels wide
         h, // how many pixels tall
         x, 0, // where to copy to on the canvas
         1, // how many pixels wide
         h // same height
         )

        x = x + 1; // moves the copied pixels across the canvas

// sets x back to zero when it reaches end of canvas
        if (x > width) { 
            x = 0;
        }


}