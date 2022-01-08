import { Component, OnInit } from "@angular/core";
import * as p5 from "p5";

@Component({
  selector: "app-loop",
  templateUrl: "./loop.component.html",
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
        s.background(0);

        /***********************
         * Example 2 Start *
         ***********************/
        // s.background(0);
        // s.noStroke();

        // var count = 0;

        // for (let x = 0; x < s.width; x += 50) {
        //   for (let y = 0; y < s.height; y += 50) {
        //     count += 1;
        //     s.fill(s.random(200, 255), s.random(255), s.random(255));
        //     s.stroke(s.random(200, 255), s.random(255), s.random(255));
        //     s.strokeWeight(s.random(3, 6));

        //     if (count % 5 < 4) {
        //       s.rect(x, y, 40, 40);

        //       s.noStroke();
        //       if (s.random() < 0.5) {
        //         s.fill(0);
        //         s.ellipse(x + 20, y + 20, 20);

        //         if (s.random() < 0.5) {
        //           s.fill(s.random(200, 255), s.random(255), s.random(255));
        //           s.ellipse(x + 20, y + 20, 10);
        //         }
        //       }
        //     }
        //   }
        // }
        /***********************
         * Example 2 End *
         ***********************/
      };

      s.draw = () => {
        /***********************
         * Example 1 Start *
         ***********************/
        // let r = 100;
        // s.background(0);
        // for (let i = 0; i < 50; i++) {
        //   s.noFill();
        //   s.stroke(s.map(i, 0, 10, 0, 255), 0, 255);
        //   s.ellipse(
        //     s.width / 2,
        //     s.height / 2,
        //     1000 - i * 5 - i * s.map(s.mouseX, 0, s.width, 0, 20)
        //   );
        // }
        /***********************
         * Example 1 End *
         ***********************/
        s.background(0, 10);
      };

      let mode = 1;
      // s.mousePressed
      s.mouseMoved = () => {
        const count = s.int(s.random(100, 350));
        var r = s.random(2, 20);
        var delta =
          s.sqrt(s.dist(s.pmouseX, s.pmouseY, s.mouseX, s.mouseY)) * 5;
        s.noStroke();

        if (mode === 1) {
          for (let i = 0; i < count; i++) {
            s.fill(
              s.random((s.frameCount % 255) + s.mouseY),
              s.random(200, 255),
              s.random(255)
            );
            s.ellipse(
              s.mouseX + s.random(-delta, delta),
              s.mouseY + s.random(-delta, delta),
              (r *= 0.9)
            );
          }
        } else if (mode === 2) {
          s.ellipse(s.mouseX, s.mouseY, 50, 50);
        }
      };

      s.mousePressed = () => {
        mode++;
        if (mode > 2) {
          mode = 1;
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
