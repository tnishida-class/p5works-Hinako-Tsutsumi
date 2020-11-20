// 最終課題を制作しよう
let cx, cy, maxR, ax, ay, x;

function setup(){
  createCanvas(windowWidth, windowHeight);
  strokeWeight(3);

  cx = 200;
  cy = 200;
  maxR = min(400, 400);
  ax = 600;
}

function draw(){
  let green = color(0, 255, 0);
  let red = color(255, 0, 0);
  let black = color(0);
  let cream = color(242, 212, 147);

  background(160, 192, 255);
  drawCircle(black, maxR);
  drawArcs(green, red, maxR * 0.8);
  drawArcs(cream, black, maxR * 0.75);
  drawArcs(green, red, maxR * 0.5);
  drawArcs(cream, black, maxR * 0.45);
  drawCircle(green, maxR * 0.1);
  drawCircle(red, maxR * 0.05);

  arrow(ax, 200)
  if(keyIsDown(LEFT_ARROW)){
    ax --;
    if(ax > 200){
      ax --;
    }
    else{
      ax = 200;
    }
    }
}

function drawCircle(c, r){
  push();
  stroke(255);
  fill(c);
  ellipse(cx, cy, r, r);
  pop();
}

function drawArcs(c1, c2, r) {
  push();
  stroke(255);
  for (let i = 0; i < 20; i++) {
    let start = TWO_PI / 20 * i;
    let stop = TWO_PI / 20 * (i + 1);
    fill(i % 2 == 0 ? c1 : c2);
    arc(cx, cy, r, r, start, stop, PIE);
  }
  pop();
}

function arrow(ax, ay){
  triangle(ax, ay, ax + 20, ay + 10, ax + 20, ay - 10);
  line(ax, ay, ax + 200, ay);
  line(ax + 175, ay + 15, ax + 215, ay + 15);
  line(ax + 175, ay - 15, ax + 215, ay - 15);
  for (var i = 0; i < 3; i++) {
    let x = i * 20 + ax + 160
    line(x , ay, x + 15, ay + 15)
    line(x , ay, x + 15, ay - 15)
  }
  stroke(0, 0, 255);
  fill(0, 0, 255);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
