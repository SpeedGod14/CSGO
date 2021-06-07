var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  createSprite(700,200,50,3);

  speed = random(20,40);
  weight = random(345,1425);

  car = createSprite(50,200,50,50);
  car.velocityX = speed;
  car.shapeColor = "blue"

  wall = createSprite(1600,200,50,400);
}

function draw() {
  background("pink");

  Deformation = 0.5*weight*speed*speed/22500
  
  if(car.isTouching(wall)){
    if(Deformation < 100){
      car.shapeColor = "green"
    } else if(Deformation > 100 && Deformation < 180){
      car.shapeColor = "yellow"
    } else if(Deformation > 180){
      car.shapeColor = "red"
    }
  }

  drawSprites();
}