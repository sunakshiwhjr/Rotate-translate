
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var box1, box2;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
   var box_options = {

    restitution: 0.1
   }

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  box1 = Bodies.rectangle(200, 200, 50,50, box_options)
  World.add(world, box1);

  box2 = Bodies.rectangle(220, 10, 50,50, box_options)
  World.add(world, box2);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
 
  rect(box1.position.x, box1.position.y, 50, 50);

  //Matter.Body.rotate(rect, box2.angle);
  angleMode(RADIANS);

  push();
  
  translate(box2.position.x, box2.position.y);
  rotate(box2.angle);
 
  rect(0, 0, 50, 50);
  
  pop();
 

}

