var canvas;
var trackImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage;

var database, gameState;
var form, player, playerCount, gameType;
var allPlayers, player1, player2, fuels, powerCoins, obstacles;
var cars = [];
var myplayer,mynation;
var biomeS, biome1Img,biome2Img,biome3Img;
var soldier, woodcutter, fisherman;
var soldierImg, woodcutterImg, fishermanImg;
var click;
var life = 5;
var pos, medicine,medicineImg, medicineG;
var heart, heartImg;
var usaImg,koreaImg,indiaImg,singaporeImg,ukImg,argentinaImg,canadaImg,chinaImg,russiaImg,japanImg,israelImg;
var soldier2Img,woodcutter2Img,fisherman2Img;
var desertImage,arcticImage,grassImage,woodcutter2,soldier2,fisherman2;
var zombie1,zombie1Image, zombieG;
var zombie2Image,zombie3Image,zombie4Image;
var music;
var musicStatus = false;
function preload() {
  trackImage = loadImage("pics/cityImg.jpg");
  music = loadSound("pics/bgMusic.mp3");
//   car1_img = loadImage("assets/car1.png");
//   car2_img = loadImage("assets/car2.png");
//   track = loadImage("assets/track.jpg");
//   fuelImage = loadImage("assets/fuel.png");
//   powerCoinImage = loadImage("assets/goldCoin.png");
soldierImg = loadImage("pics/characters/char1.png");
woodcutterImg = loadImage("pics/characters/char3.png");
fishermanImg = loadImage("pics/fisherman.png");

heartImg = loadImage("pics/heart.png");
medicineImg = loadImage("pics/med.png");

biome1Img = loadImage("pics/snow.png");
biome2Img = loadImage("pics/grass.png");
biome3Img - loadImage("pics/desert.png");

usaImg  = loadImage('pics/usa.png');
koreaImg  = loadImage('pics/korea.jpg');
indiaImg  = loadImage('pics/india.png');
singaporeImg  = loadImage('pics/singapore.jpg');
ukImg  = loadImage('pics/uk.png');
argentinaImg  = loadImage('pics/argentina.jpg');
canadaImg  = loadImage('pics/canada.jpg');
chinaImg  = loadImage('pics/china.jpg');
russiaImg  = loadImage('pics/russia.png');
japanImg  = loadImage('pics/japan.png');
israelImg  = loadImage('pics/israel.jpg');

soldier2Img = loadImage('pics/soldiers/sold1.png',)
woodcutter2Img = loadAnimation('pics/characters/char1.png');
fisherman2Img = loadAnimation('pics/characters/char3.png');

desertImage = loadImage('pics/desert1.jpg');
arcticImage = loadImage('pics/winter.jpg');
grassImage = loadImage('pics/bg1.jpg');

zombie1Image = loadImage('pics/zombies/zombie1.png');

zombie2Image = loadImage('pics/zombies/zombie2.png');

zombie3Image = loadImage('pics/zombies/zombie3.png');

zombie4Image = loadImage('pics/zombies/zombie4.png');

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background("black");
   if (playerCount === 1 && gameType === "SinglePlayer") {
     game.update(1);
   }

  if (gameState === 1) {
     game.playOne();
     
  }

  //drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
