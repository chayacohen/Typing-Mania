import MovingWord from "./moving_word.js";
import Dictionary from "./dictionary.js";
import Explosion from "./explosion.js"
class Game {

    constructor(canvas, ctx) {
        this.dictionary = new Dictionary(); 
        this.canvas = canvas;
        this.ctx = ctx;
        this.countdownNum = 3
        this.words = {};
        this.missedWords = [];
        this.typedWords = [];
        this.inPauseWords = []; 
        // this.explosions = []; 
        this.interval = 5000; 
        this.first = 1; 
        this.level = 1; 
        this.vel = 1;
        this.lives = 3; 
        this.total = 0; 
        this.streak = 0; 
        this.pause = false; 
        this.countdown = this.countdown.bind(this)(); 
        setTimeout( () => {
            this.draw.bind(this)();}, 4000);
        this.bindTypingEvent();
        this.pauseEvent(); 
    }

    incrementLevel() {
        if (this.total !== 0 && this.total % 15 === 0) {
            this.level += 1; 
            this.vel += 0.4;
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
                if (!this.pause) {
                    const word = this.dictionary.randomWord()
                    const movingWord = new MovingWord(word, this.canvas, this.ctx, this.vel)
                    this.words[word] = movingWord; 
    
                }
            }, this.interval);
    };

    update(word) {
        this.missedWords.push(word);
        this.lives -= 1;
        this.streak = 0;
        delete (this.words[word.word]);
        // this.explosions.push(new Explosion(word))
    };

    // handleExplosionDraw(explosion) {
    //     explosion.draw(); 
    //     explosion.update(); 
    // }


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
                this.updateBoard();
                words.forEach (word => {
                    this.handleWordDraw(word)
                })
                this.inPauseWords.forEach(word => {
                    word.drawGreen(); 
                })
                // this.explosions.forEach(explosion => {
                //     this.handleExplosionDraw(explosion);
                // })
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
                    const gameOverModal = document.querySelector(".game-over-modal"); 
                    gameOverModal.style.display = "block";

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
                    const movingWord = this.words[word];
                    delete (this.words[word]);
                    this.inPauseWords.push(movingWord); 
                    const i = this.inPauseWords.indexOf(movingWord);
                    setTimeout(() => { delete this.inPauseWords[i]
                    }, 300);
                    this.firstWord();
                    typingArea.value = ""
                }
            }
            else {
                e.preventDefault();
            }
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
        if (this.lives === 1) {
            liveOnBoard.style.color = "red"; 
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

    pauseHandler(e) {
        const pauseButton = document.getElementById('pause');
        const pauseModal = document.querySelector(".pause-modal");
        if (e.target === pauseButton) {
            if (this.pause === false) {
                this.pause = true; 
                this.draw.bind(this)();
                pauseModal.style.display = "block"
            }
        };
    }

    pauseEvent() {
        addEventListener('click', this.pauseHandler.bind(this))
    }
}

export default Game; 