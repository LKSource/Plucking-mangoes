class Ropeshot {
  constructor (body1,point2) {
    var options ={
        bodyA:body1,
        pointB:point2,
        length:10,
        stiffness:0.1,
    }
   this.rope=Constraint.create(options)
    World.add(world,this.rope)
    this.pointB=point2
  }
  display(){
    if(this.rope.bodyA){
      var ropeA=this.rope.bodyA.position
      var ropeB=this.pointB
      line(ropeA.x,ropeA.y,ropeB.x,ropeB.y);
   }
  }
 fly(){
    this.rope.bodyA=null
 }
 attach(body){
   this.rope.bodyA=body
 }
}
