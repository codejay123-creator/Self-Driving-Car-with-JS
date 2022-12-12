const canvas=document.getElementById("myCanvas");
canvas.width=200;

const ctx = canvas.getContext("2d"); /*ctx short for context*/
const road= new Road (canvas.width/2,canvas.width*0.9);
const car = new Car (100,100,30,50);

animate();

function  animate(){
    car.update();
    canvas.height=window.innerHeight;
    road.draw(ctx);
    car.draw(ctx);
    requestAnimationFrame(animate); /*<--this code make the animate move without actual moving iilustion of movement */

}