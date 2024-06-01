function setup() {
    createCanvas(800, 800);
    background("grey");
  }
  function draw() {
  
  stroke("purple")
  fill("pink")
    
   // console.log(mouseIsPressed );
    if (mouseIsPressed){
       rect(mouseX, mouseY, 50, 22)
    
    }
  }
