class Particle {
        constructor(x,y,r){
            var options={
                restitution: 3,
                friction: 1,
                density: 4
            }
           this.body = Bodies.circle(x,y, this.r,options);
           this.color=color(random(0,255), random(0,255), random(0,255));
           World.add(world, this.body);
        }
        display(){
            fill(this.color)
            ellipse(this.body.position.x, this.body.position.y,10,10)
        }
    }
