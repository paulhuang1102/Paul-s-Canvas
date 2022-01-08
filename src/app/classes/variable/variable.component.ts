import { Component, OnInit } from "@angular/core";
import * as p5 from "p5";

@Component({
  selector: "app-variable",
  templateUrl: "./variable.component.html",
})
export class VariableComponent implements OnInit {
  constructor() {}
  canvas: HTMLCanvasElement;

  ngOnInit() {
    const sketch = (s: p5) => {
      s.preload = () => {
        // preload code
      };

      var x = 10,
        y = 10,
        delta,
        ang = 0;

      s.setup = () => {
        s.createCanvas(s.windowWidth, s.windowHeight - 80);
        x = s.width / 2;
        y = s.height / 2;
        delta = 10;
        s.background(100);
      };

      s.draw = () => {
        /***********************
         * Example 1 Start *
         ***********************/
        //     var w = s.random(30, 80);
        //     s.fill(100 + s.random(155), 59, 59);
        //     if (s.frameCount % 7 < 3) {
        //       s.fill(255);
        //       w = 10;
        //     }
        //     s.rect(x, y, w, 20);
        //     x += w + 10;
        //     if (x > s.width) {
        //       x = 0;
        //       y += 30;
        //     }
        /***********************
         * Example 1 End *
         ***********************/

        /***********************
         * Example 2 Start *
         ***********************/
        // delta = s.mouseX / 50;
        // x += s.random(-delta, delta);
        // y += s.random(-delta, delta);

        // x = s.lerp(x, s.mouseX, 0.05);
        // y = s.lerp(y, s.mouseY, 0.05);
        // var colorR = s.map(x, 0, s.width - 10, 0, 255, true);
        // s.fill(colorR, 0, 0);
        // s.ellipse(x, y, 100, 100);
        /***********************
         * Example 2 End *
         ***********************/

        /***********************
         * Example 3 Start *
         ***********************/
        s.background(0);
        var sec = s.second();
        var m = s.minute();
        var h = s.hour();
        // ang = s.map(s.mouseX, 0, s.width, 0, s.PI * 2, true);
        // ang = sec / 10;

        var angS = s.map(sec, 0, 60, 0, s.PI * 2);
        var angM = s.map(m, 0, 60, 0, s.PI * 2);
        var angH = s.map(h, 0, 60, 0, s.PI * 2);

        s.fill("red");
        s.arc(s.width / 2, s.height / 2, 200, 200, 0, angS, s.PIE);

        s.fill("yellow");
        s.arc(s.width / 2, s.height / 2, 100, 100, 0, angM, s.PIE);

        s.fill("white");
        s.arc(s.width / 2, s.height / 2, 50, 50, 0, angH, s.PIE);
        /***********************
         * Example 3 End *
         ***********************/
      };
    };

    this.canvas = new p5(sketch);
  }

  ngOnDestroy(): void {
    const canvas = document.querySelector("canvas");
    document.body.removeChild(canvas);
  }
}
