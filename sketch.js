var car1,car2,car3;
var wall1,wall2,wall3;

var speed1,speed2,speed3;
var weight1,weight2,weight3;

function setup() {
  createCanvas(1600,400);
  
  wall1 = createSprite(1500,70,60,100);
  wall1.shapeColor = rgb(80,80,80);
  wall2 = createSprite(1500,200,60,100);
  wall2.shapeColor = rgb(80,80,80);
  wall3 = createSprite(1500,330,60,100);
  wall3.shapeColor = rgb(80,80,80);
  
  speed1 = random(55,90);
  weight1 = random(400,1500);
  car1 = createSprite(20, 70, 20, 20);
  car1.velocityX = speed1;
  car1.lifetime = 50;

  speed2= random(55,90);
  weight2 = random(400,1500);
  car2 = createSprite(20, 200, 20, 20);
  car2.velocityX = speed2;
  car2.lifetime = 50;

  speed3 = random(55,90);
  weight3 = random(400,1500);
  car3 = createSprite(20, 330, 20, 20);
  car3.velocityX = speed3;
  car3.lifetime = 50;
}

function draw() {
  background(0);

  if(frameCount % 100 === 0){  
    
    wall1 = createSprite(1500,70,60,100);
    wall1.shapeColor = rgb(80,80,80);
    wall2 = createSprite(1500,200,60,100);
    wall2.shapeColor = rgb(80,80,80);
    wall3 = createSprite(1500,330,60,100);
    wall3.shapeColor = rgb(80,80,80);
    
    speed1 = random(55,90);
    weight1 = random(400,1500);
    car1 = createSprite(20, 70, 20, 20);
    car1.velocityX = speed1;
    car1.lifetime = 50;

    speed2= random(55,90);
    weight2 = random(400,1500);
    car2 = createSprite(20, 200, 20, 20);
    car2.velocityX = speed2;
    car2.lifetime = 50;

    speed3 = random(55,90);
    weight3 = random(400,1500);
    car3 = createSprite(20, 330, 20, 20);
    car3.velocityX = speed3;
    car3.lifetime = 50;
  }

  if(isTouching(car1,wall1) === true){
    car1.velocityX = 0; 
    deformation(weight1,speed1,car1);
  }
  if(isTouching(car2,wall2) === true){
    car2.velocityX = 0;
    deformation(weight2,speed2,car2); 
  }
  if(isTouching(car3,wall3) === true){
    car3.velocityX = 0; 
    deformation(weight3,speed3,car3);
  }

  drawSprites();
}

function deformation(a,b,c){
  var deform;

  deform = 0.5 * a * b * b/22500;

  if(deform > 180){
    c.shapeColor = rgb(255,0,0);
  }else if(deform < 180 && deform > 80){
    c.shapeColor = rgb(230,230,0);
  }else if(deform < 80){
    c.shapeColor = rgb(0,255,0);
  }
}

function isTouching(a,b){
  if(a.x - b.x < b.width/2 + a.width/2 && b.x - a.x < b.width/2 + a.width/2){
    return true;
  } else{
    return false;
  }
}