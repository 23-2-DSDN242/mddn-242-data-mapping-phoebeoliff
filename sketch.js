let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
// let sourceFile = "input_6.jpg";
// let maskFile   = "mask_6.jpg";
let sourceFile = "input_1.jpg";
let maskFile   = "mask_1.jpg";
let outputFile = "output_1.jpg";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(1920, 1080);
  main_canvas.parent('canvasContainer');

  // imageMode(CENTER);
  noStroke();
  background(255, 227, 150); //goldenyellow
  // image(sourceImg, 0, 0, width, height);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  for(let i=0;i<10000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);
    stroke(pix); 


    if(mask[0] > 128) {
      // // pix[1] = 0;
      // // pix[2] = 0;
      let pointSize = 10;
      fill(pix); 
    
      rect(x, y, pointSize, pointSize);
      // strokeWeight(6); 
      // line(x-10, y, x+10, y);
    }
    else {
      // pix[0] = 0;
      // pix[2] = 0;
      // fill(pix); 
      // fill(pix);
      // let pointSize = 10;
      // rect(x, y, pointSize, pointSize);  
      strokeWeight(2); 
      line(x-10, y-10, x+10, y+10);
    }

  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    // saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
