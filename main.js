function setup() {
    createCanvas(640, 480);
}

function draw() {
    background('#FFFAED');
    var x = mouseX;
    var y = mouseY;
    // facee
    noStroke();
    fill('#00FF00');
    ellipse(x, y, 230, 230);
    //outerface
    noStroke();
    fill('#32CD32');
    ellipse(x, y, 190, 190);
    //noseright
    fill('#000000');
    ellipse(x + 20, y + 30, 10, 10);
    //noseleft
    fill('#000000');
    ellipse(x - 20, y + 30, 10, 10);
    //eyeRight
    fill('#FF0000');
    ellipse(x + 60, y - 26, 95, 104);
    //pupilRight
    fill('#000000');
    ellipse(x + 42, y - 26, 50, 50);
    //eyeLeft
    fill('#FF0000');
    ellipse(x - 60, y - 26, 95, 104);
    //pupilRight
    fill('#000000');
    ellipse(x - 42, y - 26, 50, 50);
    //tongue
    fill('#EE3E36');
    arc(x, y + 80, 50, 100, 0, PI + QUARTER_PI, CHORD);
}
