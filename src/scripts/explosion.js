import Particle from "./particle.js"


class Explosion {
    constructor(word) {
        this.particle = new Particle(word, true)
        this.exploded = false; 
        this.word = word
        this.particles = []; 
    }

    update() {
        if (!this.exploded) {
            this.particle.update(); 
            this.particle.draw(); 
            debugger
            if (this.particle.pos === [(this.word.pos[0] + 5), (this.word.pos[1] + 5)]) {
                this.particle = null; 
                this.exploded = true; 
                this.explode(); 
                debugger
            }
        }
        this.particles.forEach(particle => {
            particle.update();
        }) 
    }

    explode() {
        for (let i = 0; i < 50; i++) {
            const p = new Particle(this.word, false); 
            this.particles.push(p); 
            this.draw(); 
        }
    }

    draw() {
        if (this.particle) {
            this.particle.draw();
        }
        this.particles.forEach(particle => {
            particle.draw(); 
        })
    }
}

export default Explosion;