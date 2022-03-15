const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;
var fruitImg
var rabbit, rabbitImg
var button
var bgImage

function preload(){
  bgImage = loadImage("background.png")
  rabbitImg = loadImage("Rabbit-01.png")
  fruitImg = loadImage("melon.png")
}
function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);
  
  rabbit = createSprite(200,500) 
  rabbit.addImage(rabbitImg)
  rabbit.scale = 0.3

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  button = createImg("cut_button.png")
  button.size(50,50)
  button.position(230,30)
  button.mouseClicked(drop)
}

function draw() 
{
  background(bgImage);
  rope.show();
  imageMode (CENTER)
  image(fruitImg, fruit.position.x,fruit.position.y,50,50);
  Engine.update(engine);
  ground.show();
  drawSprites()
 
   
}
function drop(){
 rope.break()
 fruit_con.detach()
}