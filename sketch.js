
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1800, 1800);

	engine = Engine.create();
	world = engine.world;

  //Create a Ground
  ground = new Ground(400,500,width/2,20);
	// ground = new Ground(width/2, 650, width, 10);

  //Create the Bodies Here.
  
  

	b1 = new Box(550,415,110,150);
   b2 = new Box(500,400,10,80);
	 b3 = new Box(900,400,10,80);
	// b3 = new Box(600,500,200,200);

	paper = new Paper(50,300,50,50);

	Engine.run(engine);


}


function draw() {
  rectMode(CENTER);
  background("yellow");

  ground.display();
  paper.display();
  b1.display();
  b2.display();
  b3.display();
}

function keyPressed() {
if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-65});
   }
}