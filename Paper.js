class Paper{
constructor(x,y,radius) {
var options = {
isStatic: false,
restitution: 0.3,
friction: 0.5,
density: 1.2
}
this.body = Bodies.circle(x,y,radius,options);
this.radius = radius
World.add(world, this.body);
}

display(){
var position = this.body.position;
ellipseMode(RADIUS);
fill("purple");
circle(position.x,position.y,this.radius);
}
}