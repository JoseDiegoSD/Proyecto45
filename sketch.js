var wall1, wall2, wall3, wall4, wall5, wall6, wall7;
var ghost, ghost1, ghost2, ghost3, ghost4, ghost5;
var Angel, demonio1, demonio2, demonio3, demonio4, demonio5;
var portal, portalImg;
var meta;
var count;
var gameState;
var musica;

function preload(){
Angel=loadAnimation("angel1.png","angel2.png","angel3.png","angel4.png");
demonio1=loadImage("demonio1.gif");
demonio2=loadImage("demonio2.gif");
demonio3=loadImage("demonio3.gif");
demonio4=loadImage("demonio4.gif");
demonio5=loadImage("demonio5.gif");
portalImg=loadImage("portal.gif");
musica=loadSound("fantasy.mp3");
}


function setup(){
    wall1 = createSprite(200,20,360,3);
    wall1.shapeColor = "black";
    wall2 = createSprite(200,380,360,3);
    wall2.shapeColor = "black";
    wall3 = createSprite(20,200,3,360);
    wall3.shapeColor = "black";
    wall4 = createSprite(380,200,3,360);
    wall4.shapeColor = "black";
    wall5 = createSprite(150,100,250,3);
    wall5.shapeColor = "black";
    wall6 = createSprite(250,200,250,3);
    wall6.shapeColor = "black";
    wall7 = createSprite(150,300,250,3);
    wall7.shapeColor = "black";
      
    meta = createSprite(60, 340, 10, 10);
    meta.setAnimation("cielo");
    meta.scale = 0.7;
      
      
    ghost = createSprite(40,40,13,13);
    ghost.addAnimation("ghost");
    ghost.scale = 0.5;
    
    ghost1 = createSprite(70,200,10,10);
    ghost1.addAnimation("ghost1");
    ghost1.scale = 0.5;
      
    ghost2 = createSprite(215,200,10,10);
    ghost2.addAnimation("ghost2");
    ghost2.scale = 0.5;
      
    ghost3 = createSprite(165,200,10,10);
    ghost3.addAnimation("ghost3");
    ghost3.scale = 0.5;
      
    ghost4 = createSprite(270,200,10,10);
    ghost4.addAnimation("ghost4");
    ghost4.scale = 0.5;
      
    ghost5 = createSprite(200, 200, 10, 10);
    ghost5.setAnimation("ghost5");
    ghost5.scale = 0.6;
    ghost1.velocityY = 9;
    ghost2.velocityY = 8;
    ghost3.velocityY = -8;
    ghost4.velocityY = -9;
    ghost5.velocityX = 3;
    ghost5.velocityY = 6;
      
    count = 0;
    gameState = "serve";
      
    musica.play()

}


function draw(){


}
