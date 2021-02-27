var Play = 1,End = 0,gameState = Play;
var path,boy,cash,diamonds,jwellery,sword,over,ruby;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0,girlImage;
var cashG,diamondsG,jwelleryG,swordGroup,jwelleryI;
var overImage,rubyImg;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("runner1.png","runner2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
  girlImage = loadImage("runner1.png");
  overImage = loadImage("gameOver.png");
   rubyImg = loadImage("ruby.png");
}

function setup(){
  
  createCanvas(400,400);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
boy = createSprite(70,330,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
   
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();
rubyGroup=new Group();
   over = createSprite(200,200);
  over.addAnimation("over",overImage);
}

function draw() {

  boy.setCollider("aabb");
  
  if(gameState === Play){

   over.visible = false; 
    background(0);
    

  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
    createCash();
    createDiamonds();
    createJwellery();
    createSword();
    createruby();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection = treasureCollection+1;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection = treasureCollection+1;
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection = treasureCollection+1;
      
    }else if(swordGroup.isTouching(boy)) {
        gameState = End;
    }else if(rubyGroup.isTouching(boy)) {
      rubyGroup.destroyEach();
      treasureCollection = treasureCollection+1;
    }

     }
   else if(gameState === End){
    
      
     path.velocityY = 0;
     swordGroup.setVelocityYEach(0);
     swordGroup.setLifetimeEach(-1);
     jwelleryG.setVelocityYEach (0);
     jwelleryG.setLifetimeEach(-1);
     diamondsG.setVelocityYEach (0);
     diamondsG.setLifetimeEach(-1);
      cashG.setVelocityYEach (0);
     cashG.setLifetimeEach(-1);
     cashG.setVelocityYEach (0);
     cashG.setLifetimeEach(-1);
     rubyGroup.setVelocityYEach (0);
     rubyGroup.setLifetimeEach(-1);
     boy.addAnimation("SahilRunning",girlImage);
      over.visible = true;
           }

  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,150,30);

}

function createCash() {
  if (World.frameCount % 50 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 80 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 80 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 3;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 150 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150; 
  swordGroup.add(sword);
  }
}

function createruby(){
  if (World.frameCount % 150 == 0) {
  var ruby = createSprite(Math.round(random(50, 350),40, 10, 10));
  ruby.addImage(rubyImg);
  ruby.scale=0.1;
  ruby.velocityY = 3;
  ruby.lifetime = 150; 
  rubyGroup.add(ruby);
  }
}