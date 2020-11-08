// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46", 30, 30, 128, 0, 128, 255, 255, 255);
}

function balloon(t, x, y, bcR, bcG, bcB, tcR, tcG, tcB){
  push();
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  noStroke();
  fill(bcR, bcG, bcB);
  rect(x, y, w + p * 2, h + p * 2);
  fill(tcR, tcG, tcB);
  text(t, x + p, y + h + p);
  fill(bcR, bcG, bcB);
  triangle(x + p + 10, y + h + p * 2, x + p + 30, y + h + p * 2, x + p, y + h + p * 2 + 30);
  pop();
}
