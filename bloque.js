class bloque{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 50,60, options);
        this.width = 50;
        this.height = 60;
        this.visiblity = 255;
        
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed<3){
          rectMode(CENTER);
          rect(this.body.position.x, this.body.position.y, this.width, this.height);
          
        }
        else{
          World.remove(world,this.body)
          push()
          this.visiblity = this.visiblity - 1
          tint(255,this.visiblity)
          pop()
        }
        
      }
}
//bippity boppity