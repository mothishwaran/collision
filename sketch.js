var moving_rectangle,fixed_rectangle;


function setup() {
  createCanvas(800,400);
 moving_rectangle= createSprite(400, 200, 50, 50);
 fixed_rectangle= createSprite(400, 200, 50, 50);
 moving_rectangle.shapeColor="green";
 fixed_rectangle.shapeColor="green";
}

function draw() {
  background(255,255,255);  

moving_rectangle.x=mouseX;
moving_rectangle.y=mouseY;

if(fixed_rectangle.x-moving_rectangle.x < fixed_rectangle.width/2+moving_rectangle.width/2
  &&  moving_rectangle.x-fixed_rectangle.x<fixed_rectangle.width/2+moving_rectangle.width/2
  && moving_rectangle.y-fixed_rectangle.y<fixed_rectangle.height/2+moving_rectangle.height/2
  && fixed_rectangle.y-moving_rectangle.y<fixed_rectangle.height/2+moving_rectangle.height/2){

  
  fixed_rectangle.shapeColor="red";
  moving_rectangle.shapeColor="red";
  
}
else {
  fixed_rectangle.shapeColor="green";
  moving_rectangle.shapeColor="green";

}




  drawSprites();
}