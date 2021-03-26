class Quiz  {
    constructor () {
        
    }
    getstate() {
        database.ref("gameState").on('value', (data)=>{
            gameState = data.val()
        })
    }

    update(state) {
        database.ref("/").update({
            gameState : state
        })
    }

start () {
    if(gameState === 0) {
        player = new Player();
        question = new Question();
        player.getCount();
        question.display();
    }
}

play() {
    question.hide();
}
}