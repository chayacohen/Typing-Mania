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
    };

    eventListeners() {
        const instructionsButton = document.querySelector("#instructions")
        const modal = document.querySelector(".modal");
        const welcomeModal = document.querySelector(".welcome-modal")
        const pauseModal = document.querySelector(".pause-modal")
        const gameOverModal = document.querySelector(".game-over-modal")
        const closeButton = document.querySelector(".close-button");
        const welcomeCloseButton = document.querySelector(".welcome-close-button")
        const pauseCloseButton = document.querySelector(".pause-close-button")
        const gameCloseButton = document.querySelector(".game-close-button")

        document.addEventListener("click", (event) => {
            if (event.target === instructionsButton)
            modal.style.display = "block";
        });

        document.addEventListener("click", (event) => {
            if(event.target === closeButton) {
                modal.style.display = "none"};

            if (event.target === welcomeCloseButton) {
                welcomeModal.style.display = "none"
            };
            if (event.target === pauseCloseButton) {
                pauseModal.style.display = "none"
            };
            if (event.target === gameCloseButton) {
                gameOverModal.style.display = "none"
            };
        });

        document.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.style.display = "none" };
            if (event.target === welcomeModal) {
                welcomeModal.style.display = "none"
            };
            if (event.target === pauseModal) {
                pauseModal.style.display = "none"
            };
            if (event.target === gameOverModal) {
                gameOverModal.style.display = "none"
            };
        });
    };
}

export default GameView;  