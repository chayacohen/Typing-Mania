import MovingWord from "./moving_word.js";
import Dictionary from "./dictionary.js";

class Game {
    constructor(canvas, ctx) {
        this.dictionary =  new Dictionary(); 
        this.canvas = canvas;
        this.ctx = ctx 
        this.words =  {};
        // {pure: new}; 
        this.missedWords = [];
        // this.countdown();
        // setTimeout(() => {
            this.play();
        // }, 3000);
        setInterval(() => {this.draw()
        }, 20);
        // call countdown function 3-2-1, instead of setTimeout and then call this.play; 
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

        // countdown() {
        //     let num = 3
        //     while (num > 0) {
        //         setInterval ( () => {
        //             this.ctx.beginPath();
        //             this.ctx.font = 'normal 200px Monospace';
        //             this.ctx.fillStyle = 'black';
        //             this.ctx.fillText(num, 200, 200);
        //             this.ctx.closePath();
        //             this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); 
        //         }, 1000); 
        //         num++; 
        //     }
        // }

    // pause() {

    // }

    // restart() {

    // }
}

export default Game; 