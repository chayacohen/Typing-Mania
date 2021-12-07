import GameView from './scripts/game_view.js';
import Game from './scripts/game.js';



document.addEventListener("DOMContentLoaded" , () => {
    const canvas = document.querySelector("canvas")
    const ctx = canvas.getContext('2d')
    const gameview = new GameView(canvas, ctx)
    // const game = new Game(canvas, ctx)

    const playButton = document.getElementById('play'); 
    let gameState = false; 
    let game; 
    addEventListener('click', (event) => {
        if (event.target === playButton && !gameState)
            {   
                gameState = true; 
                game = new Game(canvas, ctx);
                return game;
        }
        else if (event.target === playButton && gameState && game.lives === 0) {
            game = new Game(canvas, ctx); 
            return game; 
        }
        else if (event.target === playButton && gameState)
            { 
                if (game.pause === true) {
                    game.pause = false; 
                    game.play();
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