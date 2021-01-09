var canvas;
var music;
var surface1, surface2, surface3, surface4;
var box;
function preload(){
    music = loadSound("music.mp3");
}
function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
   surface1 = createSprite(590, 590, 50, 20);
   surface2 = createSprite(600, 590, 50, 20);
   surface3 = createSprite(620, 590, 50, 20);
   surface4 = createSprite(650, 590, 50, 20); 
   surface1.shapeColor("blue");
   surface2.shapeColor("red");
   surface3.shapeColor("green");
   surface4.shapeColor("yellow");
    box .shapeColor("white");


    //create box sprite and give velocity
    box = createSprite(random(20, 750), 300, 40, 40);
    box.velocityX = -2;
    box.velocityY = -5;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
   createEdgeSprites();
 //add condition to check if box touching surface and make it box
if(surface1.isTouching(box)&& box.bounceOff(surface1)){
   //change color of box
    box.shapeColor ="blue";
    music.play();
 }
 if(surface2.isTouching(box)&& box.bounceOff(surface2)){
    //change color of box
     box.shapeColor = "red";
     music.play(); 
  }
  if(surface3.isTouching(box)&& box.bounceOff(surface3)){
    //change color of box
     box.shapeColor = "green";
     music.play();
  }
  if(surface4.isTouching(box)&& box.bounceOff(surface4)){
    //change color of box
     box.shapeColor = "yellow";
     music.play();
  }
  if(surface1.isTouching(box)){
  box.shapeColor = rgb(255, 128, 0);
  box.velocityX = 0;
  music.stop();
 }
 if(surface2.isTouching(box)){
   box.shapeColor = rgb(255, 128, 0);
   box.velocityX = 0;
   music.stop();
  }
  if(surface3.isTouching(box)){
   box.shapeColor = rgb(255, 128, 0);
   box.velocityX = 0;
   music.stop();
  }
  if(surface4.isTouching(box)){
   box.shapeColor = rgb(255, 128, 0);
   box.velocityX = 0;
   music.stop();
  }
drawSprites();
}
