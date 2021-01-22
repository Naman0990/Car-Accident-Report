var car, wall
var speed, weight

Function setup (){
    createCanvas= (1600,  400)
    car=createSprite(50, 200, 50, 50)
    car.velocityX= speed
    speed=random(55, 90)
    weight=random(400, 1500)
    car.shapeColor=color(225)
    wall=createSprite(1500, 200, 60, height/2)
    wall.shapeColor=color(80, 80, 80)
    Deformation=0.5*weight*speed*speed/22500
}
Function draw(){
background(0);
drawsprites();
if (car.isTouching(wall)){
    if (Deformation<100){
        car.shapecolor=(green);
    }
     if (Deformation>100 && deformation<180){
        car.shapecolor=(Yellow);
    }
     if (Deformation>180){
        car.shapecolor=(Red);
    }

}
}   