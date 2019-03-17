import p5 from 'p5';

export default class Star {
    x: number;
    y: number;
    z: number;
    
    tail: number;

    width: number;
    height: number;

    constructor(private p5: p5) {
        // custom height
        this.height = this.p5.width;
        this.width = this.p5.height;

        this.initialPos();
    }

    initialPos() {
        const { p5 } = this;
        this.x = p5.random(-this.width, this.width);
        this.y = p5.random(-this.height, this.height);
        this.z = p5.random(this.width);

        this.tail = this.z;
    }

    update(speed): void {
        this.z -= speed;
        if (this.z < 0) {
            this.initialPos();
        }
    }

    show(): void {
        const { p5 } = this;
        
        
        const sx: number = p5.map(this.x / this.z, 0, 1, 0, this.width);
        const sy: number = p5.map(this.y / this.z, 0, 1, 0, this.height);
        
        const px: number = p5.map(this.x / this.tail, 0, 1, 0, this.width);
        const py: number = p5.map(this.y / this.tail, 0, 1, 0, this.height);
        
        p5.stroke(52);
        p5.line(px, py, sx, sy);
        
        const r = p5.map(this.z, 0, this.width, 10, 0);

        p5.fill(200);
        p5.noStroke();

        p5.ellipse(sx, sy, r, r);

    }
}