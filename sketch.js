
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var rectangle1,rectangle2,rectangle3,rectangle4;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,20);
	groundSprite.shapeColor="lightgreen"

	rectangle1=createSprite(390,660,175,10)
	rectangle1.shapeColor="white"
	rectangle2=createSprite(470,610,15,90)
	rectangle2.shapeColor="green"
	rectangle3=createSprite(310,610,15,90)
	rectangle3.shapeColor="orange"
	rectangle4=createSprite(390,660,50,10)
	rectangle4.shapeColor="blue"


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);
    packageSprite.x= packageBody.position.x 
    packageSprite.y= packageBody.position.y 
    drawSprites();
 
	/*rectangular box
	rectangle1=new rectangle(200,300,50,50);
	rectangle2=new rectangle(240,100,50,70);
	rectangle3=new rectangle(200,100,50,70);

  if(keyDown(DOWN_ARROW)){
  packageBody.bounceOff(groundSprite)
  }*/
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	
	Matter.Body.setStatic(packageBody,false)

	/* packageSprite.x=packageBody.position.x
	packageSprite.y=packageBody.position.y */
  }

}