var fixedRect, movingRect;

var a,b,c,d

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
 
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  

  a=createSprite(280,370,30,30)
  a.shapeColor="red"

  b=createSprite(100,500,50,50)
  b.shapeColor="purple"

  c=createSprite(709,340,20,50)
c.shapeColor="cyan"

  d=createSprite(650,476,39,30)
  d.shapeColor="orange"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(movingRect,fixedRect)){

  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue";

  

 }else{

 movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
 }
  
 if(isTouching(movingRect,d)){

  d.shapeColor="red"
  movingRect.shapeColor="red"
 }else{

  d.shapeColor="orange"
  movingRect.shapeColor="green"

 }

 if(isTouching(movingRect,a)){

  a.shapeColor="blue"
  movingRect.shapeColor="red"
 }else{

  a.shapeColor="red"
  movingRect.shapeColor="green"

 }

  drawSprites();
}

