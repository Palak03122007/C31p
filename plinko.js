class Plinko {
    constructor(x, y, r) {
      var options = {
          isStatic:true
      }

      this.x=x;
      this.y=y;
      this.r=r

      this.body = Bodies.circle(x, y, r, options);
      this.r = r;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("blue");
      ellipse(0,0,this.r);
    }
  };