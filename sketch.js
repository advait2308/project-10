var sea
var ship

function preload(){
shipImg1 = loadAnimation(ship1.png);
seaImg = loadAnimation(sea.png);
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200);
  sea.addImage(seaImg);
  sea.velocityX = -4;
  
  ship = createSprite(200,200,10,10);
  ship.addImage(shipImg1);
  ship.scale = 0.3;
}

function draw() {
  background("white");
 
  if(sea.x <0) {
    sea.x = sea.width/2;
  }

  drawSprites();
}