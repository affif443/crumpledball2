class Dustbin {
    constructor (x, y, width, height){
        var options = { 
            isStatic: true,
            'restitution':0,
            'friction':1,
            'density':0.1

        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image=loadImage("images/dustbingreen.png")
        World.add(world, this.body);
       

    }

    display(){
        imageMode(CENTER);
        var pos = this.body.position;
        image(this.image,pos.x, pos.y, this.width, this. height);

    }
}