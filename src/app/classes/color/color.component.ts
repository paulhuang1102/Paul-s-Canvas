import { Component, OnInit } from "@angular/core";
import * as p5 from "p5";

@Component({
  selector: "app-color",
  templateUrl: "./color.component.html",
})
export class ColorComponent implements OnInit {
  constructor() {}
  canvas: HTMLCanvasElement;

  ngOnInit() {
    const sketch = (s: p5) => {
      s.preload = () => {
        // preload code
      };

      s.setup = () => {
        s.createCanvas(s.windowWidth, s.windowHeight - 80);
        // s.frameRate(1);
      };

      s.draw = () => {
        /***********************
         * Example 1 Start *
         ***********************/
        // s.colorMode(s.HSB);
        // for (let i = 0; i < s.width; i += s.mouseX / 5 + 5) {
        //   const h = s.map(i, 0, s.width, 0, 360);
        //   for (let j = 0; j < s.height; j += s.mouseY / 5 + 5) {
        //     const clr = s.color(
        //       ((h + j + s.frameCount * 5) / 2) % 360,
        //       s.mouseY / 5,
        //       s.mouseX / 5
        //     );
        //     clr.setAlpha(0.5);
        //     s.fill(clr);
        //     s.rect(i, j, 30, 50);
        //   }
        // }
        /***********************
         * Example 1 End *
         ***********************/
        s.blendMode(s.BLEND);
        s.background(255);

        s.noStroke();

        // s.blendMode(s.SCREEN);
        s.blendMode(s.MULTIPLY);
        const clr1 = s.color("#6fdbd7");
        const clr2 = s.color("Salmon");
        s.fill(clr1);
        s.rect(0, s.height / 2, 50, 50);
        s.fill(clr2);

        // for (let i = 0; i < s.width; i += 50) {
        //   const ratio = s.map(i, 0, s.width, 0, 1);
        //   const middleColor = s.lerpColor(clr1, clr2, ratio);

        //   s.fill(middleColor);
        //   s.rect(i, s.height / 2, 100, 100);
        // }

        for (let i = 0; i < s.width * 2; i += 100) {
          clr1.setAlpha(30);
          s.fill(clr1);
          s.ellipse(0, s.height / 2, i);
        }

        for (let j = 0; j < s.width * 2; j += 100) {
          clr2.setAlpha(30);
          s.fill(clr2);
          s.ellipse(s.width, s.height / 2, j);
        }

        s.fill("yellow");
        s.ellipse(s.mouseX, s.mouseY, 100, 100);
      };
    };
    this.canvas = new p5(sketch);
  }

  ngOnDestroy(): void {
    const canvas = document.querySelector("canvas");
    document.body.removeChild(canvas);
  }
}
