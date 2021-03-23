class Drop{
    constructor(x, y) {
        var options = {
           
            restitution :0.4,
            friction :0.1,
            //isStatic:true
           
        }
        this.body = Bodies.circle(x, y, 5,options);
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("blue")
        ellipse(0,0,5,5);
        pop();
      }
      updateDrops(){
          if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{
                x:random(0,400),
                y:random(0,400)
            })
          }
      }
  }