var floor
var blockGroup
function preload() {

  floor=loadImage("floor.jpg")
  circle=loadImage('circle.png')
  
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  buildMaze(200,0)
  buildMaze(200,600)
  borderSide(0,0)
  borderSide(1250,0)
  player=createSprite(100,550,50,50)
  player.addImage(circle)
  player.scale=0.1
  block1=createSprite(165,550,30,100)
  block1.shapeColor='black'
  block2=createSprite(200,500,100,30)
  block2.shapeColor='black'
  block3=createSprite(350,500,75,30)
  block3.shapeColor='black'
  block4=createSprite(400,365,30,300)
  block4.shapeColor='black'
  block5=createSprite(270,400,75,30)
  block5.shapeColor='black'
  block6 =createSprite(300,315,30,200)
  block6.shapeColor='black'
  block7=createSprite(50,400,100,30)
  block7.shapeColor='black'
  block8=createSprite(115,365,30,100)
  block8.shapeColor='black'
  block9=createSprite(220,365,30,100)
  block9.shapeColor='black'
  block10=createSprite(70,300,120,30)
  block10.shapeColor='black'
  block11=createSprite(850,500,600,30)
  block11.shapeColor='black'
  block12=createSprite(690,535,30,100)
  block12.shapeColor='black'
  block13=createSprite(515,400,200,30)
  block13.shapeColor="black"
  block14=createSprite(800,400,200,30)
  block14.shapeColor='black'
  block15=createSprite(515,320,200,30)
  block15.shapeColor="black"
  block16=createSprite(715,290,30,200)
  block16.shapeColor='black'
  block17=createSprite(1020,285,30,400)
  block17.shapeColor='black'
  block18=createSprite(1135,335,30,300)
  block18.shapeColor='black'
  block19=createSprite(905,285,200,30)
  block19.shapeColor='black'
  block20=createSprite(830,205,200,30)
  block20.shapeColor='black'
  block21=createSprite(1110,100,150,30)
  block21.shapeColor='black'
  block22=createSprite(915,100,30,180)
  block22.shapeColor='black'
  block23=createSprite(820,65,30,100)
  block23.shapeColor='black'
  block24=createSprite(655,100,300,30)
  block24.shapeColor='black'
  block25=createSprite(630,260,30,150)
  block25.shapeColor='black'
  block26=createSprite(540,200,150,30)
  block26.shapeColor='black '
  block27=createSprite(400,75,30,120)
  block27.shapeColor='black'
  block28=createSprite(165,100,300,30)
  block28.shapeColor="black"
  block29=createSprite(165,200,300,30)
  block29.shapeColor='black'
  blockGroup= new Group()
  blockGroup.add(block1,block2)
    blockGroup.add(block3,block4)
    blockGroup.add(block5,block6)
    blockGroup.add(block7,block8)
    blockGroup.add(block9,block10)
    blockGroup.add(block11,block12)
    blockGroup.add(block13,block14)
    blockGroup.add(block15,block16)
    blockGroup.add(block17,block18)
    blockGroup.add(block19,block20)
    blockGroup.add(block21,block22)
    blockGroup.add(block23,block24)
    blockGroup.add(block25,block26)
    blockGroup.add(block27,block28)
    blockGroup.add(block29)
    edges=createEdgeSprites()

  
}

function draw() {
  
  background(floor)
  
  
  
  
  if(keyIsDown(UP_ARROW)){
    player.y-=10
  } 
  if(keyIsDown(DOWN_ARROW)){
    player.y+=10
  }
  if(keyIsDown(LEFT_ARROW)){
    player.x-=10
  }
  if(keyIsDown(RIGHT_ARROW)){
    player.x+=10
  }
  if(player.collide(blockGroup)){
    player.x=100
    player.y=550
  }
  if (player.collide(edges[2])){
swal({
  title:"You Won",
  confirmButtonText:'OK'
})
  }

  

  
  
  drawSprites()
}

function buildMaze(x,y){
  for(var i=0;i<15;i++){
    block=createSprite(x+i*100,y,100,30)
    block.shapeColor='black'
  }

}

function borderSide(x,y){
  for(var z=0;z<7;z++){
    blocks=createSprite(x,y+z*100,30,100)
    blocks.shapeColor='black'
  }
}

