let sourceImg=null;
let maskImg=null;
let textImg=null; 
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_4.jpg";
let maskFile   = "mask_4.png";
let outputFile = "output_1.jpg";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
  textImg = loadImage("texture.png"); 
}

function setup () {
  let main_canvas = createCanvas(1920, 1080);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  // background(255, 227, 150); //goldenyellow
  // background(104, 233, 252); //lightelectricblue
  background(200, 200, 200); //lightgrey 

  // image(sourceImg, 0, 0, width, height);
  sourceImg.loadPixels();
  maskImg.loadPixels();
  textImg.loadPixels(); 
}


function draw () {
  for(let i=0;i<25000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
 
    fill(pix);
    stroke(pix); 


    if(mask[0] > 128) {
      // // pix[1] = 0;--
      // // pix[2] = 0;--
      let pointSize = 10;
      fill(pix); 
    
      strokeWeight(2); 
  
      line(x-10, y+10, x+10, y-10);
      // line(x+15, y-15, x-15, y+15); //crosshatch line
   
    }
    else {
      // pix[0] = 0;--
      // pix[2] = 0;--
      // fill(pix); --
      // fill(pix);--
      // let pointSize = 3;--
      // rect(x, y, pointSize, pointSize);  --
      
      strokeWeight(2); 
      line(x-5, y-5, x+5, y+5);
      line(x+5, y-5, x-5, y+5); //crosshatch line 
    }

  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // // uncomment this to save the result
    // saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }


}
