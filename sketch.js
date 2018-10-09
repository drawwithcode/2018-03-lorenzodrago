function preload() {
    // put preload code here
}
  var wWidth, wHeight;
function setup() {
    if (windowWidth>windowHeight) {
      wHeight = windowHeight*0.8;
      wWidth = wHeight;
    } else {
      wWidth = windowWidth*0.8;
      wHeight = wWidth;
    }
    frameRate(60);
    colorMode(HSB);
    noStroke()
    createCanvas(wWidth, wHeight);
    rectMode(CENTER);

}



var x, y;
var radius = 13;
var lerpVar = 0;

function draw() {
  /*if (mouseX>250) {
    radius = 30;
  } else {
    radius = 15;
  }*/
  background(200, 30, 20);
    for (x = radius; x < width-radius; x += radius) {
        for (y = radius; y < (height-radius); y += radius) {
            lerpVar = ((frameCount * 0.5 / width * x / 100) * (frameCount * 1 / height * y / 100)) % 1;
            if (lerpVar > 0.5) {
                lerpVar = 1 - lerpVar;
            }
            fill(lerpColor(color(0,70,100), color(255,70,100), lerpVar*2));
            rect(cos(lerpVar*20)*3+x,sin(lerpVar*20)*3+y, radius*0.2, radius*0.8);
            //ellipse(cos(lerpVar*20)*3+x,sin(lerpVar*20)*3+y, radius*0.7)
        }
    }
}
