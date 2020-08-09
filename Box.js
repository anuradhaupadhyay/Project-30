class Box{
    constructor(x, y, width, height,isStatic) {
        var options = {
            'restitution':0.0,
            'friction':0.2,
            'density':1.0,
            isStatic:isStatic
        }
        this.body = Matter.Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        Matter.World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      }
}