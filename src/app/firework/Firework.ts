import p5 from 'p5';
import Particle from './Particle';
import { Style } from './style.model';

class Firework {
    private p: Particle;
    private explosed: boolean = false;
    private particles: Particle[] = new Array(100);

    constructor(private p5: p5, x: number, y: number, private style: object = {}) {
        this.p = new Particle(this.p5, x, y);
    }

    fire() {

    }

    explode() {
        const c = this.getRandomInt(3);
        const style = new Style();
        style.rgb = '255, 255, 255';
        style.changeRgb = c;
        style.type = ['1'];

        if (this.getRandomInt(5) > 3) {
            style.type = ['2'];
        }

        for (let i = 0; i < this.particles.length; i++) {
            const p = new Particle(this.p5, this.p.pos.x, this.p.pos.y, true, style
                )
            this.particles[i] = p;
        }
    }

    done() {
        if (this.explosed && this.particles.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
      

    update(force: p5.createVector) {

        if (!this.explosed) {
            this.p.applyForce(force);
            this.p.update();

            // to the top
            if (this.p.vel.y >= 0) {
                this.explosed = true;
                this.explode()
            }
        } else {
            this.particles.forEach((p, i) => {
                p.applyForce(force);
                p.update();

                if (p.done()) {
                    this.particles.splice(i, 1);
                }
            });
        }
    }

    show() {
        if (!this.explosed) {
            this.p.show();
        } else {
            this.particles.forEach((p) => {
                p.show();
            });
        }
    }
}

export default Firework;