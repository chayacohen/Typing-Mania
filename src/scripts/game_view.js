import Dictionary from './dictionary.js'

class GameView {
    constructor(canvas, ctx) {
        this.canvas = canvas
        this.ctx = ctx
        this.dictionary = new Dictionary()
        this.fillScreen();
        this.eventListeners(); 
    }

    fillScreen() {
        this.canvas.width = window.innerWidth; 
        this.canvas.height = window.innerHeight * .78;
    } 

    eventListeners() {
        const instructionsButton = document.querySelector("#instructions")
        const modal = document.querySelector(".modal");
        const closeButton = document.querySelector(".close-button");

        document.addEventListener("click", (event) => {
            if (event.target === instructionsButton)
            modal.style.display = "block"
        })

        document.addEventListener("click", (event) => {
            if(event.target === closeButton) {
                modal.style.display = "none"
            }
        })

        document.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.style.display = "none"
            }
        })
    }
}

export default GameView;  