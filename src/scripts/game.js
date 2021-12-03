class Game {
       constructor () {
        this.words =  this.generateWordsArray()
        this.numWords = 0
        this.randomWord()
    }


 generateRandomWords()  {
    return fetch("https://random-word-api.herokuapp.com/word?number=5000&swear=0")
    .then((response) => response.json())
    .then((data) => {
        return data
    });  
};

async generateWordsArray() {
        const array = await this.generateRandomWords(); 
        return array;
    };

    randomWord() {
        const word = this.words[this.numWords]
        this.numWords += 1
        return word
    }
}



 export default Game; 