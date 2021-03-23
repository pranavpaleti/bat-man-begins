const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var t1I,t2I,t3I,t4I;
var man,manImage;
var engine,world
var maxdrops=100;
var drops=[]
var umbrella;
var n;
function preload(){
    t1I=loadImage("1.png");
    t2I=loadImage("2.png");
    t3I=loadImage("3.png");
    t4I=loadImage("4.png");
    manImage=loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png",)
}

function setup(){
   createCanvas(400,600);
   engine = Engine.create();
   world = engine.world;
   Engine.run(engine);
   man=createSprite(200,430,20,100)
   man.addAnimation("man",manImage);
   man.scale=0.5
  
   for(var i=0;i<maxdrops;i++){
    drops.push(new Drop(random(0,400),random(0,400)))
}
umbrella=new Umbrella(200,325)
}

function draw(){
    background("black")
    for(var i=0;i<maxdrops;i++){
        drops[i].display();
        drops[i].updateDrops();
    }
    n=Math.round(random(1,4))
    if(frameCount%100===0){
        var thunder=createSprite(random(100,300),20)
    if(n===1){
        thunder.addImage(t1I)      
    }
    if(n===2){
        thunder.addImage(t2I)
    }
    if(n===3){
        thunder.addImage(t3I)
    }
    if(n===4){
        thunder.addImage(t4I)
    }
    thunder.lifetime=50
    thunder.scale=random(0.3,0.5)
    }
   // umbrella.display()
    drawSprites();
}   

