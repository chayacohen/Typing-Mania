import Dictionary from './dictionary.js'

class GameView {
    constructor(canvas, ctx) {
        this.canvas = canvas
        this.ctx = ctx
        this.dictionary = new Dictionary()
        this.fillScreen()
    }

    fillScreen() {
        this.canvas.width = window.innerWidth; 
        this.canvas.height = window.innerHeight * .8;
    } 
}

export default GameView;  