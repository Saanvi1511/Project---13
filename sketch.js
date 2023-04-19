var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score=0;

function preload(){
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");

  // red_balloonImage = loadImage("red_balloon0.png");
  // red_balloonImage = loadImage("redballoon0.png");
  // red_balloonImage = loadImage("red_balloon0");
  red_balloonImage = loadImage("red_balloon0.png");
  
}



function setup() {
  createCanvas(500, 500);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,320,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;

   score = 0 ;
   
   createArrow();
}

function draw() {
 background(0);
  // moving ground

    if (scene.x < 0){
      scene.x = scene.width/2;
    }

    
      scene.velocityX = -3 ;

      //moving bow
      bow.y = World.mouseY

     // release arrow when space key is pressed
      if (keyDown("space")) {
        createArrow();
      }

     //creating continous enemies

      var select_balloon = Math.round(random(1,4));
      // var select_balloon = random(1,4);
      // var select_balloon = Math.round(random());
      // var select_balloon = Math.round(random(1,4,2));
      
      if (World.frameCount % 100 === 0) {
        if (select_balloon === 1) {
          redBalloon();
        } else if (select_balloon === 2) {
          greenBalloon();
        } else if (select_balloon === 3) {
          blueBalloon();
        } else {
          pinkBalloon();
        }
      }   
    


  drawSprites();
  text("Score: "+ score, 300,50);
    }


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}

// function redBalloon() {
//   var red = createSprite(0,50, 10, 10);
//   red.addImage(red_balloonImage);
//   red.velocityX = 3;
//   red.lifetime = 150;
//   red.scale = 0.1;
// }

// function redBalloon() {
//   var red = createSprite(,Math.round(random(20, 370)),50, 10, 10);
//   red.addImage(red_balloonImage);
//   red.velocityX = 3;
//   red.lifetime = 150;
//   red.scale = 0.1;
// }

 function redBalloon() {
      var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
      red.addImage(red_balloonImage);
      red.velocityX = 3;
      red.lifetime = 300;
      red.scale = 0.1;
      bow.depth = red.depth ;
 }

// function redBalloon() {
//   var red = createSprite(0, 10, Math.round(random(20, 370)) , 10);
//   red.addImage(red_balloonImage);
//   red.velocityX = 3;
//   red.lifetime = 150;
//   red.scale = 0.1;
// }

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 300;
  blue.scale = 0.1;
  bow.depth = blue.depth ;
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 300;
  green.scale = 0.1;
  bow.depth = green.depth ;
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 300;
  pink.scale = 1;
  bow.depth = pink.depth ;
}

bow.depth = bow.depth + 1 ;
