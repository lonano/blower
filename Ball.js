class Ball{
    constructor(x,y,w,h){
        var options = {
            restitution:0.2
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.y = y;
        this.x = x;
        this.w = w;
        this.h = h;
        this.color = color;
        World.add(world,this.body);

    }
    show(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        stroke(255);
        fill("orange");
         ellipse(0,0,this.w,this.h);
         pop();
    }
}