class MovingWord {
    constructor(word, canvas, ctx, vel) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.pos = this.randomStartingPosition(); //make this random starting position 
        this.vel = vel;
        this.word = word;
        // random starting position
    }

    randomStartingPosition() {
        const y = Math.random() * ((this.canvas.width - 200) - 150) + 150; 
        return [y, 0]
    }

    draw() {
        // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.heigh)
        this.ctx.beginPath();
        this.ctx.font = 'normal 40px Monospace';
        this.ctx.fillStyle = 'black';
        this.ctx.fillText(this.word, this.pos[0], this.pos[1]);
        this.ctx.closePath();
    }

    drawRed() {
        // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.heigh)
        this.ctx.beginPath();
        this.ctx.font = 'normal 40px Monospace';
        this.ctx.fillStyle = '#eb6060';
        this.ctx.fillText(this.word, this.pos[0], this.pos[1]);
        this.ctx.closePath();
    }

    move() {
        const newPos = [this.pos[0], this.pos[1] += this.vel]
        this.pos = newPos 
    }

    redCollisionDetection() {
        const canvasY = (this.canvas.height - 250)
        const wordY = this.pos[1]
        return (canvasY <= wordY);
    }

    missedCollisionDetection() {
        const canvasY = (this.canvas.height + 15)
        const wordY = this.pos[1]
        return (canvasY === wordY);
    }
}

export default MovingWord; 