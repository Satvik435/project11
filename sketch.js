var pathImage 
var path 
var boyA
var boy 
function preload(){
  //pre-load images
  pathImage=loadImage("path.png")
  boyA = loadAnimation("Runner-1.png" , "Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here 
   path = createSprite(200,200)
  path.addImage(pathImage)
  path.velocityY = 4
  path.scale=1.2  
  boy = createSprite(200,200)
boy.addAnimation("boy",boyA)
invisblel = createSprite(40,200,40,300)
invisblel.visible = false
invisbler = createSprite(370,200,40,300)
invisbler.visible = false
} 

function draw() {
  background(0);
if(path.y >   400){
  path.y= height/4   
}
boy.x = mouseX
boy.collide(invisblel)
boy.collide(invisbler)
drawSprites() 
}
