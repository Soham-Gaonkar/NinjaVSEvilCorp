

class Box{
    constructor(x, y,w,h,s) {

        this.x=x;
        this.y=y;
        this.h=h;
        this.w=w;
        
        this.s=s;
        
        let walls=[];
        this.walls=walls;

        this.walls.push(new Boundary(this.x,this.y,this.x+this.w,this.y));
        this.walls.push(new Boundary(this.x+this.w,this.y,this.x+this.w,this.y+this.h));
        this.walls.push(new Boundary(this.x+this.w,this.y+this.h,this.x,this.y+this.h));
        this.walls.push(new Boundary(this.x,this.y+this.h,this.x,this.y));
        
        if(this.s==2)
        {
        for(let wall of walls)
        {
        boxeswalls.push(wall);
        }
       }
       if(this.s==-2||this.s==-1)
        {
        for(let wall of walls)
        {
        boxeswalls.push(wall);
        }

       }

       if(this.s==-2)
       {
         this.c='black';
       }
       else if(this.s==0)
       {
           this.c='white';
       }
       else
       {
        this.c='#006666';
       }

    }
    show() {

        noStroke();
        //noStroke();
        fill(this.c);
        //stroke(0);
        rect(this.x, this.y, this.w, this.h);
        if(this.s==-2)
        {
          fill('red')
          rect(this.x,this.y+2*Hscale,this.w,2*Hscale)
          fill('white')
          if(vx>0)
          {
            rect(this.x+15*Wscale,this.y+6*Hscale,3*Wscale,3*Hscale);}
          else if(vx<0)
          {
            rect(this.x,this.y+6*Wscale,3*Wscale,3*Hscale);
          }
          else{
          rect(this.x+5*Wscale,this.y+6*Hscale,3*Wscale,3*Hscale);
          rect(this.x+12*Wscale,this.y+6*Hscale,3*Wscale,3*Hscale);
          }
        }

      }
    
  }
  