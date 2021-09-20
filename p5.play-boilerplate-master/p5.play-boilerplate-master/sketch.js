const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;


let engine
let world





var ball
var blower
var blowermouth

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

  ball = new Ball(400,100,20,20)
  blower = new Blower(550,200,100,100)
  blowermouth = new Blowermouth(500,200,150,30)

  button = createButton("Click to Blow");
  button.position(width/2,height-100);
  button.class("blowButton");
  button.mousePressed(blow);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  ball.show();
  blower.show();
  blowermouth.show();


  
}
function blow(){
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:-0.05 , y:0})
}