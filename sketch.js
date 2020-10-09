var player,pacmanImg,angrybirdImg;
var fire,lava,lavaImg,fireImg,lavaBg;
var  acorn,hummingbird,hill,apples,stone,acornImg,hummingbirdImg,hillImg,applesImg,stoneImg,forestBg;
var alien,rocket,ufo,alienImg,rocketsImg,ufoImg,spaceBg;

var endBg,enteringBg;
var scene;

//level  1 walls
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15;

//level 3 walls
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15;
// Gamestate
var ENTERING = 0;
var LEVEL_ONE = 1;
var LEVEL_TWO =2;
var LEVEL_THREE=3;

var gamestate = ENTERING;

function preload(){
    pacmanImg = loadImage("epmissionImage/pacman.png");
    angrybirdImg = loadImage("epmissionImage/bird.png");

    acornImg = loadImage("epmissionImage/Acorn.png");
    alienImg = loadImage("epmissionImage/alien.png");
    lavaImg = loadImage("epmissionImage/lava.png");
    rocketsImg = loadImage("epmissionImage/rockets.png");
    ufoImg = loadImage("epmissionImage/UFO.png");
    hummingbirdImg = loadImage("epmissionImage/hummingbird.png");
    hillImg = loadImage("epmissionImage/hill.png");
    applesImg = loadImage("epmissionImage/Apple.png");
    stoneImg = loadImage("epmissionImage/stone.png")
    fireImg = loadImage("epmissionImage/fire.png");
    
    forestBg = loadImage("epmissionImage/forestBackground.jpg");
    lavaBg = loadImage("epmissionImage/lavaBackground.jpg");
    spaceBg = loadImage("epmissionImage/Space.jpeg");
    endBG = loadImage("epmissionImage/endImage.jpeg");
    enteringBg = loadImage("epmissionImage/enteringBackground.jpg");
}

function setup(){
  createCanvas(800,600);
  
  scene = createSprite(0,0,400,400);
  
  // characters
  player = createSprite(20,20);
  player.addImage(angrybirdImg);
  player.addImage(pacmanImg);
  player.visible = false;
  player.scale = 0.1;
  // object that transports things
  rocket =  createSprite(750,550);

}


function draw(){
  background("white");
  
  if(gamestate === LEVEL_ONE){

  }else if (gamestate === LEVEL_TWO){

  }else if (gamestate === LEVEL_THREE){
    
  }
  drawSprites();

  if (gamestate === ENTERING){
    
    textSize(30);
    fill(133, 0, 0);
    text("WELCOME TO EPMISSION !!", width/2 -250,100);
    textSize(20);
    fill(38, 153, 130);
    text ("ALL RULE: Get to the rocket, Use the arrow keys to move press SPACE to jump",50,200);
    fill(196, 181, 63);
    text("INSTRUCTIONS: LEVEL ONE: Avoid fireballs and volcanos",50,300);
    fill(14, 6, 92);
    text("INSTRUCTIONS: LEVEL TWO: Avoid hill,humming birds, acorns,stones, ",50,400);
    text("if you get a apple you get +1 life",50,430);
    fill(186, 126, 13);
    text("INSTRUCTIONS: LEVEL THREE: Avoid ufo and aliens",50,500);
    fill(255, 28, 73);
    text("INSTRUCTIONS: PARTY: YOU HAVE MADE IT ALIVE !!",50,550);

  }
}

function levelOneCreate(){
  
  //scene
  scene.addImage(lavaBg);
  
  // obstacles sprites
  lava =  createSprite(60,60);
  fire =  createSprite(60,60);
  
  // obstacle images
  lava.addImage(lavaImg);
  fire.addImage(fireImg);
  
  // obstacle scale
  lava.scale = 0.1;
  fire.scale = 0.1;
  
  // wall sprites
  wall1 = createSprite(65,10,10,120);
  wall2 = createSprite(155,10,10,120);
  wall3 = createSprite(30,135,200,10);
  wall4 = createSprite(135,170,10,80);
  wall5 = createSprite(170,205,80,10);
  wall6 = createSprite(350,260,10,400);
  wall7 = createSprite(575,250,460,10);
  wall8 = createSprite(570,200,10,300);
  wall9 = createSprite(230,350,250,10);
  wall10 = createSprite(100,435,10,180);
 
  //wall colors
  wall1.shapeColor = rgb(221, 0, 253);
  wall2.shapeColor = rgb(0, 213, 255);
  wall3.shapeColor = rgb(0, 255, 247);
  wall4.shapeColor = rgb(0, 255, 30);
  wall5.shapeColor = rgb(255, 0, 0);
  wall6.shapeColor = rgb(43, 0, 255);
  wall7.shapeColor = rgb(85, 200, 255); 
  wall8.shapeColor = rgb(221, 0, 253);
  wall9.shapeColor = rgb(0, 213, 255);
  wall10.shapeColor = rgb(0, 255, 247);

}

function levelTwoCreate(){
  
  //scene
  scene.addImage(forestBg);
  
  // obstacles sprites
  acorn = createSprite(110,110);
  hummingbird = createSprite(200,230);
  apples = createSprite(200,250);
  hill = createSprite(200,270);
  stone = createSprite(200,290);
  
  // obstacle images
  acorn.addImage(acornImg);
  hummingbird.addImage(hummingbirdImg);
  hill.addImage(hillImg);
  apples.addImage(applesImg);
  stone.addImage(stoneImg);
  
  // obstacle scale
  acorn.scale = 0.1;
  hummingbird.scale = 0.1;
  hill.scale = 0.1;
  apples.scale = 0.1;
  stone.scale = 0.1;
  scene.scale = 2.5;
}

function levelThreeCreate(){
  
  //scene
  scene.addImage(spaceBg);
  
  //obstacles
  alien =  createSprite(90,90);
  ufo = createSprite(200,200);
  
  //obstacle images
  alien.addImage(alienImg);
  rocket.addImage(rocketsImg);
  ufo.addImage(ufoImg);
  
  
  //obstacle scale
  alien.scale = 0.1;
  rocket.scale = 0.1;
  ufo.scale = 0.05;
}

function keyPressed(){
  if(keyCode === 65 && gameState === ENTERING){
    player.changeImage(angrybirdImg);
  }
  if(keyCode === 80 && gameState === ENTERING){
    player.changeImage(pacmanImg);
  }
}