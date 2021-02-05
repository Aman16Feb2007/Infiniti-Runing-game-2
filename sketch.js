var gameState = "play"

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score1 = 0;

var Opsicle

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  backgroundImage = loadImage("jungle.jpg");
 
}



function setup() {
  createCanvas(displayWidth/1.5, 500);
  
  monkey = createSprite(100,400)
  monkey.addAnimation("m",monkey_running);
  monkey.scale = 0.2;
  
  if(score1%10 === 0 && score1>0){
    monkey.scale = monkey.scale+1 
  }

  Ground = createSprite(250,420,100000,20);
  Ground.visible = false
  


  bg = new Group();
  og = new Group();

 
}


function draw() {
  background(backgroundImage);

  
 if (gameState === "play") {
     monkey.velocityX = 1
     camera.position.x = monkey.x;
     Banana();
     Opsticle();
     destory1();
     Score();
     if (keyDown("space") && monkey.y >348) {
    monkey.velocityY = -20;
}
     if (monkey.isTouching(og)) {
       gameState = end;
     }
   
 }
  monkey.velocityY = monkey.velocityY+0.8
  monkey.collide(Ground);
    if (gameState === "end") {
    gameOver();
    og.destroyEach();
    bg.destroyEach();
    monkey.destroy();
  }
  drawSprites();
  Score();
 

  
  
  console.log(monkey.x);
  
  
}



function Opsticle() {
  if (camera.position.x % 200 === 0) {
  opsicle = createSprite(camera.position.x+500, 380);
  opsicle.addImage(obstaceImage);
  opsicle.scale = 0.21;
  opsicle.velocityX = -5;
  opsicle.setCollider("rectangle",0,0,485, 485);
  opsicle.debug = true;

  opsicle.lifetime = 100;  
  og.add(opsicle);
}
}
function Banana() {
  if (camera.position.x % 250 === 0) {
  banana = createSprite(camera.position.x+500, random(120,230));
  banana.addImage(bananaImage);
  banana.scale = 0.19;
  banana.velocityX = -5;
  banana.lifetime = 100;
  bg.add(banana);
}
}

function destory1() {
  if (monkey.isTouching(og)) {
    og.destroyEach();
    gameState = "end";
  }
  
  if (monkey.isTouching(bg)) {
    score1 = score1+2
    bg.destroyEach();
  }

  
}

function Score() {
  textSize(25);
  fill("white");
  text("Score : "+ score1, monkey.x, 30);
}



function gameOver() {  
  textSize(35);
  fill("red");
  text("GAMEOVER", displayWidth, 250);
  }