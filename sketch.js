var movCone,fixCone




function setup() {
  createCanvas(800,400);
 movCone =createSprite(600, 200, 50, 50);
 fixCone =createSprite(300,200,50,100);
}

function draw() {
  background(0);  
  movCone.x=mouseX;
  movCone.y=mouseY;
  if(movCone.x-fixCone.x <movCone.width/2+fixCone.width/2
   &&fixCone.x-movCone.x <movCone.width/2+fixCone.width/2 
   &&movCone.y-fixCone.y <movCone.height/2+fixCone.height/2
   &&fixCone.y-movCone.y <movCone.height/2+fixCone.height/2 ){
     movCone.shapeColor="cyan"
     fixCone.shapeColor="cyan"
   }else{
    movCone.shapeColor="yellow"
    fixCone.shapeColor="yellow"
   }



  drawSprites();
}
