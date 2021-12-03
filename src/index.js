import Game from './scripts/game.js';


document.addEventListener("DOMContentLoaded" , async () => {
    const game = new Game(); 
    const words = await game.words
    debugger
    window.game = game; 
    window.words = words;
});


    // https://random-word-api.herokuapp.com/word?number=10&swear=0