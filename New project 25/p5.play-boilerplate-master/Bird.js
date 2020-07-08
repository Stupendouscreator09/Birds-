class Brid extends BaseClass {
constructor (x,y)  {
    super(X,Y,50,50);
    this.image = loadImage("sprites.bird.png");
} 

display(){
 this.body.position.x  = mouseX;
 this.body.position.y = mouseY;
 super.display();
}


}