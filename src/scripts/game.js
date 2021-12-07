import MovingWord from "./moving_word.js";
import Dictionary from "./dictionary.js";
class Game {

    constructor(canvas, ctx) {
        this.dictionary = new Dictionary(); 
        this.canvas = canvas;
        this.ctx = ctx;
        this.countdownNum = 3
        this.words = {};
        this.missedWords = [];
        this.typedWords = [];
        this.interval = 5000; 
        this.first = 1; 
        this.level = 1; 
        this.vel = this.level 
        this.lives = 3; 
        this.total = 0; 
        this.streak = 0; 
        this.pause = false; 
        this.countdown = this.countdown.bind(this)(); 
        setTimeout( () => {
            this.draw.bind(this)();}, 4000);
        this.bindTypingEvent();
        this.pauseEvent(); 
        // this.restart();
    }

    incrementLevel() {
        if (this.total % 15 === 0) {
            this.level += 1; 
            this.interval -= 500; 
        }
    }

    firstWord() {
        if (this.first === 1 || Object.keys(this.words).length === 0) {
            const word = this.dictionary.randomWord()
            const movingWord = new MovingWord(word, this.canvas, this.ctx, this.vel)
            this.words[word] = movingWord;
            this.first += 1;
        }
    }
    play() {
            const id = setInterval(() => {
                const word = this.dictionary.randomWord()
                const movingWord = new MovingWord(word, this.canvas, this.ctx, this.vel)
                this.words[word] = movingWord; 
                if (this.pause) {
                    clearInterval(id);
                }
            }, this.interval);
    };

    update(word) {
        this.missedWords.push(word);
        this.lives -= 1;
        this.streak = 0;
        delete (this.words[word.word]);
    };


    handleWordDraw(word) {
        if (word.redCollisionDetection() === true) {
            if (word.missedCollisionDetection() === true) {
                this.update(word);
            }
            else {
                word.drawRed();
                word.move();
            }
        }
        else {
            word.draw();
            word.move();
        }    
    };

    draw() {
            let myReq; 
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            const words = Object.values(this.words);
            if (this.lives > 0 && this.pause === false) {
                // this.pause();
                this.updateBoard();
                words.forEach (word => {
                    this.handleWordDraw(word)
                })
                myReq = requestAnimationFrame(this.draw.bind(this))
            }
            else if (this.lives <= 0) {
                    cancelAnimationFrame(myReq)
                    words.forEach(word => {
                        if (word.redCollisionDetection() === true) {
                                word.drawRed()
                                word.move()
                            }
                        else {
                            word.draw()
                            word.move()
                        }; 
                    })

                    //game over popup 

                }
            else {
                cancelAnimationFrame(myReq);
            }
    }; 

    updateBoard() {
        this.updateStreakOnBoard(); 
        this.updateTotalOnBoard(); 
        this.updateLevelOnBoard(); 
        this.updateLivesOnBoard(); 
    }

    typingHandler(e) {
        const typingArea = document.getElementsByClassName("typing-area")[0];
        let word = typingArea.value;
        if (e.key === 'Enter' && e.target === typingArea) {
            e.preventDefault(); 
            if (this.pause === false) {
                if (this.words[word]) {
                    this.total += 1;
                    this.streak += 1;
                    this.updateStreakOnBoard(); 
                    this.updateTotalOnBoard();
                    this.typedWords.push(word);
                    this.incrementLevel();
                    this.updateLevelOnBoard();
                    delete (this.words[word]);
                    this.firstWord();
                    typingArea.value = ""
                }
            }
            else {
                e.preventDefault();
            }
            // else shake typing box;
        };
    }
    
    bindTypingEvent() {
       document.addEventListener('keypress', this.typingHandler.bind(this), true)
    }

    updateLevelOnBoard() {
        const levelOnBoard = document.getElementById("level")
            levelOnBoard.innerText = `LEVEL: ${this.level}`
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
                this.firstWord();
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
        this.countdownNum -= 1;
    };


    // restartHandler(e) {
    //     const restartButton = document.getElementById('restart')
    //     if (e.target === restartButton) {
    //         this.dictionary = new Dictionary(); 
    //         this.countdownNum = 3; 
    //         this.words = {}; 
    //         this.missedWords = []; 
    //         this.typedWords = []; 
    //         this.interval = 5000;
    //         this.first = 1; 
    //         this.level = 1; 
    //         this.vel = 1; 
    //         this.lives = 3; 
    //         this.total = 0; 
    //         this.streak = 0;
    //         this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height) ;
    //         this.countdown; 
    //         setTimeout( () => {
    //             this.draw.bind(this)();
    //         }, 4000);
    //     }
    // }


    // restart() {
    //     addEventListener('click', this.restartHandler.bind(this));
    // }

    pauseHandler(e) {
        const pauseButton = document.getElementById('pause'); 
        if (e.target === pauseButton) {
            if (this.pause === false) {
                this.pause = true; 
                this.draw.bind(this)();
            }
        };
    }

    pauseEvent() {
        addEventListener('click', this.pauseHandler.bind(this))
    }
}

    //endGame () {

    // }

export default Game; 