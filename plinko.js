class Plinko {
    constructor(x,y) {
      var options = {
        restitution:1,
        isStatic:true,
        friction:0
      }
      this.radius = 15;
      this.body = Bodies.circle(x,y,this.radius,options);
      

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle= this.body.angle;
      push()
      translate(pos.x,pos.y)
      rotate(angle)
      ellipseMode(CENTER);
      ellipse(0, 0, this.radius, this.radius);
      pop()
    }
  };
