
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
   Matter.Bodies.circle(20,40,50)

	Engine.run(engine);

	box1 = new Box(200,200,100,10);
	ground = new Ground(400,380,100,100);
}


function draw() {
  rectMode(CENTER);
  background(0);

  box1.display();
  ground.display();

  drawSprites();
 
}
function keyPressed() {
	if(keyCode === UP_ARROW) {

Matter.Body.applyForce(paperObject.body.paperObject.body.position,{x:85,y:85} )

	}
}



