//Creating variables
var car, wall;
//Creating variables
var speed, weight;

//In this function we setup or assign something to the variables we created before and also create a canva
function setup () {

  //Creating a canvas
  createCanvas(1600,400);

  //Assigning random values to the variable 'speed'
  speed = random(55,90);

   //Assigning random values to the variable 'weight'
  weight = random(400,1500);


  // Storing a sprite in the variable 'car'
  car = createSprite(50,200,50,50);
  //Assigning colour as grey to the sprite we created for the variable 'car'
  car.shapeColor = "grey";
 
  // Storing a sprite in the variable 'wall'
  wall = createSprite(1500,200,60,height/2);
  //Assigning colour as white to the sprite we created for the variable 'wall'
  wall.shapeColor = "white";
  //Assigning Velocity of the X axis of the variable 'car' as the variable we assigned before i.e. 'speed'
  car.velocityX = speed;

}

//In this function we store all kinds of logic on how the simlator works and also we create a background for 
// the simulator or the game 
function draw() {
  // Creating background
  background(0,0,0);
  
  // Instructing the computer on how to detect the deformation
  // If the X axis of the wall, minus the X axis of the car is smaller than the width of the car plus the width
  // of the wall/ 2
  if(wall.x - car.x < (car.width + wall.width )/2)
  {
    //The car's velocity will be 0(it will not move)
    car.velocity = 0;
    //The deformation will be 0.5 x the weight x the speed x the speed/ 22509
    var deformation = 0.5 * weight  * speed * speed/22509;
    //If the deformation is greater than 180,
    if(deformation > 180){
      //The car's colour will change
      car.shapeColor = color(255,0,0,); 
    }

    //If the deformation is less than hundred
    if(deformation < 100) {
      // The car's colour will change
      car.shapeColor = color(230,230,0);
    }
  }

  //This is the code to display all the sprites we have made before
  drawSprites();
}