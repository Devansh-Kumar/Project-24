const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper1;
var ground1;
var dustbin1,dustbin2,dustbin3;

function setup() {
createCanvas(1200,400);
engine = Engine.create();
world = engine.world;

paper1 = new Paper(210, 350, 10);
ground1 = new Ground(600, 390, 1200, 20);
dustbin1 = new Dustbin(737, 330, 15, 100);
dustbin2 = new Dustbin(820, 373, 150, 15);
dustbin3 = new Dustbin(903, 330, 15, 100);

Engine.run(engine);
}

function draw() {
background("black");
  
Engine.update(engine);
paper1.display();
ground1.display();
dustbin1.display();
dustbin2.display();
dustbin3.display();
drawSprites();
}

function keyPressed(){
if(keyCode === RIGHT_ARROW){
Matter.Body.applyForce(paper1.body,paper1.body.position,{x:15, y: -15})
}
}