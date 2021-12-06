import Dictionary from './scripts/dictionary.js';
import GameView from './scripts/game_view.js';
import MovingWord from './scripts/moving_word.js';
import Game from './scripts/game.js';



document.addEventListener("DOMContentLoaded" , () => {
    // const dictionary = new Dictionary(); 
    // const words =  dictionary.words;
    // const word = dictionary.randomWord();
    const canvas = document.querySelector("canvas")
    const ctx = canvas.getContext('2d')
    // const typingArea = document.querySelector(".typing-area");
    const gameview = new GameView(canvas, ctx)
    // const movingWord = new MovingWord('hello', canvas, ctx)
    const game = new Game(canvas, ctx);
    // game.play();


    // only for testing, remove for development
    // window.dictionary = dictionary; 
    // window.words = words;
    // window.word = word;
    window.canvas = canvas; 
    window.ctx = ctx; 
    window.gameview = gameview; 
    window.game = game;
    // window.movingWord = movingWord; 
    // window.movingWord = movingWord;  

});


    // https://random-word-api.herokuapp.com/word?number=10&swear=0