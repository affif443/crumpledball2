
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world, paper1, ground, dustbin,dustbin1, dustbin2, dustbin3; 
var binimage;

function preload() {
  binimage=loadImage("images/dustbingreen.png")
}

function setup() {
    createCanvas(1500, 700);
    rectMode(CENTER);

   

    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    paper1 = new Paper(600,600,40,40);
    ground = new Ground(800,680,1600,20);
    dustbin = createSprite(1200,660, 100,100);
    dustbin.addImage(binimage);
    dustbin.scale=0.5;
    dustbin1 = new Dustbin(1200,660, 100,20);
    dustbin2 = new Dustbin(1140,620,20,100);
    dustbin3 = new Dustbin(1250,620,20,100)
    
   
    

    Engine.run(engine);
  
}

function draw() {
  
  rectMode(CENTER);
  
  background("white");
  
 
    
  paper1.display();

  ground.display();
  dustbin2.display();
  dustbin3.display();
  dustbin1.display();


  

  
}

function keyPressed(){
    if (keyCode === UP_ARROW ) {
      Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 85,y: -85})
    }
  }
