const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;







function setup(){
  createCanvas(400,400);
  engine = Engine.create()
  world = engine.world
  var box_options = {
    isStatic:true
  }
  box = Bodies.rectangle(20,20,10,10,box_options);
  World.add(world, box);
  var sphere_options = {
    isStatic:true
  }
  sphere = Bodies.circle(20,20,10,sphere_options);
  World.add(world, sphere);

}



function draw(){
  background("red");
  Engine.update(engine);
  rectMode(CENTER);
  rect(box.position.x,box.position.y,10,10);
  ellipseMode(CENTER);
  ellipse(sphere.position.x,sphere.position.y,10);

}

