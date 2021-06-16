class Form{
    constructor(){
         this.input=createInput("name")
        this.button=createButton("Red Button")
        this.greeting=createElement("h2")
    }
   hide(){
this.input.hide()
this.button.hide()
this.greeting.hide()
   }
    display(){
        var title=createElement("h1")
        title.html("Car Racing Game")
        title.position(windowWidth/2,20)

       
       this.input.position(windowWidth/2,windowHeight/2)

        
        this.button.position(windowWidth/2,windowHeight/2+50)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name=this.input.value()
            playerCount=playerCount+1
            player.index=playerCount
            player.update()
            player.updatePlayerCount(playerCount)
            this.greeting.html("hello "+player.name)
            this.greeting.position(windowWidth/2,windowHeight/2)
        })
        
    }
}