import { Component, OnInit, ElementRef } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-blackboard',
  templateUrl: './blackboard.component.html',
  styleUrls: ['./blackboard.component.sass']
})

export class BlackboardComponent implements OnInit {

  constructor(private elememtRef: ElementRef) {}

  private canvasHolder;
  private colors: string[] = ['#FFF', '#CD5C5C', '#FFFF00', '#4169E1'];
  private selectColor: string = this.colors[0];

  ngOnInit(): void {
    this.canvasHolder = this.elememtRef.nativeElement.querySelector('.canvas')

    const sketch = (s) => {

      s.preload = () => {
        // preload code
      }

      s.setup = () => {
        s.createCanvas(this.canvasHolder.offsetWidth, window.innerHeight);
        s.background('#102012');
        s.strokeWeight(2);
      };

      s.draw = () => {
        if (s.mouseIsPressed){
          s.stroke(this.selectColor);
          s.line(s.mouseX, s.mouseY, s.pmouseX, s.pmouseY);

        }
      };
    }

    let canvas = new p5(sketch);   
  }

  handleColor(color): void {
    this.selectColor = color;
  }

  // TODO
  // resize
  // snapshot
  // clear
}
