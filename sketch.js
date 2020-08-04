const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball,box;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
//JSON(JavaScript Object Notation) Format
    var ground_options ={
        isStatic: true
    }
    var ball_options = {
        restitution: 0.9,
        friction: 0.8
    }
    var box_options = {
        restitution: 0.6,
        density: 0.3,
        friction: 0.6
    }
    ball = Bodies.circle(200,200,15,ball_options);
 ground = Bodies.rectangle(200,380,200,30,ground_options);
 box = Bodies.rectangle(200,300,40,40,box_options);
    World.add(world,ground);
World.add(world,ball);
World.add(world,box);
    console.log(box);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    fill("blue");
    rect(ground.position.x,ground.position.y,400,30);
    fill("magenta");
    rect(box.position.x,box.position.y,40,40);
    ellipseMode(RADIUS);
    fill("gold");
    ellipse(ball.position.x,ball.position.y,15,15);
}