// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if(i % 2 != j % 2){
        fill(128);
        rect(size * i, size * j, size, size);
        if(j == 0 || j == 1 || j == 2){
          fill(255, 0, 0)
          ellipse(size * i + size / 2, size * j + size / 2, size)
        }
        else if(j == 5 || j == 6 || j == 7){
          fill(0)
          ellipse(size * i + size / 2, size * j + size / 2, size)
        }
      }
      else{
        fill(255)
        rect(size * i, size * j, size, size);
      }
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    }
}
}
