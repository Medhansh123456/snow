var bg;

function preload(){
  bga=loadImage("snow1.jpg")
}

function setup() {
  createCanvas(800,768);
 bg= createSprite(400, 380, 10, 50);
bg.addImage(bga)
bg.scale=2

}

function draw() {
  background(0);  




  drawSprites();
}