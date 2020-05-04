const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var box1,box2,box3;

function setup() {
  createCanvas(800,600);
engine = Engine.create();
world = engine.world;
  ground = new Ground(400,580,800,20);
  box1 = new Box(400,520,100,150);
  box2 = new Box(480,520,80,200);
  box3 = new Box(320,520,80,200);
  box4 = new Box(555,520,80,300);
  box5 = new Box(220,450,80,300);
  box6 = new Box(590,500,10,350);
  box7 = new Box(200,500,10,350);


}

function draw() {
  background(0,0,0);  
  Engine.update(engine);
  fill("blue"); 
triangle(400,300,345,420,445,420);

  triangle(220,80,190,270,260,270);

triangle(560,80,530,270,600,270);

ground.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
drawSprites();
}const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var box1,box2,box3;

function setup() {
  createCanvas(800,600);
engine = Engine.create();
world = engine.world;
  ground = new Ground(400,580,800,20);
  box1 = new Box(400,520,100,150);
  box2 = new Box(480,520,80,200);
  box3 = new Box(320,520,80,200);
  box4 = new Box(555,520,80,300);
  box5 = new Box(220,450,80,300);
  box6 = new Box(590,500,10,350);
  box7 = new Box(200,500,10,350);


}

function draw() {
  background(0,0,0);  
  Engine.update(engine);
  fill("blue"); 
triangle(400,300,345,420,445,420);

  triangle(220,80,190,270,260,270);

triangle(560,80,530,270,600,270);

ground.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
drawSprites();
}const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var box1,box2,box3;

function setup() {
  createCanvas(800,600);
engine = Engine.create();
world = engine.world;
  ground = new Ground(400,580,800,20);
  box1 = new Box(400,520,100,150);
  box2 = new Box(480,520,80,200);
  box3 = new Box(320,520,80,200);
  box4 = new Box(555,520,80,300);
  box5 = new Box(220,450,80,300);
  box6 = new Box(590,500,10,350);
  box7 = new Box(200,500,10,350);


}

function draw() {
  background(0,0,0);  
  Engine.update(engine);
  fill("blue"); 
triangle(400,300,345,420,445,420);

  triangle(220,80,190,270,260,270);

triangle(560,80,530,270,600,270);

ground.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
drawSprites();
}const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var box1,box2,box3;

function setup() {
  createCanvas(800,600);
engine = Engine.create();
world = engine.world;
  ground = new Ground(400,580,800,20);
  box1 = new Box(400,520,100,150);
  box2 = new Box(480,520,80,200);
  box3 = new Box(320,520,80,200);
  box4 = new Box(555,520,80,300);
  box5 = new Box(220,450,80,300);
  box6 = new Box(590,500,10,350);
  box7 = new Box(200,500,10,350);


}

function draw() {
  background(0,0,0);  
  Engine.update(engine);
  fill("blue"); 
triangle(400,300,345,420,445,420);

  triangle(220,80,190,270,260,270);

triangle(560,80,530,270,600,270);

ground.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
drawSprites();
}const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var box1,box2,box3;

function setup() {
  createCanvas(800,600);
engine = Engine.create();
world = engine.world;
  ground = new Ground(400,580,800,20);
  box1 = new Box(400,520,100,150);
  box2 = new Box(480,520,80,200);
  box3 = new Box(320,520,80,200);
  box4 = new Box(555,520,80,300);
  box5 = new Box(220,450,80,300);
  box6 = new Box(590,500,10,350);
  box7 = new Box(200,500,10,350);


}

function draw() {
  background(0,0,0);  
  Engine.update(engine);
  fill("blue"); 
triangle(400,300,345,420,445,420);

  triangle(220,80,190,270,260,270);

triangle(560,80,530,270,600,270);

ground.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
drawSprites();
}