var cat1
var tom2
var tom3
var tom4
var jerry1
var jerry2
var jerry3
var jerry4
var bg
function preload() {
    // //load the images here
    bg = loadImage("images/garden.png"); 
}
function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden=createSprite(500,400)
   garden.addImage("bg")
tom=createSprite(600,500,50,50)

jerry=createSprite(200,500,50,50)


}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
