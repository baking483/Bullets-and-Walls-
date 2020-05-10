var wall,thickness
var bullet,speed,weight


function setup() {
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  bullet = createSprite(60,100,10,5);
    bullet.velocityX = speed;
    bullet.shapeColor = "white";
  wall = createSprite(350,200,thickness,height/2);
    wall.shapeColor = color(80,80,80);
}
function draw() {
  background(255,255,255); 
  
  if(Touching(wall,bullet)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage > 10){
      wall.shapeColor = color(255,0,0);
    } 
    else if(damage < 10){
       wall.shapeColor = color(0,255,0);
    }
  
  
  }
  drawSprites();
}


//o1 bullet , o2 wall
function Touching(o1,o2){
  if (o1.x - o2.x < o2.width/2 + o1.width/2
    && o2.x - o1.x < o2.width/2 + o1.width/2 && o1.y - o2.y < o2.height/2 + o1.height/2
    && o2.y - o1.y < o2.height/2 + o1.height/2) {
    return true; 
    } 
    else {
     return false;
    }
} 

//o2 bullet, o4 wall
function hasCollided(o3,o4){
  bulletRightEdge = o3.x + o3.width;
  wallLeftEdge = o4.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}