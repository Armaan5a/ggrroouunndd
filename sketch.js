
var countDistanceX=0,gap
function preload(){

}

function setup() {
  createCanvas(10000,668);
  
  
  
  for (var i =0 ;i<30; i=i+1){
    platform1=new Platform(countDistanceX);
    gap=random([0,30,100,0,80,0,90,0])
    countDistanceX=countDistanceX+platform1.rw+gap
  }
  
  
  
}

function draw() {
  background('skyblue'); 
 drawSprites();
}

