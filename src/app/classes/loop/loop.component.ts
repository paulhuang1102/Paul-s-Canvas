import { Component, OnInit } from "@angular/core";
import { p } from "@angular/core/src/render3";
import * as p5 from "p5";

@Component({
  selector: "app-loop",
  templateUrl: "./loop.component.html",
  styleUrls: ["./loop.component.css"],
})
export class LoopComponent implements OnInit {
  constructor() {}
  canvas: HTMLCanvasElement;

  ngOnInit() {
    const sketch = (s: p5) => {
      s.preload = () => {
        // preload code
      };

      s.setup = () => {
        s.createCanvas(s.windowWidth, s.windowHeight - 80);
      };

      s.draw = () => {
        let r = 100;
        s.background(0);
        for (let i = 0; i < 50; i++) {
          s.noFill();
          s.stroke(s.map(i, 0, 10, 0, 255), 0, 255);
          s.ellipse(
            s.width / 2,
            s.height / 2,
            1000 - i * 5 - i * s.map(s.mouseX, 0, s.width, 0, 20)
          );
        }
      };
    };

    this.canvas = new p5(sketch);
  }

  ngOnDestroy(): void {
    const canvas = document.querySelector("canvas");
    document.body.removeChild(canvas);
  }
}
