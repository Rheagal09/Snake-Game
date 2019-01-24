var bla=10;
var rows=400/bla;
var cols=400/bla;
var adam;
var food;
function setup(){
  createCanvas(400,400)
  frameRate(10)
  adam=new Snake();
  food=createVector(floor(random(rows))*bla,floor(random(cols))*bla);

}
function keyPressed(){
  if(keyCode==UP_ARROW && adam.xspeed!=0 && adam.yspeed!=1*bla)
    adam.dir(0,-1)
  else if(keyCode==DOWN_ARROW && adam.xspeed!=0 && adam.yspeed!=-1*bla)
    adam.dir(0,1)
  else if(keyCode==RIGHT_ARROW && adam.xspeed!=-1*bla && adam.yspeed!=0)
    adam.dir(1,0)
  else if(keyCode==LEFT_ARROW && adam.xspeed!=1*bla && adam.yspeed!=0)
    adam.dir(-1,0)
}
function Snake(){
  this.x=0;
  this.y=0;
  this.xspeed=1*bla;
  this.yspeed=0*bla;
  this.total=0;
  this.show=function(){
    fill(255)
    rect(this.x,this.y,10,10)
    for(let t=0;t<this.total;t++)
      rect(this.x-this.xspeed*(t+1),this.y-this.yspeed*(t+1),10,10)
  }
  this.update=function(){
    this.x=this.x+this.xspeed;
    this.y=this.y+this.yspeed;
    this.x=constrain(this.x,0,400-bla);
    this.y=constrain(this.y,0,400-bla)
  }
  this.dir=function(xS,yS){
    this.xspeed=xS*bla;
    this.yspeed=yS*bla;
  }
}
function check(){
  if(adam.x==0 && adam.xspeed<0)
    {
      // console.log("game ended")
      return 0;
    }
  if(adam.y==0 && adam.yspeed<0)
    {
      // console.log("game ended")
      return 0;
    }
  if(adam.x==400-bla && adam.xspeed>0)
    {
      // console.log("game ended")
      return 0;
    }
  if(adam.y==400-bla && adam.yspeed>0)
    {
      // console.log("game ended")
      return 0;
    }


}
function MakeFood(){
  food.x=floor(random(rows))*bla;
  food.y=floor(random(cols))*bla;
  fill(221,74,104)

  rect(food.x,food.y,10,10)
}
function iffoodEaten(){
  // console.log("hello",adam.x,food.x)

  if(adam.x==food.x && adam.y==food.y){
    adam.total=adam.total+1;
    // console.log(adam.total)
    MakeFood();
  }
  return 0;
}
// function DisplayScore(){
//   console.log("in display")
//   document.getElementsByTagName('body').innerHTML+="<strong>Your Score "+ adam.total +"</strong>";
//
// }
function draw(){
  background(51)
  if(check()!=0){
  adam.update();
  adam.show();
}
  else{console.log(adam.total)}
  fill(221,74,104)
  rect(food.x,food.y,10,10)
  // console.log(food.x,food.y)
  iffoodEaten();
}
