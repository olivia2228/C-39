
var db
var gameState=0,playerCount,form,player,game
var allPlayers
var car1,car2,car3,car4,cars

function setup(){
    createCanvas(windowWidth,windowHeight);
    db=firebase.database()
    game=new Game()
    game.getState()
    game.start()

}

function draw(){
   if(playerCount===4){
      game.updateState(1)

   }
   if(gameState===1){
       clear()
       game.play()
   }
}