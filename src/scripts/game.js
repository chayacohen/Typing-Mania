import MovingWord from "./moving_word.js";
import Dictionary from "./dictionary.js";

class Game {
    constructor(canvas, ctx) {
        this.dictionary =  new Dictionary(); 
        this.canvas = canvas;
        this.ctx = ctx;
        this.countdownNum = 3
        this.words = {};
        this.missedWords = [];
        this.typedWords = []; 
        this.lives = 3; 
        this.total = 0; 
        this.streak = 0; 
        this.countdown.bind(this)(); 
        setTimeout( () => {
            this.draw.bind(this)();}, 4000);
        this.bindTypingEvent(); 
    }

    play() {
        setInterval(() => {
            const word = this.dictionary.randomWord()
            const movingWord = new MovingWord(word, this.canvas, this.ctx)
            this.words[word] = movingWord; 
        }, 5000);
    };

    draw() {
            let myReq; 
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            const words = Object.values(this.words)
            if (this.lives >= 0) {
                words.forEach (word => {
                        if (word.redCollisionDetection() === true) {
                            if (word.missedCollisionDetection() === true) {
                                this.missedWords.push(word); 
                                this.lives -=1
                                this.streak = 0
                                delete (this.words[word.word])
                                this.updateLivesOnBoard()
                                this.updateStreakOnBoard()
                            }
                            else {
                                word.drawRed()
                                word.move()
                            }
                        }
                        else {
                            word.draw()
                            word.move()
                        }
                })
                myReq = requestAnimationFrame(this.draw.bind(this))
                // debugger
            }
            else {

                cancelAnimationFrame(myReq)
            }; 
    }; 

    typingHandler(e) {
        const typingArea = document.querySelector(".typing-area");
        let word = typingArea.value;
        if (e.key === 'Enter' && e.target === typingArea) {
            e.preventDefault(); 
            if (this.words[word]) {
                this.total += 1;
                this.streak += 1;
                this.updateStreakOnBoard(); 
                this.updateTotalOnBoard();
                this.typedWords.push(word);
                delete (this.words[word]);
                typingArea.value = ""
            }
            // else shake typing box;
        };
    }
    
    bindTypingEvent() {
       document.addEventListener('keypress', this.typingHandler.bind(this), true)
    }



    updateLivesOnBoard() {
        const liveOnBoard = document.getElementById("lives")
        if (this.lives >= 0) {
            liveOnBoard.innerText = `LIVES: ${this.lives}`
        }
    }

    updateStreakOnBoard() {
        const streakOnBoard = document.getElementById('streak'); 
        streakOnBoard.innerText = `STREAK: ${this.streak}`; 
    }

    updateTotalOnBoard() {
        const totalOnBoard = document.getElementById('total');
        totalOnBoard.innerText = `TOTAL: ${this.total}`;
    }

        //3,2,1 not showing on canvas but is showing in console

     countdown() {
         let id = setInterval( () => {
             if (this.countdownNum > 0) {
                 this.drawCountdownNum()} 
            else {
                clearInterval(id)
                this.play();
            }
        }, 1000); 
        };

    drawCountdownNum() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.beginPath();
        this.ctx.font = "normal 200px Monospace";
        this.ctx.fillStyle = 'black';
        this.ctx.fillText(this.countdownNum, (this.canvas.width / 2), (this.canvas.height / 2));
        this.ctx.closePath();
        console.log(this.countdownNum);
        this.countdownNum -= 1;
    };
     

}
    // pause() {

    // }

    // restart() {

    // }

export default Game; 