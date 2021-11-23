class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
    this.gameType = null;
    this.biomeN = null;
    this.nation = null;
  }

  addPlayer() {
    var playerIndex = "players/player" + this.index;

    if (this.index === 1) {
      this.positionX = width / 2 - 500;
      this.positionY = height-100;
    } else {
      this.positionX = width / 2 + 100;
    }

    database.ref(playerIndex).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY,
      biomeN: this.biomeN,
      nation: this.nation,

    });
  }

  getGameType() {
    var gameTypeRef = database.ref("gameType");
    gameTypeRef.on("value", data => {
      gameType = data.val();

    });
  }

  updateGameType(type) {
    database.ref("/").update({
      gameType: type,
    });
  }

  // getgameInfo(){
  //   var gameInfoRef = database.ref("gameInfo");
  //   gameInfoRef.on("value",data=>{
  //     nation: this.nation;

  //   })
  // }

  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val();

    });
  }

  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }

  update() {
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).update({
      positionX: this.positionX,
      positionY: this.positionY
    });
  }

  static getPlayersInfo() {
    var playerInfoRef = database.ref("players");
    playerInfoRef.on("value", data => {
      //info of all players from database in read and stored in allPlayers variable
      allPlayers = data.val();
    });
  }
}
