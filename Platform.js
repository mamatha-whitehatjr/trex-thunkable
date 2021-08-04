class Platform {
    constructor(xcor) {
        this.rx = xcor;
        this.ry = 400;
        this.rw = random(200,300);
        this.rh = random(100,200);

        this.sprite =  createSprite(this.rx,this.ry,this.rw,this.rh);
        this.sprite.shapeColor = "green";
        this.sprite.debug = true;
    }
}