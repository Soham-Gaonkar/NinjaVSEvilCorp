class Particle {
  constructor(x,y,fov,rate) {
    
    this.x=x;
    this.y=y;
    this.pos = createVector(width / 2, height / 2);
    this.rays = [];
    this.FOV = fov;
    this.rate=rate;
    this.angle=0;
    for (let i = 0; i < 360; i += 0.3) {
      this.rays.push(new Ray(this.pos, radians(i)));
    }
  }

  update() {
    if(this.angle>=360)
    {
      this.angle=0;
    }
    this.angle+=this.rate;
    this.pos.set(this.x,this.y);
  }
  update(x,y) {
    if(this.angle>=360)
    {
      this.angle=0;
    }
    this.angle+=this.rate;
    this.pos.set(x,y);
  }
  
  look(walls) {
    for (let ray of this.rays) {
      let closest = null;
        let record = Infinity;
      for (var i=0;i<walls.length;i++) { 
        var wall=walls[i];   
        const pt = ray.cast(wall);
        if (pt) {
          const d = p5.Vector.dist(this.pos, pt);
          if (d < record) {
           if(wall)
            record = d;
            closest = pt;
          }
        }
      }
      if (closest) {
        if(this.FOV==359.9)
        {
          stroke(255,40);
        }
        else
        {
          stroke(255, 204, 0,100);
        }
        if (ray.isActive) {
          if(this.FOV==359.9)
          {
            line(this.pos.x, this.pos.y, closest.x, closest.y);
          }
          else
          {
          if(closest.y==player.y &&closest.x>=player.x && closest.x<=player.x+player.w )
          {
            line(this.pos.x, this.pos.y, closest.x, closest.y);
            return false;
          }
          else if(closest.y>=player.y&&closest.y<=(player.y+player.h) &&closest.x>=player.x && closest.x<=player.x+player.w )
          {
            line(this.pos.x, this.pos.y, closest.x, closest.y);
            return false;
          }
          else{
          line(this.pos.x, this.pos.y, closest.x, closest.y);
          }
        }
        }
        stroke(255,100);
      }
    }
    return true;
  }

  setFOV() {

    const degrees = this.angle;//rad * (180 / Math.PI);
    let startAngle = degrees - this.FOV / 2;
    let endAngle = degrees + this.FOV / 2;

    if (startAngle < 0) {
      let diff = 0 - startAngle;
      startAngle = 360 - diff;
    }

    if (endAngle > 360) {
      let diff = endAngle - 360;
      endAngle = diff;
    }

    for (let ray of this.rays) {
      let angle = ray.angle * (180 / Math.PI);

      if (angle > startAngle && angle < endAngle) {
        ray.setActive(true);
      } else if (
        (startAngle > endAngle && angle > startAngle) ||
        (startAngle > endAngle && angle < endAngle)
      ) {
        ray.setActive(true);
      } else {
        ray.setActive(false);
      }
    }
  }


  show() {

      fill(0);
      push();
      translate(this.pos.x,this.pos.y);
      rotate(this.angle/55);
      rect(-2.5,-5,5,10);
      pop();
    
  }
}
