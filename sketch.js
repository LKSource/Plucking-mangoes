
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

var boy,boyImg
var tree,treeImg

function preload()
{
 boyImg=loadImage("pluckingmangoes/boy.png")
 treeImg=loadImage("pluckingmangoes/tree.png")

}

function setup() {
	createCanvas(800, 700);
 
  
  
	engine = Engine.create();
	world = engine.world;
 
//Create the Bodies Here.
  ground = new Ground(width/2,670,800,20)
  mango = new Mango(460,490,30)
  mango1 = new Mango(500,490,30)
  mango2 = new Mango(540,450,30)
  mango3 = new Mango(580,430,30)
  mango4 = new Mango(620,470,30)
  mango5 = new Mango(660,430,30)
  stone = new Rock(170,350,30)
  ropeshot = new Ropeshot(stone.body,{x:170,y:600})
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  

  image(boyImg,150,570,125,125)
  image(treeImg,400,330,350,350)
  ground.display();
  mango.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  ropeshot.display();
  
  drawSprites();
 
}
function detectCollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
 var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
   if(distance<=lmango.r+lstone.r){
     Matter.Body.setStatic(lmango.body,false);
 
  }
 }

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
  }
  function mouseReleased(){
  ropeshot.fly();
  }
function keyPressed(){
 if(keyDown("space")){
   ropeshot.attach(stone.body)
 }



}