var bg, bgImg
var bottomGround
var topGround
var witch, witchImg

function preload(){
bgImg = loadImage("assets/bg.png")

witchImg = loadImage("assets/witch.png")
}



function setup(){
  createCanvas(windowWidth, windowHeight);

//background image
bg = createSprite(200,485,1,1);
bg.addImage(bgImg);
bg.scale =1.3



//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.velocityX=-4
topGround.addImage(bgImg)
topGround.scale=1.5


      
//creating witch    
witch = createSprite(100,200,20,50);
witch.addImage(witchImg);
witch.scale = 0.2;





}

function draw() {
  
  background(bgImg);

  if (topGround.x<0){
    topGround.x=700
  }




        
          //making harry jump
          /*if(keyDown("space")) {
            harry.velocityY = -6 ;
            

          }*/
          //moving harry
          if(keyDown(UP_ARROW)){
            witch.y=witch.y-4}

            else if(keyDown(DOWN_ARROW)){
              witch.y=witch.y+4}

          

 //spawnObstacles()             
        drawSprites();

    
        
}
//refer to spawnClouds from trex game
function spwanObstacles(){

}

//create scoaring system

//add sound













