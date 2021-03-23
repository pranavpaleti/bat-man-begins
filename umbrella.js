class Umbrella{
    constructor(x, y) {
        var options = {
            isStatic:true
           
        }
        this.body = Bodies.circle(x, y, 50,options);
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("red")
        ellipse(0,0,50,50);
        pop();
      }
     
  }