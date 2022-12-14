class Car {
    constructor (x,y,width,height){ //<-- what you are building//
        this.x=x; /* (.this) keyword refer to an object being used or called*/
        this.y=y;
        this.width=width;
        this.height=height;

        this.speed=0;
        this.acceleration=0.2;
        this.maxsSpeed=3;
        this.friction=0.05;
        this.angle=0;

        this.controls=new Controls();
    }

    update(){ /* these code are caluclate the movement/speed of the car*/
        this.#move();
    }

    #move(){
        if(this.controls.forward){
            this.speed+=this.acceleration;
        }
        if(this.controls.reverse){
            this.speed-=this.acceleration;
        }
        if(this.speed>this.maxsSpeed){
            this.speed=this.maxsSpeed;
        }
        if(this.speed<-this.maxsSpeed/2){
            this.speed=-this.maxsSpeed/2;
        }

        if(this.speed>0){
            this.speed+=this.friction;
        }

        if(Math.abs(this.speed)<this.friction){
            this.speed=0;
        }
        if (this.speed!=0){
            const flip=this.speed>0?1:-1;
        
                if(this.controls.right){
                this.angle-=0.03*flip;
            }
                if(this.controls.left){
                this.angle+=0.03*flip;
                
            }
        }
    
        this.x-=Math.sin(this.angle)*this.speed;
        this.y-=Math.cos(this.angle)*this.speed;

    }

draw(ctx){ // funtion //
    ctx.save();
    ctx.translate(this.x,this.y);
    ctx.rotate(-this.angle);
    ctx.beginPath();
    ctx.rect(
        -this.width/2,
        -this.height/2,
        this.width,
        this.height
    );
    ctx.fill();

    ctx.restore();
  }





}