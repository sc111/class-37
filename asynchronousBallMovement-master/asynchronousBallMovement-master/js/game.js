class Game{
    constructor(){}


    getState(){
  var gameStateref = database.ref('gameState');
  gameStateref.on("value",function(data){
   gameState = data.val();
  })
    }

    update(state){
  database.ref('/').update({
      gameState:state
  })
    }
    start(){
 if(gameState === 0){
     player = new Player();
     player.getCount();
     form = new Form();
     form.display(); }
    }
  play(){
    form.hide();
    textSize(30);
    text("Game      Started",250,100)
    Player.getPlayerInfo();
  if(allPlayers !== undefined){
      var displayPosition = 150;

      for(var plr in allPlayers){
      if(plr === "player"+player.index)
      fill("red")
       else
      fill("black")
      displayPosition+=20
      textSize(15)
      text(allPlayers[plr].name+":"+allPlayers[plr].distance,150,displayPosition)
      }
    }
    if(keyIsDown(UP_ARROW)&& player.index!== null){
    player.distance+=50
    player.update();
    }
  }
}