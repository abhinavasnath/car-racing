class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      //var playerCountRef=await database.ref('playerCount').once("value");
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide();
    textSize(30);
    text("gameStart",120,100);
    Player.getPlayerInfo();
    if(allPlayers!==undefined){
      if(plr==="player"+player.index)
      fill("red")
      else
      fill("black")
      var displayPosition=130;
      displayPosition+=20;
      textSize(15);
      text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,display_position);
    }
  }
}
