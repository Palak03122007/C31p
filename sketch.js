const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var platform;
var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup(){
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  for(var k = 0; k<=100; k = k + 80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }

  platform = new Ground(240, 790, 480, 20);
}

function draw(){
  background(0,0,0);
  Engine.update(engine);

  platform.display();
  }