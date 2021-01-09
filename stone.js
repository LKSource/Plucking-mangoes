class Rock{
  constructor(x,y,r,angle) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r=r
      //this.body.position.x = x
      //this.body.position.y = y
      this.image = loadImage("Pluckingmangoes/stone.png");
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      //image(this.image, 0, 0, this.width, this.height);
      image(this.image,0,0,this.r,this.r)
      pop();
    }
}
/*class Rock {
  constructor(x,y,r){
    this.image=loadImage("pluckingmangoes/stone.png")
    var options = {
      isStatic: true,
      restitution:0,
      friction:1,
      density:1.2
  }

  this.body = Bodies.circle(x,y,r,options);
  this.r=r
  World.add(world,this.body);

 // this.stone=createSprite(x,y)
 // this.stone.addImage(loadImage("pluckingmangoes/stone.png"))
 // this.stone.scale=0.1;

  //World.add(world, this.body);
}
display(){
  image(this.image,this.body.position.x,this.body.position.y,this.r,this.r)
}
}*/