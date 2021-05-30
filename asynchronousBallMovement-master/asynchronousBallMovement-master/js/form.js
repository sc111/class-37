class Form{
    constructor(){
    this.title = createElement('h2');
    this.input = createInput("name");
    this.button = createButton("play");
    this.greeting =createElement('h3');

    }
    hide(){
    this.button.hide();
    this.title.hide();
    this.input.hide();
    this.greeting.hide();
    }

    display(){
this.title.html("aventaRace")
this.title.position(500,150);

this.input.position(500,250)
this.button.position(600,400)

this.button.mousePressed(()=>{
    this.input.hide()
    this.button.hide()
    player.name = this.input.value()
    playerCount+=1;
    player.index = playerCount;
    player.update();
   player.updateCount(playerCount);
   this.greeting.html("Hi!!!!!!!!!!!!! "+player.name)
   this.greeting.position(500,300);
})
    }
}