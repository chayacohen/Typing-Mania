//attempted to make a explosion but was not able to fully get it done so not using for now
//hopefully will be able to implement later. 

class Particle {
    constructor(word, start) {
        this.pos = this.randomPos();
        if (start) {
            this.vel = [0, -10]
            console.log(this.vel)
        }
        else {
            this.vel = this.randomVec();
        }
        this.word = word 
        this.acc = [0, 0]
        this.ctx = word.ctx
        this.canvas = word.canvas
    }

    randomPos() {
        const x = Math.random() * ((this.word.pos[0] + 300 ) - (this.word.pos[0] - 300)) + 300;
        const y = Math.random() * ((this.word.pos[1] + 100) - (this.word.pos[1] - 100)) + 100;
        return [x,y]
    }

    update() {
        if (!this.start) {
            this.vel = [this.vel[0], this.vel[1] * 0.85]
        }
        this.acc = [0, 0.2]
        this.vel = [(this.vel[0] + this.acc[0]), (this.vel[1] + this.acc[1])];
        this.pos = [(this.pos[0] + this.vel[0]), (this.pos[1] + this.vel[1])];
        this.acc = [0,0];
    }

    draw() {
        this.ctx.beginPath();
        console.log("draw-particle") 
        this.ctx.arc(this.pos[0], this.pos[1], 10, 0, 2 * Math.PI);
        this.ctx.fillStyle = "red";
        this.ctx.fill();
        this.ctx.closePath();
    }

    randomVec() {
        const deg = 2 * Math.PI * Math.random();
        return this.scale([Math.sin(deg), Math.cos(deg)], 10);
    }
    // Scale the length of a vector by the given amount.
    scale(vec, m) {
        return [vec[0] * m, vec[1] * m];
    }
}

export default Particle; 