class Form {
  constructor() {
    this.playButton = createButton("Play");
    this.titleImg = createImg("pics/bg.png", "game title");
    this.title = createElement('h1');
    this.singlePlayerImg = createImg("pics/solo.png", "game title");
    this.singlePlayer = createButton('Single Player');
    this.multiPlayerImg = createImg("pics/duo.png", "game title");
    this.multiPlayer = createButton('Multi Player')
    this.greeting = createElement("h2");
    this.question = createElement('h2');
    this.question2 = createElement('h2');

    this.player1 = createImg('pics/soldier.png');
    this.player2 = createImg('pics/fisherman.png');
    this.player3 = createImg('pics/woodcutter.png');

    this.input1 = createInput('ENTER PLAYER NUMBER');

    this.sP1 = createButton('1');
    this.sP2 = createButton('2');
    this.sP3  = createButton('3');

    this.start1 = createButton('GO');
    this.resetButton = createButton("");
    this.settingsButton = createButton("")

    this.countryTitle = createInput('Choose your country');
    this.cccOk = createButton("GO");
    this.usa = createButton("USA");
    this.korea = createButton("KOREA");
    this.india = createButton("INDIA");
    this.singapore = createButton("SINGAPORE");
    this.uk = createButton("GREAT BRITAIN");
    this.argentina = createButton("ARGENTINA");
    this.canada = createButton("CANADA");
    this.china = createButton("CHINA");
    this.russia = createButton("RUSSIA");
    this.japan = createButton("JAPAN");
    this.israel = createButton("ISRAEL");
    
    this.usaImg  = createImg('pics/usa.png');
    this.koreaImg  = createImg('pics/korea.jpg');
    this.indiaImg  = createImg('pics/india.png');
    this.singaporeImg  = createImg('pics/singapore.jpg');
    this.ukImg  = createImg('pics/uk.png');
    this.argentinaImg  = createImg('pics/argentina.jpg');
    this.canadaImg  = createImg('pics/canada.jpg');
    this.chinaImg  = createImg('pics/china.jpg');
    this.russiaImg  = createImg('pics/russia.png');
    this.japanImg  = createImg('pics/japan.png');
    this.israelImg  = createImg('pics/israel.jpg');
    this.cInput = createInput('ENTER YOUR NATION');

    this.biome1 = createImg('pics/city.png');
    this.biome2 = createImg('pics/desert.png');
    this.biome3 = createImg('pics/grass.png');
    this.biome4 = createImg('pics/snow.png');

    this.biomeOk = createButton('GO')
    this.bEnter = createInput('ENTER THE BIOME')

    this.b1 = createButton('1')
    this.b2 = createButton('2')
    this.b3 = createButton('3')
    this.b4 = createButton('4')
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.question.hide();
    this.singlePlayer.hide();

    this.player1.hide();
    this.player2.hide();
    this.player3.hide();
    this.question2.hide();
    this.input1.hide();
    this.start1.hide();
    this.sP1.hide();
    this.sP2.hide();
    this.sP3.hide();
    this.titleImg.hide();

  }

  display(){
    this.title.html('VIRUS CONTROL');
    this.title.position(width/2-125,40);
    this.title.size(900,900);
    this.titleImg.position(1, 1);
    this.titleImg.size(width,height)

    this.question.html('CHOOSE GAME TYPE');
    this.question.position(width/2-150,height/3);

    this.singlePlayer.position(width/3-50,height/2+100);
    this.singlePlayerImg.position(width/3-50,height/2-100);
    this.singlePlayerImg.size(150,150);

    this.multiPlayer.position(width/2+190,height/2+100);
    this.multiPlayerImg.position(width/2+200,height/2-100);
    this.multiPlayerImg.size(150,150);

    this.playButton.position(width / 2 - 90, height / 4);
    this.greeting.position(width / 2 - 300, height / 2 - 100);

    this.singlePlayer.class("customButton");
    this.multiPlayer.class("customButton");
    this.question.class("gameTitle");
    this.titleImg.class("gameTitle");
    this.title.class("gameTitle");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
    this.resetButton.class("resetButton");
    this.resetButton.position(width / 2 + 600, 70);

    this.settingsButton.class('settingButton');
    this.settingsButton.position(width/2+610,30);

    this.settingsButton.mousePressed(()=>{
      if(musicStatus===false){
        music.play();
        musicStatus = true;
      }
      else{
        music.stop();
        musicStatus = false;
      }
    })

    this.resetButton.mousePressed(()=>{
        database.ref('/').set({
              carsAtEnd:0,
              gameState:0,
              gameType:'',
              playerCount:0,
              players: {}
        })
    })

    
    this.singlePlayer.mousePressed(()=>{

        this.question.hide();

        this.singlePlayer.hide();
        this.singlePlayerImg.hide();
        this.multiPlayer.hide();
        this.multiPlayerImg.hide();

        this.usa.position(width/3-700,height/2+50);
        this.usa.class('customButton');
        this.usaImg.position(width/3-700,height/2-60)
        this.usaImg.size(190,100);

        this.korea.position(width/3-500,height/2+50);
        this.korea.class('customButton');
        this.koreaImg.position(width/3-490,height/2-60)
        this.koreaImg.size(160,100);

        this.india.position(width/3-300,height/2+50);
        this.india.class('customButton');
        this.indiaImg.position(width/3-290,height/2-60)
        this.indiaImg.size(160,100);
        
        this.singapore.position(width/3-100,height/2+50);
        this.singapore.class('customButton');
        this.singaporeImg.position(width/3-90,height/2-60)
        this.singaporeImg.size(160,100);
        
        this.uk.position(width/3+100,height/2+50);
        this.uk.class('customButton');
        this.ukImg.position(width/3+110,height/2-60)
        this.ukImg.size(160,100);

        this.argentina.position(width/3+300,height/2+50);
        this.argentina.class('customButton');
        this.argentinaImg.position(width/3+310,height/2-60)
        this.argentinaImg.size(150,100);

        this.canada.position(width/3+500,height/2+50);
        this.canada.class('customButton');
        this.canadaImg.position(width/3+510,height/2-60)
        this.canadaImg.size(150,75);

        this.china.position(width/3+700,height/2+50);
        this.china.class('customButton');
        this.chinaImg.position(width/3+710,height/2-60)
        this.chinaImg.size(150,75);

        this.russia.position(width/3+900,height/2+50);
        this.russia.class('customButton');
        this.russiaImg.position(width/3+910,height/2-60)
        this.russiaImg.size(150,75);

        this.japan .position(width/3+1100,height/2+50);
        this.japan .class('customButton');
        this.japanImg.position(width/3+1110,height/2-60)
        this.japanImg.size(150,75);

        this.israel .position(width/3+1300,height/2+50);
        this.israel .class('customButton');
        this.israelImg.position(width/3+1310,height/2-60)
        this.israelImg.size(150,75);

        this.cccOk.position(width/3+375,height/2+250)
        this.cccOk.class('customButton1');
        this.cccOk.size(50,50);

        this.cInput.class('customButton')
        this.cInput.position(width/2-90,height/2+140);

        this.cccOk.mousePressed(()=>{
            this.korea.hide();
            this.koreaImg.hide();
            this.uk.hide();
            this.ukImg.hide();
            this.india.hide();
            this.indiaImg.hide();
            this.usa.hide();
            this.usaImg.hide();
            this.israel.hide();
            this.israelImg.hide();
            this.japan.hide();
            this.japanImg.hide();
            this.canada.hide();
            this.canadaImg.hide();
            this.argentina.hide();
            this.argentinaImg.hide();
            this.singapore.hide();
            this.singaporeImg.hide();
            this.china.hide();
            this.chinaImg.hide();
            this.russia.hide();
            this.russiaImg.hide();
            this.cInput.hide();
            this.cccOk.hide();

            this.sP1.position(width/3-125,height/3+250);
            this.sP1.class('customButton');
            this.sP1.size(50,50);
      
            this.sP2.position(width/2+1,height/3+250);
            this.sP2.class('customButton');
            this.sP2.size(50,50);
      
            this.sP3.position(width/3+825,height/3+250);
            this.sP3.class('customButton');
            this.sP3.size(50,50);
      
            this.player1.position(width/3-250,height/3-25); 
            this.player1.size(300,300);
      
            this.player2.position(width/2-130,height/3-50); 
            this.player2.size(300,300);
      
            this.player3.position(width/2+300,height/3-50); 
            this.player3.size(300,300);
      
            this.question2.class('gameTitle')
            this.question2.html('CHOOSE A SINGLE PLAYER');
            this.question2.position(width/2-150,height/3-100);
      
            this.input1.class('customButton')
            this.input1.position(width/2-75,height/2+200);
      
            this.start1.class('customButton1');
            this.start1.position(width-300,height/2+200);
            this.start1.size(50,50);

            this.start1.mousePressed(()=>{
              this.sP1.hide();
              this.sP2.hide();
              this.sP3.hide();
              this.player1.hide();
              this.player2.hide();
              this.player3.hide();
              this.question2.hide();
              this.input1.hide();
              this.start1.hide();

                playerCount = playerCount + 1;
                gameType = "SinglePlayer";
                player.updateGameType(gameType);
                console.log(playerCount);
                player.name = this.input1.value();
                // player.biomeN = this.bEnter.value();
                player.nation = this.cInput.value();
                player.index = playerCount;
                player.addPlayer();
                player.updateCount(playerCount);
                this.hide();
          })
       })

    })
    
     
  }
    
}

