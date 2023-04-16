var ambient;
var soundA;
var soundB;
var soundC;
var soundD;
var actA;
var actB;
var button;
var slider;

function setup() {
    createCanvas(800, 600);
    ambient = loadSound("./sound/ambient01.mp3", loaded);
    soundA = loadSound("./sound/bell01.mp3", loaded);
    soundB = loadSound("./sound/bell02.mp3", loaded);
    soundC = loadSound("./sound/bell03.mp3", loaded);
    soundD = loadSound("./sound/bell04.mp3", loaded);
    actA = loadSound("./sound/activate01.mp3", loaded);
    actB = loadSound("./sound/activate02.mp3", loaded);
    amp = new p5.Amplitude();
}

function togglePlaying1() {
    if (!ambient.isPlaying()) {
        ambient.play();
        ambient.setVolume(0.25);
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

function loaded() {
    buttonA = createButton("Ambient");
    buttonA.mousePressed(togglePlaying);

    buttonB = createButton("Activate 1");
    buttonB.mousePressed(togglePlaying);

    buttonC = createButton("Activate 2");
    buttonC.mousePressed(togglePlaying);

    buttonD = createButton("Bell 1");
    buttonD.mousePressed(togglePlaying);

    buttonD = createButton("Bell 2");
    buttonD.mousePressed(togglePlaying);

    buttonE = createButton("Bell 3");
    buttonE.mousePressed(togglePlaying);

    buttonF = createButton("Bell 4");
    buttonF.mousePressed(togglePlaying);

}