var box1,box2,box3,box4;

function setup() {

  createCanvas(800,400);
box1=createSprite(200,200,50,50);
box1.shapeColor="green";
box2=createSprite(600,200,50,50);
box2.shapeColor="green";
box1.velocityX=2;
box2.velocityX=-2;
box3=createSprite(200,100,50,50);
box3.shapeColor="green";
box4=createSprite(600,100,50,50);
box4.shapeColor="green";
}

function draw() {
  background(255,255,255);  
 box4.x=World.mouseX;
 box4.y=World.mouseY;
bouncing(box1,box2);
 if(touching(box3,box4)){
   box3.shapeColor="red";
   box4.shapeColor="red";
 }
else{
  box3.shapeColor="green";
  box4.shapeColor="green";
}
  drawSprites();
}







