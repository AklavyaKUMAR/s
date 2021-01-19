class Bob {
  constructor(x,y , radius ) {
    var options = {
        isStatic: true
    }
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    World.add(world, this.body);
  }
  display(){
    push()
    translate(this.body.position.x, this.body.position.y);
    circleMode(CENTER);
    circle( 0, 0, this.radius);
pop()
  }
};