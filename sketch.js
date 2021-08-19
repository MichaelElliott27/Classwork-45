var database;
var backgroundImg;
var gameState = 0;
var patientRegistrations;
var patientCount;
var allpatients;
function preload(){
backgroundImg = loadImage("images/Hospital Room.png"); 
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start()
}

function draw() {
  background("white");
  if(patientCount === 4){
    game.update(1);
  }
}
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}