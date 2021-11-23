class Game {
  constructor() {
   this.leftKeyActive = false;
   this.playerMoving = false;
   this.life = 5;
  }

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  start() {

    form = new Form();
    form.display();

    player = new Player();
    playerCount = player.getCount();

    myplayer=createSprite(width/2,height/2);
    mynation=createSprite(width/2,height/2);

    biomeS = createSprite(200,200,50,50);
    biomeS.visible = false;


    heart = createSprite(120,20);
    heart.visible = true;
    heart.addImage("heart",heartImg);
    heart.scale = 0.08;

    zombieG = new Group();
    medicineG = new Group();

     

      for(var i=0; i<400;i=i+30){
        medicine = createSprite(400+i,150,20,20);
        //medicine.x = 70+i
        medicine.addImage("medicine",medicineImg);
        medicine.scale = 0.3;
        medicineG.add(medicine)
      }

      for(var i=0; i<400;i=i+30){
        medicine = createSprite(800+i,320,20,20);
        //medicine.x = 70+i
        medicine.addImage("medicine",medicineImg);
        medicine.scale = 0.3;
        medicineG.add(medicine)
      }

      for(var i=0; i<250;i=i+40){
        medicine = createSprite(1150,40+i,20,20);
        //medicine.x = 70+i
        medicine.addImage("medicine",medicineImg);
        medicine.scale = 0.3;
        medicineG.add(medicine)
      }

     
     
 
  }

  playOne(){
    background(trackImage);
    form.hide();

    Player.getPlayersInfo();
   

    if(allPlayers != undefined ){
      //imageMode(CENTER);
      //image(trackImage,width/2,height/2,width-10,height-20);

      fill("white");
      textSize(15)
      text(life,117,60);

      for(var plr in allPlayers){

        if(player.name==="1"){
          myplayer.addImage("soldier",soldier2Img);
          myplayer.scale = 0.3;
        }

        if(player.name==="2"){
          myplayer.addAnimation("woodcutter",woodcutter2Img);
          myplayer.scale = 0.6;
        }

        if(player.name==="3"){
          myplayer.addAnimation('fisherman',fisherman2Img);
          myplayer.scale = 0.6;
        }

        //displaY nation
        if(player.nation==="INDIA"){
          mynation.addImage("mynation",indiaImg);
          mynation.scale = 0.03;
        }


        console.log(player.name);
        //console.log(allPlayers[plr].positionX);
        console.log(myplayer);

        var x = allPlayers[plr].positionX;
        var y = allPlayers[plr].positionY;

        myplayer.position.x = x;
        myplayer.position.y = y;

        mynation.position.x = x-50;
        mynation.position.y = y;

       //image(myname,x,y,10,10);

        this.handlePlayerControls();
       
        //Display Lifes
        if(myplayer.isTouching(zombieG)){
          zombieG.destroyEach();
          life = life-1;
          if(life===0){
            this.gameOver();
          }
        }


        myplayer.isTouching(medicineG,this.destroyM);

        var rand = Math.round(Math.random(1,4));
        console.log(rand);

        if(frameCount%80===0){
          if(rand===1){
            this.spawnZombies(zombie1Image,0.3);
            this.biomeDisplay(biome1Img,0.3);
            
          }
          else if(rand===2){
            this.spawnZombies(zombie2Image,0.3);
            this.biomeDisplay(biome2Img,0.3);
          }
          else if(rand===3){
            this.spawnZombies(zombie3Image,0.3);
            this.biomeDisplay(biome3Img,0.3);
          }
          else{
            this.spawnZombies(zombie4Image,0.3);
          }
          
        }    
        
        if(myplayer.isTouching(biomeS)){
          biomeS.position.x = 900;
          biomeS.position.y = 600;
          biomeS.addImage("biome",biome2Img);
          if(myplayer.isTouching(biomeS)){
              biomeS.destroy();
              this.gameWin();
          }
        }
      }
      drawSprites();
    }
   
  }

  destroyM(myplayer,medicine){
    medicine.destroy();
  }

  biomeDisplay(biomeImage,scale){
    biomeS.addImage("biome",biomeImage);
    biomeS.visible = true;
    biomeS.scale = scale;
  }

  spawnZombies(spriteImage,scale){
    zombie1 = createSprite(Math.round(random(width/3-200,width-100)),height/3-200,50,50);
    zombie1.y = Math.round(random(height/3-100,height-100))
    zombie1.addImage(spriteImage);
    zombie1.scale = scale;
    zombieG.add(zombie1);

    if(zombie1.x>width/2){
      zombie1.velocityX = -5;
    }

    if(zombie1.x<width/2){
      zombie1.velocityX = 5;
    }

  }


  handlePlayerControls() {
    if (keyDown(UP_ARROW)) {
      player.positionY -= 10;
      player.update();
    }

    if (keyDown(LEFT_ARROW)) {
      player.positionX -= 5;
      player.update();
    }

    if (keyDown(DOWN_ARROW)) {
      player.positionY += 5;
      player.update();
    }

    if (keyIsDown(RIGHT_ARROW)) {
      player.positionX += 5;
      player.update();
    }
  }


  gameWin() {
    swal({
      title: `Game Over`,
      text: "You Won...Congracts!!!",
      imageUrl:
        "pics/gold.png",
      imageSize: "100x100",
      confirmButtonText: "Thanks For Playing"
    });
  }
  function(isConfirm) {
    if (isConfirm) {
      location.reload();
    }
  }

  gameOver() {
    swal({
      title: `Game Over`,
      text: "Soryy..You Lost!!!",
      imageUrl:
        "pics/Sademo.png",
      imageSize: "100x100",
      confirmButtonText: "Thanks For Playing"
    });
  }
  function(isConfirm) {
    if (isConfirm) {
      location.reload();
    }
  }


}
