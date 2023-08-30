var boxeswalls=[];
var playerwalls=[];

var Wscale,Hscale;
var boxes=[];
var ray;
var particle1,particle0,particle2,particle3;
var player;
var accy=0.7;
var loop2=0;
var loop=0;
var initialtime;
var newtime=0;

var stage=0;
var laptopB=[];

var vy=0;
var vx=0;

var topB,rightB,leftB,bottomB;
var fov;
var player2;
let img;

var ratio;
var yshift;
let fontRegular, fontItalic, fontBold;


var newWidth;
var newHeight;


function setup() {

  ratio=1366/625;
  
 if(window.innerWidth/window.innerHeight>ratio)
 {
  newHeight=window.innerHeight;
  newWidth=newHeight*ratio;//ratio=newWidth/newHeight;
 }
 else{
  newWidth=window.innerWidth;
  newHeight=newWidth/ratio;
 }
  createCanvas(window.innerWidth,window.innerHeight);
  if(newHeight<window.innerHeight)
  {
    yshift=(window.innerHeight-newHeight)/2;
  }
 Wscale=newWidth/1821;
 Hscale=newHeight/833;
  background("lightgreen");
  fill("blue");
  textSize(20);
 

  player=new Box(500  *Wscale,700  *Hscale,20  *Wscale,25  *Hscale,-2);//player
 
  leftB=new Box(430  *Wscale,49  *Hscale,50  *Wscale,735  *Hscale,-1);
  rightB=new Box(1290  *Wscale,49  *Hscale,50  *Wscale,735  *Hscale,-1);
  topB=new Box(430  *Wscale,-1  *Hscale,912  *Wscale,50  *Hscale,-1);
  bottomB=new Box(430  *Wscale,782  *Hscale,912  *Wscale,50  *Hscale,-1);

  F1box=new Box(1180  *Wscale,180  *Hscale,40  *Wscale,40  *Hscale,0);
  
  boxes.push(F1box);//0

  boxes.push(player);//1
  boxes.push(leftB);//2
  boxes.push(rightB);//3
  boxes.push(topB);//4
  boxes.push(bottomB);//5

  laptopB.push(new Boundary(480*Wscale,49*Hscale,480*Wscale,784*Hscale));
  laptopB.push(new Boundary(1290*Wscale,49*Hscale,1290*Wscale,784*Hscale));
  laptopB.push(new Boundary(430*Wscale,49*Hscale,1342*Wscale,49*Hscale));
  laptopB.push(new Boundary(430*Wscale,782*Hscale,1342*Wscale,782*Hscale));


  boxes.push(new Box(630  *Wscale,743  *Hscale,110  *Wscale,40  *Hscale,1));//6
  boxes.push(new Box(830  *Wscale,643  *Hscale,300  *Wscale,40  *Hscale,1));//7
  boxes.push(new Box(430  *Wscale,503  *Hscale,140  *Wscale,100  *Hscale,1));//8
  boxes.push(new Box(1120  *Wscale,543  *Hscale,190  *Wscale,40  *Hscale,1));//9
  boxes.push(new Box(820  *Wscale,480  *Hscale,210  *Wscale,40  *Hscale,1));//10
  boxes.push(new Box(820  *Wscale,340  *Hscale,40  *Wscale,160  *Hscale,1));//11
  boxes.push(new Box(680  *Wscale,340  *Hscale,140  *Wscale,40  *Hscale,1));//12
  boxes.push(new Box(430 *Wscale,230 *Hscale,140*Wscale,130*Hscale,1));//13
  boxes.push(new Box(680  *Wscale,340  *Hscale,40  *Wscale,190  *Hscale,1));//14
  boxes.push(new Box(430 *Wscale,220  *Hscale,230 *Wscale,40  *Hscale,1));//15
  boxes.push(new Box(920  *Wscale,220  *Hscale,400  *Wscale,40  *Hscale,1));//16
  boxes.push(new Box(430  *Wscale,600  *Hscale,160  *Wscale,40  *Hscale,1));//17

  
  boxes.push(new Box(800  *Wscale,613  *Hscale,160  *Wscale,40  *Hscale,2));//18
  boxes.push(new Box(430  *Wscale,380  *Hscale,140  *Wscale,140  *Hscale,2));//19
  boxes.push(new Box(1240  *Wscale,683  *Hscale,80  *Wscale,40  *Hscale,2));//20
  boxes.push(new Box(520  *Wscale,480  *Hscale,540  *Wscale,40  *Hscale,2));//21
  boxes.push(new Box(580  *Wscale,500  *Hscale,40  *Wscale,200  *Hscale,2));//22
  boxes.push(new Box(580  *Wscale,680  *Hscale,140  *Wscale,40  *Hscale,2));//23
  boxes.push(new Box(1050  *Wscale,480  *Hscale,40  *Wscale,160  *Hscale,2));//24
  boxes.push(new Box(1080  *Wscale,600  *Hscale,60  *Wscale,40  *Hscale,2));//25
  boxes.push(new Box(830  *Wscale,340  *Hscale,500  *Wscale,40  *Hscale,2));//26
  boxes.push(new Box(630  *Wscale,340  *Hscale,80  *Wscale,40  *Hscale,2));//27
  boxes.push(new Box(630  *Wscale,200  *Hscale,40  *Wscale,140  *Hscale,2));//28
  boxes.push(new Box(630  *Wscale,180  *Hscale,200  *Wscale,40  *Hscale,2));//29
  boxes.push(new Box(940  *Wscale,120  *Hscale,160  *Wscale,40  *Hscale,2));//30
  boxes.push(new Box(940  *Wscale,230  *Hscale,50  *Wscale,40  *Hscale,2));//31
  boxes.push(new Box(550  *Wscale,260  *Hscale,100  *Wscale,40  *Hscale,2));//32
 // boxes.push(new Box(1120  *Wscale,210  *Hscale,100  *Wscale,40  *Hscale,2));//33

  fov=70*Wscale;
  particle0= new Particle(F1box.x,F1box.y,359.9,0)
  particle1 = new Particle(900 *Wscale,664 *Hscale,fov,0);
  particle2 = new Particle(720 *Wscale,280 *Hscale,fov,1);//0.4:55 
  particle3 = new Particle(1020 *Wscale,180 *Hscale,fov,1);
}
var time=0;
var temp=0;

var condition=true;
var c;
var motiony=0;//cannot jump

function draw() {
  translate (0,yshift);
  c =Math.random();
  
  background('#051054');
  

  if(stage==0)
  {
  fill('#006666');
  rect(460*Wscale,150*Hscale,870*Wscale,770*Hscale);
  fill('black');
  //button1 = createButton('Play');
  //button1.position(900*Wscale, 600*Hscale);
  //button1.mousePressed(()=>{stage=1});
  noStroke();
  textSize(40*Wscale);
  fill('White');
  textFont('Georgia');
  text('Ninja',700*Wscale,150*Hscale);


  fill('white')
  rect(899*Wscale,89*Hscale,32*Wscale,62*Hscale);
  
  fill('black')
  rect(900*Wscale,90*Hscale,30*Wscale,60*Hscale);

  fill('white');
  rect(905*Wscale,100*Hscale,5*Wscale,5*Hscale);
  rect(920*Wscale,100*Hscale,5*Wscale,5*Hscale);

  fill('red')
  rect(900*Wscale,95*Hscale,30*Wscale,5*Hscale);
  textSize(50*Wscale)
  //textFont(fontBold);
  
  text('EVILCORP',700*Wscale,220*Hscale);

  for(var i=500;i<=1250 ;i+=120)
  {
    for(var j=250;j<=750;j+=100)
    {
      fill('black');
      if((int(i%j)%7==0))
      {
        fill('grey')
      }
      else if((int(i%j)%9==0))
      {
        fill('dark grey');
      }
      rect(i*Wscale,j*Hscale,70*Wscale,80*Hscale);
    }
  }
  textSize(15);
  fill('white')
  text('Press Space to Play',760*Wscale,800*Hscale);


  if(keyIsDown(32))
  {
    stage =1;
  }
  }
  else if(stage==1)
  {
  //button1.position(10000*Wscale,600*Hscale)
  fill('#5fc6f5');
  rect (440*Wscale,49*Hscale,870*Wscale,782*Hscale);
  }
  else if(stage==2)
  {
    fill('#79afc9');
    rect (440*Wscale,49*Hscale,870*Wscale,782*Hscale);
  }
  else if(stage==3)
  {
    fill('#b192d6');
    rect (440*Wscale,49*Hscale,870*Wscale,782*Hscale);
  }
  else if(stage==4||stage==5)
  {
    fill('#82598f');
    rect (440*Wscale,49*Hscale,870*Wscale,782*Hscale);
  }

  noStroke();

  fill('black')
  rect(0*Wscale,260*Hscale,120*Wscale,500*Hscale);
  rect(120*Wscale,300*Hscale,170*Wscale,500*Hscale);
  rect(290*Wscale,280*Hscale,170*Wscale,500*Hscale);
  rect(1320*Wscale,290*Hscale,150*Wscale,500*Hscale);
  rect(1470*Wscale,330*Hscale,180*Wscale,500*Hscale);
  rect(1600*Wscale,260*Hscale,130*Wscale,500*Hscale);
  rect(1730*Wscale,300*Hscale,160*Wscale,500*Hscale);

  fill('#212629');
  rect(0*Wscale,420*Hscale,100*Wscale,500*Hscale);
  rect(100*Wscale,330*Hscale,110*Wscale,500*Hscale);
  rect(210*Wscale,480*Hscale,100*Wscale,500*Hscale);
  rect(310*Wscale,420*Hscale,130*Wscale,500*Hscale);

  rect(1330*Wscale,400*Hscale,120*Wscale,500*Hscale);
  rect(1440*Wscale,420*Hscale,100*Wscale,500*Hscale);
  rect(1540*Wscale,340*Hscale,110*Wscale,500*Hscale);
  rect(1650*Wscale,480*Hscale,100*Wscale,500*Hscale);
  rect(1750*Wscale,440*Hscale,90*Wscale,500*Hscale);

  fill('#343c40');
  rect(0*Wscale,580*Hscale,110*Wscale,500*Hscale);
  rect(90*Wscale,650*Hscale,160*Wscale,500*Hscale);
  rect(210*Wscale,600*Hscale,160*Wscale,500*Hscale);
  rect(330*Wscale,660*Hscale,130*Wscale,500*Hscale);

  rect(1330*Wscale,630*Hscale,120*Wscale,500*Hscale);
  rect(1440*Wscale,590*Hscale,160*Wscale,500*Hscale);
  rect(1600*Wscale,670*Hscale,110*Wscale,500*Hscale);
  rect(1710*Wscale,570*Hscale,100*Wscale,500*Hscale);
  rect(1810*Wscale,690*Hscale,90*Wscale,500*Hscale);
  


  fill('white');

  fill (0);
  stroke(0);
 
  fill('black')
  push();
  translate(0,-yshift);
  rect(0,0,window.innerWidth,(window.innerHeight-newHeight)/2);
  rect(0,(window.innerHeight-newHeight)/2+newHeight,window.innerWidth,window.innerHeight-((window.innerHeight-newHeight)/2+newHeight))
  pop ();

  
  motiony=0;

  player.y+=vy;
  vy+=accy;
  player.x+=vx;
  
  if(vx>0.1)
  {
    vx=vx-0.1;
  }
  if(vx<-0.1)
  {
    vx=vx+0.1;
  }
  if(vx<0.1&&vx>0)
  {
    vx=0;
  }
  if(vx>-0.1&&vx<0)
  {
    vx=0;
  }

  
  if(player.y+player.h>bottomB.y)
  {
    player.y=bottomB.y-player.h;
    vy=0;
    motiony=1;
    if ((keyIsDown(UP_ARROW)||keyIsDown(32))&&motion==0) {
      vy=-16*Hscale;
    } 
  }
  
  if(player.y<topB.y+topB.h)
  {
    player.y=topB.y+topB.h;
  }

  if(player.x+player.w>rightB.x)
  {
    player.x=rightB.x-player.w;
  }
  if(player.x<leftB.x+leftB.w)
  {
    player.x=leftB.x+leftB.w;
  }


  Key_Input(); 
  for(var i=6;i<boxes.length;i++)
  { 
    if(stage==1||stage==2)
    {

      if(i<=17)
      {
    //right of player and left of box
    if((player.x+player.w-boxes[i].x)>=0 &&(player.x+player.w-boxes[i].x)<=5 && player.x<boxes[i].x ){

      if(player.y<boxes[i].y && player.y+player.h>boxes[i].y+boxes[i].h)
      {
        player.x=boxes[i].x-player.w;
      }
      else if(player.y<boxes[i].y && player.y+player.h>boxes[i].y)
      {
        player.x=boxes[i].x-player.w;
      }
      else if(player.y>boxes[i].y && player.y<boxes[i].y+boxes[i].h)
      {
        player.x=boxes[i].x-player.w;
      }

    }
    //left of player and right of box
    else if((player.x-boxes[i].x)>0 && (boxes[i].x+boxes[i].w)-player.x>=0 && (boxes[i].x+boxes[i].w)-player.x<5)
    {
      if(player.y<boxes[i].y && player.y+player.h>boxes[i].y+boxes[i].h)
      {
        player.x=boxes[i].x+boxes[i].w;
      }
      else if(player.y<boxes[i].y && player.y+player.h>boxes[i].y)
      {
        player.x=boxes[i].x+boxes[i].w;
      }
      else if(player.y>boxes[i].y && player.y<boxes[i].y+boxes[i].h)
      {
        player.x=boxes[i].x+boxes[i].w;
      }


    }
    
    //bottom of player and top of box
   else if((player.y+player.h-boxes[i].y)>=0 &&(player.y+player.h-boxes[i].y)<=20 && player.y<boxes[i].y && player.x+player.w>boxes[i].x && player.x<boxes[i].x+boxes[i].w)
    {
      vy=0;
      player.y=boxes[i].y-player.h;
      motiony=1;
      if((keyIsDown(UP_ARROW)||keyIsDown(32))&&motion==0)
      {
       // console.log(Hscale);
        vy=-16*Hscale;
      }

    }
    
    //top of player and bottom of box
    else if(player.y<boxes[i].y+boxes[i].h && player.y>boxes[i].y && player.x+player.w>boxes[i].x && player.x<boxes[i].x+boxes[i].w)
    {
      vy=0;
      player.y=boxes[i].y+boxes[i].h;

    }
    }
   }
   else if(stage==3||stage==4||stage==5)
   {
    if(i<=5||i>17)
    {//right of player and left of box
    if((player.x+player.w-boxes[i].x)>=0 &&(player.x+player.w-boxes[i].x)<=5 && player.x<boxes[i].x ){
      if(player.y<boxes[i].y && player.y+player.h>boxes[i].y+boxes[i].h)
      {
        player.x=boxes[i].x-player.w;
      }
      else if(player.y<boxes[i].y && player.y+player.h>boxes[i].y)
      {
        player.x=boxes[i].x-player.w;
      }
      else if(player.y>boxes[i].y && player.y<boxes[i].y+boxes[i].h)
      {
        player.x=boxes[i].x-player.w;
      }

    }
    //left of player and right of box
    else if((player.x-boxes[i].x)>0 && (boxes[i].x+boxes[i].w)-player.x>=0 && (boxes[i].x+boxes[i].w)-player.x<5)
    {
      if(player.y<boxes[i].y && player.y+player.h>boxes[i].y+boxes[i].h)
      {
        player.x=boxes[i].x+boxes[i].w;
      }
      else if(player.y<boxes[i].y && player.y+player.h>boxes[i].y)
      {
        player.x=boxes[i].x+boxes[i].w;
      }
      else if(player.y>boxes[i].y && player.y<boxes[i].y+boxes[i].h)
      {
        player.x=boxes[i].x+boxes[i].w;
      }


    }
    
    //bottom of player and top of box
   else if((player.y+player.h-boxes[i].y)>=0 &&(player.y+player.h-boxes[i].y)<=20 && player.y<boxes[i].y && player.x+player.w>boxes[i].x && player.x<boxes[i].x+boxes[i].w)
    {
      vy=0;
      player.y=boxes[i].y-player.h;
      motiony=1;
      if((keyIsDown(UP_ARROW)||keyIsDown(32))&&motion==0)
      {
        //console.log(Hscale);
        vy=-16*Hscale;
      }

    }
    
    //top of player and bottom of box
    else if(player.y<boxes[i].y+boxes[i].h && player.y>boxes[i].y && player.x+player.w>boxes[i].x && player.x<boxes[i].x+boxes[i].w)
    {
      vy=0;
      player.y=boxes[i].y+boxes[i].h;

    }

    }
   }
  }

  for(var i=0;i<boxes.length;i++)
  {
    var box=boxes[i];
    if(stage==1||stage==2)
    {
      if(i<=16)
      {
        box.show();
      }
    }
    else if(stage==3||stage==4||stage==5)
    {
      if(i<=5||i>16)
      {
        box.show();
      }
    }
  }
  //console.log(stage);
  //image(img,player.x-30,player.y-40,player.w*6,player.h*5);
  if(stage==1)
  {
  noStroke();
  fill('white');
  textSize(20*Hscale);
  text("𝘜𝘴𝘦 𝘈𝘳𝘳𝘰𝘸 𝘬𝘦𝘺𝘴 𝘵𝘰 𝘮𝘰𝘷𝘦",700*Wscale,600*Hscale); 
  }
  if(stage==3)
  {
    noStroke();
    fill('white');
    textSize(25*Hscale);
    text("𝘈𝘷𝘰𝘪𝘥 𝘵𝘩𝘦 𝘤𝘢𝘮𝘦𝘳𝘢𝘴",700*Wscale,600*Hscale); 
  }
  if(player.x>=F1box.x  && player.y<=(F1box.y+F1box.h)&&stage==1)
  {
    vx=0;
    vy=0;
    stage=2;
  }
  if(stage==2)
  {
    motion=1;
    fill('white')
    textSize(20*Hscale);
    text("𝘉𝘳𝘰𝘸𝘴𝘪𝘯𝘨 𝘍𝘪𝘭𝘦𝘴...",700*Wscale,500*Hscale); 
    textSize(25*Hscale);
    text("𝘩𝘵𝘵𝘱:"+"//404𝘗𝘢𝘨𝘦𝘕𝘰𝘵𝘧𝘰𝘶𝘯𝘥",700*Wscale,550*Hscale); 

    time++;
  }
  if(time>80){
    
    stage=3;
  }
  if(stage==3&&temp==0)
  {
    motion=0;
  temp=1;
  vy=0;
  player.y=700*Hscale ;
  player.x=530*Wscale ;
  F1box.x=1240*Wscale;
  F1box.y=300*Hscale;
  }
  if((stage==3||stage==4)&&temp==1)
  {
    boxeswalls[0].a.x=player.x;
    boxeswalls[0].a.y=player.y;
    boxeswalls[0].b.x=player.x+player.w;
    boxeswalls[0].b.y=player.y;

    boxeswalls[1].a.x=player.x+player.w;
    boxeswalls[1].a.y=player.y;
    boxeswalls[1].b.x=player.x+player.w;
    boxeswalls[1].b.y=player.y+player.h;

    boxeswalls[2].a.x=player.x+player.w;
    boxeswalls[2].a.y=player.y+player.h;
    boxeswalls[2].b.x=player.x;
    boxeswalls[2].b.y=player.y+player.h;

    boxeswalls[3].a.x=player.x;
    boxeswalls[3].a.y=player.y+player.h;
    boxeswalls[3].b.x=player.x;
    boxeswalls[3].b.y=player.y;
   

  fill('black');


  particle1.update(particle1.x,particle1.y);
  particle1.setFOV();
  particle1.show();

  particle2.update(particle2.x,particle2.y);
  particle2.setFOV();
  particle2.show();

  particle3.update(particle3.x,particle3.y);
  particle3.setFOV();
  particle3.show();
  
  condition=particle1.look(boxeswalls);
  if(condition==false)
  {
    particle1.rate=0;
    motion=1;
    vy=0;
    vx=0;
    stage=4;
  }
  condition=particle2.look(boxeswalls);
  if(condition==false)
  {
    particle2.rate=0;
    motion=1;
    vy=0;
    vx=0;
    stage=4;
  }
  condition=particle3.look(boxeswalls);
  if(condition==false)
  {
    particle3.rate=0;
    motion=1;
    vy=0;
    vx=0;
    stage=4;
  }
  }
  
  if(stage!=0)
  {
  
  particle0.update(F1box.x+F1box.w/2,F1box.y+F1box.h/2);
  particle0.setFOV();
  particle0.look(laptopB);
  }

  fill('white');
  textSize(20);
  if(stage==4)
  {
    particle1.rate=0;
    particle2.rate=0;
    particle3.rate=0;
    motion=1;
    fill('white');
    textSize(20*Hscale);
    text('𝘠𝘰𝘶 𝘸𝘦𝘳𝘦 𝘧𝘰𝘶𝘯𝘥',500*Wscale,400*Hscale);
    textSize(30*Hscale);
    text('𝘗𝘳𝘦𝘴𝘴 [𝘙] 𝘵𝘰 𝘳𝘦𝘴𝘵𝘢𝘳𝘵 𝘭𝘦𝘷𝘦𝘭',500*Wscale,450*Hscale);
    if(keyIsDown(82))
    {
      particle1.rate=0;
      particle2.rate=0.8;
      particle3.rate=0.8;
      stage=3;
      temp=0;
      motion=0;
    }
  }

  if(player.x>=F1box.x &&player.x<=F1box.x+F1box.w&& player.y<=(F1box.y+F1box.h)&&player.y>=F1box.y &&stage==3&&temp2==0)
  {
    temp2=1;
    stage=5;
    motion=1;
    textx=0;
    vy=0;
    vx=0;
  }




  
  
  if(stage==5&&temp2==1)
  {
    particle1.rate=0;
    particle2.rate=0;
    particle3.rate=0;
    motion=1;
    vx=0;vy=0;
    fill('white');
    textSize(40*Hscale);
    stroke(255);
    strokeWeight(2);
    if(textx<900*Wscale)
    {
      textx+=4;
    }
    else{
      line((textx)*Wscale,405*Hscale,(textx+250)*Wscale,405*Hscale);
      line((textx)*Wscale,455*Hscale,(textx+450)*Wscale,455*Hscale);
    }
    noStroke();
    fill('white');
    text('𝘍𝘪𝘭𝘦 𝘧𝘰𝘶𝘯𝘥',textx*Wscale,400*Hscale);
    text('𝘔𝘪𝘴𝘴𝘪𝘰𝘯 𝘚𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭',(width-textx)*Wscale,450*Hscale);
  }
  fill('white');
  textSize(40*Hscale)
  stroke('white');

  fill('white');
  //console.log(vx);


  //drawGrid()

  //drawSprites();

}

var temp2=0;
var textx=0;
var motion=0;
function drawGrid(){
  stroke (0);
  textSize(15*Hscale);
  for(var i=50;i<width;i+=50)
  {
    text(i,i,20);
    line(i,0,i,height);
  }
  for(var j=50;j<height;j+=50)
  {
    text(j,20,j);
    line(0,j,width,j);
  }
  
}

function Key_Input(){
  if (keyIsDown(LEFT_ARROW)&&motion==0) {
    vx=-5*Wscale;
  }

  if (keyIsDown(RIGHT_ARROW)&&motion==0) {
    vx=5*Wscale;
  }
}

function touchMoved()
{
  /*
var touchx=mouseX- pmouseX;
  var touchy=mouseY-pmouseY;
  if (touchx<-10&&motion==0) {
    vx=-5*Wscale;
  }

  if (touchx>10&&motion==0) {
    vx=5*Wscale;
  }

        if(touchy>10&&motiony==1&&motion==0)
  {
    vy=-20*(Hscale/2);
  }
  */
  
  
}

async function gettime()
{
    var response= await fetch ("http://worldclockapi.com/api/json/est/now");
    var responseJSON=await response.json();
    var epocht=responseJSON.currentFileTime;
    //console.log(epocht)
    return  epocht;
}


