import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import * as p5 from 'p5';
import { a } from '@angular/core/src/render3';

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
  private backgroundColor = '#102012';
  private eraseMode = false

  @HostListener('document:keydown', ['$event'])
  handleKeyDownEvent(event: KeyboardEvent) {
    document.body.style.cursor = 'cell';
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyUpEvent(event: KeyboardEvent) {
    document.body.style.cursor = 'default';
  }

  ngOnInit(): void {
    this.canvasHolder = this.elememtRef.nativeElement.querySelector('.canvas')

    const sketch = (s) => {

      s.preload = () => {
        // preload code
      }

      s.setup = () => {
        s.createCanvas(s.windowWidth, s.windowHeight - 80);
        s.background(this.backgroundColor);
      };

      s.draw = () => {
        if (s.mouseIsPressed){

          if (s.keyIsDown(32) || this.eraseMode) {
            s.strokeWeight(50)
            s.stroke(this.backgroundColor);
          } else {
            s.strokeWeight(2);
            s.stroke(this.selectColor);
          }

          s.line(s.mouseX, s.mouseY, s.pmouseX, s.pmouseY);

        }
      };

      // bug will erase canvas
      s.windowResized = () => {
        s.resizeCanvas(s.windowWidth, s.windowHeight - 80);
        s.background(this.backgroundColor);

      }
    }

    let canvas = new p5(sketch);   
  }

  handleColor(color): void {
    this.selectColor = color;
    this.eraseMode = false
    document.body.style.cursor = 'default';
  }

  handleErase() {
    if (this.eraseMode) {
      this.eraseMode = false;
      document.body.style.cursor = 'default';
    } else {
      this.eraseMode = true;
      document.body.style.cursor = 'cell';
    }
  }

  snapshot() {
    const canvas = document.querySelector('canvas');
    const a: ElementRef["nativeElement"] = document.createElement('a');
    a.attr
    canvas.toBlob((blob) => {
      const url = window.URL.createObjectURL(blob);
      a.href = url;
      a.target = '_blank';
      a.download = 'blackboard.png';

      a.click();
      window.URL.revokeObjectURL(url);
    })
  }

  // TODO
  // resize
  // snapshot
}
