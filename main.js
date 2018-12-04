var fg;
var feed = []; // an empty array
var numFood = 10;

function setup() {
    createCanvas(740, 480);
    fg = new Frog();

    // initializing 10 pieces of food
    for(var i = 0; i < numFood; i++) {
        feed.push(new Food(random(width), random(height)));
    }
}

function draw() {
    background(0,255,0);
    fg.display();
    
    // display all the food
    for(var i = 0; i < numFood; i++) {
        feed[i].display();
    }
}

function mousePressed() {
    fg.eat();
}

function Food(x, y) {
    this.x = x;
    this.y = y;
    this.color = color(255, 0, 0);
    this.foodSize = 50;
    
    this.display = function() {
        fill(this.color);
        ellipse(this.x, this.y, this.foodSize, this.foodSize);
    }
}

function Frog() {
    // instance variables
    var x = mouseX;
    var y = mouseY;
    var diameter = 200;

    this.getDistance = function(other) {
        var dist = Math.sqrt(Math.pow(x - other.x, 2) + Math.pow(y - other.y, 2));
        return dist;
    }
    
    this.eat = function() {
        console.log('try to eat');
        for(var i = 0; i < numFood; i++) {
            var food = feed[i];
            var d = this.getDistance(food);
            var r1 = food.foodSize / 2;
            var r2 = diameter / 2;
            if(r1 + r2 > d) {
                console.log('hit');
            }
        }
    }
    this.display = function(){
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
    };
}
