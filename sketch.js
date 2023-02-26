//variable to change: angleMode(radio button) :), rectMode(drop down) :) -RADIUS,:) rotate(slider):), hsb(colour picker ), fader ( button ), save(button) :)

let angleModeRadio;
let rectModeSelect;
let rotateSlider;
let hsbColorPicker;
let saveButton;

function setup() {
  createCanvas(windowWidth, windowHeight)
  
  angleModeRadio = createRadio();
  angleModeRadio.size(200,200);
  angleModeRadio.position(10,10);  
  angleModeRadio.style('width:100px; color:white; font-family:Helvetica;');
  angleModeRadio.option('DEGREES');
  angleModeRadio.option('RADIANS');
  angleModeRadio.selected('DEGREES');
  
  textAlign(CENTER);
  
  background(200);
  rectModeSelect = createSelect();
  rectModeSelect.size(150,40);
  rectModeSelect.position(10, 60);
  rectModeSelect.style('font-family:Helvetica; font-size:28px; ');
  rectModeSelect.option('RADIUS');
  rectModeSelect.option('CENTER');
  rectModeSelect.option('CORNER');
  rectModeSelect.selected('CENTER');
  rectModeSelect.changed(myRectModeSelectEvent);
  
  rotateSlider = createSlider(100, 1000, 100, 10); //last 10 allows for seamless transition
  rotateSlider.position(0, 110);
  rotateSlider.style('width:100px', '80px');
  rotateSlider.class("Slider");
  
  hsbColorPicker = createColorPicker("maroon");
  
  saveButton = createButton('click to save image');
  saveButton.size(150,60);
  saveButton.position(50, 150);
  saveButton.style('font-family:Helvetica; font-size:15px; ');
  saveButton.class("button-85");
  saveButton.mousePressed(saveImage);
  
  
}

function draw() {
  
  let val = angleModeRadio.value();
  background(val);
  text(val, width / 2, height / 2);
  
  background("black")
  noFill()
  
  if (angleModeRadio.selected() != undefined){
    
	  let currentAngleMode = angleModeRadio.value()
      
      switch(currentAngleMode)
      {
          case "DEGREES":
            
            angleMode(DEGREES)
            
          break;
            
          case "RADIANS":
            
            angleMode(RADIANS)
            
          break;
            
      }
      
  }else{
      console.log( "Nothing Selected")
  }

  // if you /2 on width and height, it will center the design
  // if you /1.3 on width, it will offset the design to the right
  
  
  // 2.0 to 3.0 will move from centre to left
  // 1.0 to 2.0 will move from centre to right
  
  // 2.0 will centre the design
  
  
  // if you had a slider that starts at  centres on 2 and finishes on 2
  // you could offer teh user to translate the design to anywhere on the left most
  // side of the screen, to the center, or the right most side of the screen
  
  translate(width/2, height/2)
  
//translates the rect to the centre
  for (var i = 0; i < 200; i++) {
    push()
     
    rotate(sin(frameCount + i) * rotateSlider.value())  //change that end feature and the i feature    
    
 
        
    var r = map(sin(frameCount), -1, 1, 50, 255)
    var g = map(cos(frameCount / 2), -1, 1, 50, 255)
    var b = map(sin(frameCount / 4), -1, 1, 50, 255)
    
    color(HSB)
    stroke(r,g,b)

    

    
    

    
    rect(0,0, 600 - i * 3, 600 - i * 3,200-i ) //change the end feature
  
    pop()
   //in order to create the animation, we need more squares , making a for loop
  //for every loop, the width and height should be decreased
  //we will also do this to the last argument
  }
      
  
}


function myRectModeSelectEvent() {
  let currentRectMode = rectModeSelect.value();
  switch(currentRectMode)
      {
          case "RADIUS":
            
            rectMode(RADIUS)
            
          break;
            
          case "CENTER":
            
            rectMode(CENTER)
            
          break;
          
          case "CORNER":
            
            rectMode(CORNER)
            
          break;
            
      }
  background(200);
  console.log('It is a ' + currentRectMode + '!');
}


function saveImage() {
  save('aReallycoolfractal.png')
}

//rotateS.html("Rotation value: " + rotateSlider.value());
