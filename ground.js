class Ground 
{
  constructor(x, y, w, h,angle) 
  {
    let options = {
      isStatic:true
    };
    this.y = y
    this.x = x
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    this.angle = angle 
    World.add(world, this.body);
  }
  
display(){
  var pos = this.body.position
  Matter.Body.rotate(this.body,angle)
  push()
  translate(pos.x,pos.y)
  rectMode(CENTER)
  rotate(angle)
  rect(0,0,this.width,this.height)
  pop()
  
}
 
   
}
