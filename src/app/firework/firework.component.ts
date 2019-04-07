import { Component, OnInit, OnDestroy } from '@angular/core';
import * as p5 from 'p5';
import Firework from './Firework';

@Component({
  selector: 'app-firework',
  templateUrl: './firework.component.html',
  styleUrls: ['./firework.component.css']
})
export class FireworkComponent implements OnInit {
  private canvas: HTMLCanvasElement;
  private fireworks: Firework[] = [];

  constructor() { }

  ngOnInit() {
    const sketch = (s: p5) => {

      const gravity = s.createVector(0, 0.098)

      s.preload = () => {
        // preload code
      }

      s.setup = () => {
        s.createCanvas(s.windowWidth, s.windowHeight - 80);
        s.background(0);

        // s.colorMode(p5.HSB, 100);

        // this.fireworks.push(new Firework(s, s.random(s.width), s.height));
      };
      
      s.draw = () => {
        s.background(0, 20);
        
        if (s.random(1) < 0.03) {
          this.fireworks.push(new Firework(s, s.random(s.width), s.height));
        }


        this.fireworks.forEach((firework, i) => {
          firework.update(gravity);
          firework.show();

          if (firework.done()) {
            this.fireworks.splice(i, 1);
          }
        });
      };

    }
    this.canvas = new p5(sketch);
  }

  ngOnDestroy(): void {
    const canvas = document.querySelector('canvas');
    document.body.removeChild(canvas);
  }

  // TODO add type
  // add direction

}
