class Dictionary {
       constructor () {
        // this.numWords = 0;
        this.words;
        this.generateRandomWords().then(payload => {
            this.words = payload;
        });
        // this.wordObject = this.randomWord.bind(this)();
        // ['hello', 'world', 'hoping', 'this', 'works']
        // this.generateRandomWords.bind(this)();
    };


 generateRandomWords()  {
     return fetch("https://random-word-api.herokuapp.com/word?number=5000&swear=0")
    .then((response) => response.json())
    .then((data) => data)
    };

randomWord() {
        const word = this.words.shift();
            // % this.words.length];
        // this.numWords += 1;
        return word;
    };
}

 export default Dictionary; 