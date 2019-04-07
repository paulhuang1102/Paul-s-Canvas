import { Component, OnInit, OnDestroy } from '@angular/core';
import * as p5 from 'p5';
import Star from './Star';

@Component({
  selector: 'app-star-trek',
  templateUrl: './star-trek.component.html',
  styleUrls: ['./star-trek.component.css']
})
export class StarTrekComponent implements OnInit, OnDestroy {
  private canvas;
  constructor() { }

  ngOnInit() {
    const sketch = (s: p5) => {

      let stars: Star[] = [];
      const h = s.windowHeight * 1.5;

      s.preload = () => {
        // preload code
      }

      s.setup = () => {
        s.createCanvas(s.windowWidth, s.windowHeight * 3);
        stars = new Array(500).fill(0).map(() => new Star(s));
        // s.smooth();
        // s.filter(s.BLUR, 6 );
      };
      
      s.draw = () => {
        s.background('#000');
        const speed = s.map(window.pageYOffset, 0, s.height, 30 ,1);
        s.translate(s.width / 2, window.innerHeight / 2 + window.pageYOffset);
        for(let i = 0; i < stars.length; i++) {
          stars[i].update(speed);
          stars[i].show();
        }
      };
    }
    this.canvas = new p5(sketch);
  }

  ngOnDestroy(): void {
    const canvas = document.querySelector('canvas');
    document.body.removeChild(canvas);
  }
}
