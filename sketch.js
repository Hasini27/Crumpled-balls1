
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 680, 800, 20);

	leftSide = new whiteBox(550, 620, 20, 100);
	World.add(world, leftSide);

	bottomSide = new whiteBox(610, 660, 100, 20);
	World.add(world, bottomSide);

	rightSide = new whiteBox(670, 620, 20, 100);
	World.add(world, rightSide);

	paper = new Paper(100, 600, 10);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  ground.display();
  leftSide.display();
  bottomSide.display();
  rightSide.display();
  paper.display();

  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body, paper.body.position, {x:15, y: -15})
	}
  }


