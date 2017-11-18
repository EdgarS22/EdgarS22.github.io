//Setting User and Computer Variable//
var userSelect;
var compSelect;

//Setting Image Variables//
var rockImage;
var paperImage;
var scissorsImage;

//Setting Game Variable//
var gameState = 0;


function setup() {

  createCanvas(700,700);
  textSize(70);
}

function draw() {

  background(29, 250, 255);

if(gameState == 0){
  showStartScreen();
}else if(gameState == 1){
  checkResult();
  showSelections();
}
}

function preload() {

  rockImage = loadImage("rock.png");
  paperImage = loadImage("paper.png");
  scissorsImage = loadImage("scissors.png");

}

function keyPressed(){

  if(keyCode === 49){
userSelect = 1;
compSelect = floor(random(1,4));
gameState = 1;
} else if(keyCode === 50){
  userSelect = 2;
  compSelect = floor(random(1,4));
  gameState = 1;
}else if(keyCode === 51){
  userSelect = 3;
  compSelect = floor(random(random(1,4)));
  gameState = 1;
}else if(keyCode === 13){
  gameState = 0;
}


}

function showSelections(){

  if(userSelect == 1){
    image(rockImage, 100, 300);
  }else if(userSelect == 2){
    image(paperImage, 100, 300);
  }else if(userSelect == 3){
    image(scissorsImage, 100, 300);
  }

  if(compSelect == 1){
    image(rockImage, 4500, 300);
  }else if(compSelect == 2){
    image(paperImage, 450, 300);
  }else if(compSelect == 3){
    image(scissorsImage, 450, 300);
  }

}


function checkResult(){

  if(userSelect == 1 && compSelect == 1 || userSelect == 2 && compSelect == 2 || userSelect == 3 && compSelect == 3){
    text("It's a Draw!", 160, 100);
  }else if(userSelect == 1 && compSelect == 2 || userSelect == 2 && compSelect == 3 || userSelect == 3 && compSelect == 1){
    text("You Lose!", 200, 100);
  }else if(userSelect == 1 && compSelect == 3 || userSelect == 2 && compSelect == 1 || userSelect == 3 && compSelect == 2){
    text("You Win!", 180, 100);
  }

}


function showStartScreen(){
      textSize(65);
      text("Rock, Paper, Scisssors", 20, 100);
      image(rockImage, 50, 400);
      image(paperImage, 250, 400);
      image(scissorsImage, 450, 400);

}
