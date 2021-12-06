import MovingWord from "./moving_word.js";
import Dictionary from "./dictionary.js";

class Game {
    constructor(canvas, ctx) {
        this.dictionary =  new Dictionary(); 
        this.canvas = canvas;
        this.ctx = ctx 
        this.words =  {};
        this.missedWords = [];
        this.countdown();
        setInterval(() => {this.draw()
        }, 20);
    }

    play() {
        setInterval(() => {
            const word = this.dictionary.randomWord()
            const movingWord = new MovingWord(word, this.canvas, this.ctx)
            this.words[word] = movingWord; 
        }, 5000);}

    draw() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            const words = Object.values(this.words)
            words.forEach (word => {
                word.draw()
                word.move()
            })
        }; 

    countdown() {
        let num = 3 
        let id = setInterval ( () => {
            if (num === 0) {
                clearInterval(id);
            }
            else {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.ctx.beginPath();
                this.ctx.font = 'normal 200px Monospace';
                this.ctx.fillStyle = 'black';
                this.ctx.fillText(num, 200, 200);
                this.ctx.closePath();
                console.log(num)
                num--;}
        }, 1000);
        
        this.play();
        };
}
    // pause() {

    // }

    // restart() {

    // }

export default Game; 