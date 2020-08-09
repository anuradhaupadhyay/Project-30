const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine,world;

var stand1,stand2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var shooter,constraint;
var gameState=1;

function setup() {
  createCanvas(1350,628);

  engine=Engine.create();
  world=engine.world;
  
  //Stands
  stand1=new Box(600,400,300,20,true);
  stand2=new Box(980,200,300,20,true);

  //Shooter
  shooter=new Shooter(100,200,50);
  constraint=new SlingShot(shooter.body,{x:190,y:272})

  //Blocks

  //Row 1
  block1=new Box(600,365.05000027777805,30,50 ,false);
  block2=new Box(630,365.05000027777805,30,50,false);
  block3=new Box(660,365.05000027777805,30,50,false);
  block4=new Box(570,365.05000027777805,30,50,false);
  block5=new Box(540,365.05000027777805,30,50,false);
  block6=new Box(510,365.05000027777805,30,50,false);
  block7=new Box(690,365.05000027777805,30,50,false)

  //Row 2
  block8=new Box(600,315,30,50,false);
  block9=new Box(630,315,30,50,false);
  block10=new Box(660,315,30,50,false);
  block11=new Box(570,315,30,50,false);
  block12=new Box(540,315,30,50,false);

  //Row 3
  block13=new Box(600,265,30,50,false);
  block14=new Box(630,265,30,50,false);
  block15=new Box(570,265,30,50,false);

  //Row 4
  block16=new Box(600,216,30,50,false);



 
   //Row 1
   block17=new Box(980,164,30,50,false);
   block18=new Box(950,164,30,50,false);
   block19=new Box(920,164,30,50,false);
   block20=new Box(1010,164,30,50,false);
   block21=new Box(1030,164,30,50,false);
 
   //Row 2
   block22=new Box(980,189,30,50,false);
   block23=new Box(950,189,30,50,false);
   block24=new Box(1010,189,30,50,false);

   var render = Render.create({ element: document.body, engine: engine, options: { width: 1360, height: 628, wireframes: false } });
    Render.run(render);
 
}

function draw() {
  background("brown");
  
  Engine.update(engine);
  drawSprites();
  
  //console.log(mouseX);
  console.log(mouseX);
  console.log(mouseY);

  //Displaying stands
  stand1.display();
  stand2.display();

  //Displaying boxes
  block1.display();
  block2.display();
  block3.display()
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  
  constraint.display();

  shooter.display();
  
}

function mouseDragged(){
  if(gameState===1){
  Body.setPosition(shooter.body,{x:mouseX,y:mouseY});
  }
}

function mouseReleased(){
 constraint.fly();
 gameState=0;
}