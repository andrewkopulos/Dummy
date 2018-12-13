var fg;
var feed = []; // an empty array
var numFood = 10;

var a = [1, 2, 3];

function setup() {
    createCanvas(740, 480);
    textSize(32);
    fg = new Frog();

    // initializing 10 pieces of food
    for (var i = 0; i < numFood; i++) {
        feed.push(new Food(random(width), random(height)));
    }
}

function draw() {
    background(0, 255, 0);
    fg.display();

    // display all the food
    for (var i = 0; i < feed.length; i++) {
        feed[i].display();
    }
    text("food: " + frog.length, 10, 25);
}


function mousePressed() {
    fg.eat();
}

function Food(x, y) {
    // keyword this
    // makes variables public on the object

    // public instance variables
    this.x = x;
    this.y = y;
    this.color = color(255, 0, 0);
    this.foodSize = 50;

    this.display = function () {
        fill(this.color);
        ellipse(this.x, this.y, this.foodSize, this.foodSize);
    }
}

function Frog() {
    // private instance variables
    var x = mouseX;
    var y = mouseY;
    var diameter = 200;

    this.getDistance = function (other) {
        var dist = Math.sqrt(Math.pow(x - other.x, 2) + Math.pow(y - other.y, 2));
        return dist;
    };

    this.eat = function () {
        for (var i = 0; i < feed.length; i++) {
            var food = feed[i];
            var d = this.getDistance(food);
            var r1 = food.foodSize / 2;
            var r2 = diameter / 2;
            if (r1 + r2 > d) {
                feed.splice(i, 1);
            }
        }
    };

    this.display = function () {
        x = mouseX;
        y = mouseY;

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
        if(mouseIsPressed){
            fill('#00FFFF');
            ellipse(x + 60, y - 26, 95, 104);
        } else{
            fill('#FF0000');
            ellipse(x + 60, y - 26, 95, 104);
        }

        //pupilRight
        fill('#000000');
        ellipse(x + 42, y - 26, 50, 50);

        //eyeLeft
        if(mouseIsPressed){
            fill('#00FFFF');
            ellipse(x - 60, y - 26, 95, 104);
        } else{
            fill('#FF0000');
            ellipse(x - 60, y - 26, 95, 104);
        }

        //pupilRight
        fill('#000000');
        ellipse(x - 42, y - 26, 50, 50);

        //tongue
        if(mouseIsPressed){
        fill('#EE3E36');
        arc(x, y + 80, 50, 100, 0, PI + QUARTER_PI, CHORD);
        }
    };
}
