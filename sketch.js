let sourceImg=null;
let maskImg=null;
let textImg=null; 
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_6.jpg";
let maskFile   = "mask_6.jpg";
// let sourceFile = "input_3.jpg";
// let maskFile   = "mask_3.jpg";
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
 //experiment texture image code -------------
 let X_STOP = 1920;
let Y_STOP = 1080;

function draw () {
  //experiment texture image code -------------
  let num_lines_to_draw = 40;
  // get one scanline
  for(let j=renderCounter; j<renderCounter+num_lines_to_draw && j<1080; j++) {
    for(let i=0; i<X_STOP; i++) {
      colorMode(RGB);
      let pix = sourceImg.get(i, j);
      // create a color from the values (always RGB)
      let col = color(pix);
      let mask = maskImg.get(i, j);
      let tex = textImg.get(i, j);

      if(mask[0] > 128) {
        set(i, j, pix);
      }
      else {
        let new_col = [0, 0, 0, 255];
        for(let k=0; k<3; k++) {
          new_col[k] = map(20, 0, 100, pix[k], tex[k]);
        }
        // let new_col = color(h, s,  newBrt);
        set(i, j, new_col);
      }
    }
  }
  renderCounter = renderCounter + num_lines_to_draw;
  updatePixels();

  // print(renderCounter);
  if(renderCounter > Y_STOP) {
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
  //MY CODE HERE ----------------------------------
//   for(let i=0;i<25000;i++) {
//     let x = floor(random(sourceImg.width));
//     let y = floor(random(sourceImg.height));
//     let pix = sourceImg.get(x, y);
//     let mask = maskImg.get(x, y);
 
//     fill(pix);
//     stroke(pix); 


//     if(mask[0] > 128) {
//       // // pix[1] = 0;--
//       // // pix[2] = 0;--
//       let pointSize = 10;
//       fill(pix); 
    
//       // // rect(x, y, pointSize, pointSize);--
//       strokeWeight(5); 
  
//       line(x-5, y+5, x+5, y-5);
   
//     }
//     else {
//       // pix[0] = 0;--
//       // pix[2] = 0;--
//       // fill(pix); --
//       // fill(pix);--
//       // let pointSize = 3;--
//       // rect(x, y, pointSize, pointSize);  --
      
//       strokeWeight(2); 
//       line(x-5, y-5, x+5, y+5);
   
//     }

//   }
//   renderCounter = renderCounter + 1;
//   if(renderCounter > 10) {
//     console.log("Done!")
//     noLoop();
//     // uncomment this to save the result
//     // saveArtworkImage(outputFile);
//   }
// }

// function keyTyped() {
//   if (key == '!') {
//     saveBlocksImages();
//   }


}
