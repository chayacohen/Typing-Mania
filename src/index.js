import GameView from './scripts/game_view.js';
import Game from './scripts/game.js';



document.addEventListener("DOMContentLoaded" , () => {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext('2d');
    const gameview = new GameView(canvas, ctx);
    ctx.font = "normal 100px Monospace";
    ctx.fillStyle = "black";
    ctx.fillText("WELCOME TO", (canvas.width/3), (canvas.height / 2.6));
    ctx.fillText("TYPING MANIA", (canvas.width / 3.15), (canvas.height / 1.6))
    // const game = new Game(canvas, ctx)

    const playButton = document.getElementById('play'); 
    const resumeGameButton = document.querySelector("#resume-game-button");
    const pauseModal = document.querySelector(".pause-modal")
    const newGameButton = document.querySelector("#new-game-button")
    const gameOverModal = document.querySelector(".game-over-modal")
    let gameState = false; 
    let game; 
    addEventListener('click', (event) => {
        if (event.target === playButton && !gameState)
            {   
                gameState = true; 
                game = new Game(canvas, ctx);
                return game;
        }
        else if ((event.target === playButton || event.target === newGameButton) && gameState && game.lives === 0) {
            gameOverModal.style.display = "none"
            game = new Game(canvas, ctx); 
            return game; 
        }
        else if ((event.target === playButton || event.target === resumeGameButton) && gameState)
            { 
                if (game.pause === true) {
                    game.pause = false; 
                    pauseModal.style.display = "none";
                    return game.draw(); 
                }
        }
        });

    const restartButton = document.getElementById('restart') 
    addEventListener('click', (event) => {
        if (event.target === restartButton && gameState) {
            game.pause = true;
            ctx.clearRect(0,0, canvas.width, canvas.height);
            game = new Game(canvas, ctx); 
            return game; 
        }
    })

    // only for testing, remove for development
    window.canvas = canvas; 
    window.ctx = ctx; 
    window.gameview = gameview; 
    window.game = game;
    // window.playButton = playButton; 
});


    // https://random-word-api.herokuapp.com/word?number=10&swear=0