var database;
var playerCount =0;
var allPlayers;
var gameState = 0;
var player, quiz, question;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  database = firebase.database();
}

function draw() {
  background(255,255,255);  
  drawSprites();
}