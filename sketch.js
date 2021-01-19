
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine , world ;
var chain ;
var ground , bob1 , bob2 , bob3 , bob4 ;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(500 , 100 , 800 , 30);
	bob1 = new Bob(400 , 500 , 20 );
	bob2 = new Bob(500, 500 , 20);
	bob3 = new Bob(600,500 , 20);
	bob4 = new Bob(700,500 ,20);


	
}


function draw() {
  rectMode(CENTER);
  background("white");

  Engine.update(engine);
  
  ground.display();
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();

}



