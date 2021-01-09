class Mango {
  constructor(x,y,r) {
    this.image=loadImage("Pluckingmangoes/mango.png")
    var options = {
        isStatic: true,
        restitution:0,
        friction:1
    }
    this.body = Bodies.circle(x,y,r,options);
    this.r=r
    this.body.position.x = x
    this.body.position.y = y
    World.add(world,this.body);

  // this.mango=createSprite(x,y)
  //  this.mango.addImage(loadImage("pluckingmangoes/mango.png"))
  //  this.mango.scale=0.1;

  
  }
  display(){
      image(this.image,this.body.position.x,this.body.position.y,this.r,this.r)
     }
}