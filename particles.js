class particles{
    constructor(x,y,r){
        var options = {
            resitution:0.4
        }
        this.r=r;

        this.body = Bodies.circle(x, y, this.r,position)
      this.color = color(random(0, 225),random(0,225),random(0, 225));
      World.add(world, this.body);
    }

    display() {
        var pos = this.body.position
        var angle = this.body.angle

        Push();
        Translate(pose.x , pose.y)
        rotate(angle);
        //imageMode(CENTER)
        noStroke();
        Fill(this.color)
        ellipseMode(RADIUS)
        ellipse(0, 0, this.r,this.r);
        Pop();

    }
    
}