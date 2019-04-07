import p5, { Vector } from 'p5';
import { Style } from './style.model';

class Particle {
    public pos: p5.createVector;
    // velocity
    public vel: p5.createVector;
    private acc: p5.createVector;
    private lifespan: number = 255;

    constructor(private p5: p5, x: number, y: number, private boom: boolean = false, private style: Style = new Style()) {
        const v = -Math.sqrt(2 * 0.098 * y);
        this.pos = this.p5.createVector(x, y);
        if (this.boom) {
            this.vel = Vector.random2D()
            this.vel.mult(this.p5.random(1, 6))
        } else {
            this.vel = this.p5.createVector(0, this.p5.random(v * 0.9, v * 0.75));
        }

        this.acc = this.p5.createVector(0, 0);
    }

    applyForce(force: p5.createVector) {
        this.acc.add(force);
    }

    done() {
        if (this.lifespan > 0) {
            return false;
        } else { 
            return true;
        }
    }

    update() {
        if (this.boom) {
            if (this.style.type[0] === '2') {
                this.vel.mult(0.8);
            }
            this.lifespan -= 4;
        }
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    applyColor() {
        const tmp: number[] = this.style.rgb.split(',').map(d => parseInt(d));
        tmp[this.style.changeRgb] = this.lifespan;

        return tmp.join();
    }

    show() {
        const { pos, p5, lifespan } = this;

        if (this.boom) {
            p5.stroke(`rgba(${this.applyColor()}, ${p5.map(lifespan, 255, 0, 1, 0)})`);
            p5.strokeWeight(3)
        } else {
            // p5.stroke(120, 100);
            p5.stroke(255, 255, 204);
            p5.strokeWeight(5)
        }
        p5.point(pos.x, pos.y);
    }
    
}

export default Particle;