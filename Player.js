class Player {
    constructor(x, y) {
      var options = {
           isStatic:false,
          'restitution':0.1,
          'friction':1.0,
          'density':0.5
      }
      this.body = Matter.Bodies.circle(x, y, 20, options);
      this.radius = 20;
      this.x = x;
      this.y = y;
      this.image = loadImage("images/bird.png");

      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      camera.position.x = this.body.x;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(3);
      stroke("orange");
      fill(255);
      image(this.image,0,0,this.radius*5,this.radius*5);
      pop();
    }
  }
  