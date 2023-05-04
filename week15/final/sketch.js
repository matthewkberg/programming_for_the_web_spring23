var star = [];
var song;
var amp;
var volhistory = [];


function setup() {
    createCanvas(800, 600);
    // loop to create new stars
    for (var i = 0; i < 500; i++) {
        star[i] = new Star();
    };
    song = loadSound("./music/gaybar.mp3",loaded);
    amp = new p5.Amplitude();

}

function togglePlaying() {
    if (!song.isPlaying()) {
        song.play();
        song.setVolume(0.5);
        button.html("Pause")    
    } else {
        song.pause();
        button.html("play");
    }
}

function loaded() {
    button = createButton("play");
    button.mousePressed(togglePlaying);
}

function draw() {
    background("#00007f");
    // loop that draws new stars across the top half of the canvas
    for (var i = 0; i < 500; i++) {
        star[i].show();
    };
    
    var vol = amp.getLevel();
    volhistory.push(vol);
    fill(141, 255, 65, 55); // randomized transparency
    noStroke();
    beginShape(QUAD_STRIP);
    for (var j = 0; j < volhistory.length; j++) {
        var y = map(volhistory[j], 0, 1, height/2, 0);
        vertex(j + 5, y);
        vertex(j + 5, y * .25);
        vertex(j + 10, y);
        vertex(j + 10, y * 1.5);


    }
    endShape();

    if (volhistory.length > width) {
        volhistory.splice(0, 1);
    }


}

function Star() {
    this.x = random(0, width);
    this.y = random(0, height/2);

    this.show = function() {
        noStroke();
        fill("#ffd700");
        ellipse(this.x, this.y, random(1, 2), random(1, 2)); // small random variance to width and height to create twinkle effect
    }
}