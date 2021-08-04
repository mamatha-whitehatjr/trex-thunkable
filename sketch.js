var platform1, platform2;

function preload()
{}

function setup() {
  createCanvas(7346, 668);
  //platform1 = new Platform(100);
  //platform2 = new Platform(400);

  var counter = 100;

  for (var i=0; i<6; i++) {

    platform1 = new Platform(counter);
    counter = counter + 400;
  }
  
}

function draw() {
  background('skyblue');  
  drawSprites();

}

