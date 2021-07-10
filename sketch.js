
function preload() {

    bgImage=loadImage("images/garden.png")
    catImage1=loadImage("images/cat1.png")
    catImage2=loadAnimation("images/cat2.png","images/cat3.png")
    catImage3=loadAnimation("images/cat4.png")
    mouseImage1=loadImage("images/mouse1.png")
    mouseImage2=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseImage3=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    cat=createSprite(900,700);
    cat.addImage(catImage1)
    cat.scale=0.2
    
    jerry=createSprite(100,700);
    jerry.addImage(mouseImage1)
    jerry.scale=0.15
    catWalk();
}

function draw() {

    background(bgImage);
    if(cat.x-jerry.x-100<cat.width/2-jerry.width/2){
        cat.velocityX=0;
      cat.addAnimation("catLost",catImage3);
        cat.changeAnimation("catLost");
        jerry.addAnimation("jerryWon",mouseImage3);
        jerry.changeAnimation("jerryWon");
    }


    drawSprites();
}

function catWalk(){
cat.velocityX=-5;

cat.addAnimation("catwalking",catImage2);
cat.changeAnimation("catwalking");
jerry.addAnimation("teasing",mouseImage2);
jerry.changeAnimation("teasing");
}


function keyPressed(){

  //For moving and changing animation write code here


}
