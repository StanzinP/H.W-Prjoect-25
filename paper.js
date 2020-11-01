class Paper {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          restitution:0.3,
          friction:0.5,
          density:0.2,
      }
      this.radius = radius;
      this.x = x;
      this.y = y;
      this.body = Bodies.circle(x,y,radius,options);
      this.image = loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      imageMode(RADIUS);
      fill("purple");
      image(this.image,pos.x, pos.y, this.radius,this.radius);
    }
  }
