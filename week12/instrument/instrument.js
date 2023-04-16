var ambient;
var soundA;
var soundB;
var soundC;
var soundD;
var actA;
var actB;
var button;
var vol;
var diam;


function setup() {
    createCanvas(800, 600);

    ambient = loadSound("./sound/ambient01.mp3");
    soundA = loadSound("./sound/bell01.mp3");
    soundB = loadSound("./sound/bell02.mp3");
    soundC = loadSound("./sound/bell03.mp3");
    soundD = loadSound("./sound/bell04.mp3");
    actA = loadSound("./sound/activate01.mp3");
    actB = loadSound("./sound/activate02.mp3");
    amp = new p5.Amplitude();
    
    buttonA = createButton("Ambient");
    buttonA.mousePressed(togglePlaying1);

    buttonB = createButton("Activate 1");
    buttonB.mousePressed(togglePlaying2);

    buttonC = createButton("Activate 2");
    buttonC.mousePressed(togglePlaying3);

    buttonD = createButton("Bell 1");
    buttonD.mousePressed(togglePlaying4);

    buttonD = createButton("Bell 2");
    buttonD.mousePressed(togglePlaying5);

    buttonE = createButton("Bell 3");
    buttonE.mousePressed(togglePlaying6);

    buttonF = createButton("Bell 4");
    buttonF.mousePressed(togglePlaying7);

}

function togglePlaying1() {
    if (!ambient.isPlaying()) {
        ambient.play();
        ambient.setVolume(0.5);
    } else {
        ambient.pause();
    }
}

function togglePlaying2() {
    if (!actA.isPlaying()) {
        actA.play();
        ActA.setVolume(0.25);
    } else {
        actA.pause();
    }
}

function togglePlaying3() {
    if (!actB.isPlaying()) {
        actB.play();
        ActB.setVolume(0.25);
    } else {
        actB.pause();
    }
}

function togglePlaying4() {
    if (!soundA.isPlaying()) {
        soundA.play();
        soundA.setVolume(0.25);
    } else {
        soundA.pause();
    }
}

function togglePlaying5() {
    if (!soundB.isPlaying()) {
        soundB.play();
        soundB.setVolume(0.25);
    } else {
        soundB.pause();
    }
}

function togglePlaying6() {
    if (!soundC.isPlaying()) {
        soundC.play();
        soundC.setVolume(0.25);
    } else {
        soundC.pause();
    }
}

function togglePlaying7() {
    if (!soundD.isPlaying()) {
        soundD.play();
        soundD.setVolume(0.25);
    } else {
        soundD.pause();
    }
}

function draw() {
    background(0);
    var vol = amp.getLevel();
    var diam = map(vol, 0, 1, 15, 200);
    var top = map(vol, 0, 1, 100, 500);

    fill(204, 255, 242);
    noStroke();
    ellipse(400, 300, diam*4, diam*2);

    stroke(105);
    strokeWeight(10);
    line(500, 300, top*2, top*4);

    fill(255, 217, 204);
    noStroke();
    ellipse(300, 400, diam*6, diam*3);

    stroke(255);
    strokeWeight(5);
    line(100, 50, top*4, top*1.5);

    fill(162, 173, 208);
    noStroke();
    ellipse(500, 150, diam*8, diam*12);

    stroke(35);
    strokeWeight(20);
    line(75, 300, top*3, top*2);

    fill(204, 255, 242);
    noStroke();
    ellipse(75, 350, diam*5, diam*9);

    stroke(50);
    strokeWeight(15);
    line(500, 300, top*2, top*4);

    fill(255, 217, 204);
    noStroke();
    ellipse(600, 300, diam*8, diam*3.5);

    stroke(255);
    strokeWeight(3);
    line(370, 245, top*6, top*3.4);

    fill(162, 173, 208);
    noStroke();
    ellipse(100, 50, diam*3, diam*2.5);

    stroke(175);
    strokeWeight(50);
    line(50, 500, top*7, top*4);
}