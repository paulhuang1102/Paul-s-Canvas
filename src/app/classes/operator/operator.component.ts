import { Component, OnInit } from "@angular/core";
import * as p5 from "p5";

@Component({
  selector: "app-operator",
  templateUrl: "./operator.component.html",
})
export class OperatorComponent implements OnInit {
  constructor() {}
  canvas: HTMLCanvasElement;

  ngOnInit() {
    const sketch = (s: p5) => {
      s.preload = () => {
        // preload code
      };

      let graphic;

      s.setup = () => {
        s.createCanvas(s.windowWidth, s.windowHeight - 80);
        graphic = s.createGraphics(s.width, s.height);
        s.background(100);
      };

      s.draw = () => {
        graphic.ellipse(s.mouseX, s.mouseY, 20, 20);

        /***********************
         * Example 1 Start *
         ***********************/
        // s.translate(0, s.height / 2);
        // s.colorMode(s.HSB);
        // for (let i = 0; i < 15; i++) {
        //   s.fill(i * 20 + s.random(-20, 20), 80, 100);
        //   s.rect(
        //     s.random(100),
        //     s.random(-s.height / 2, s.height / 2),
        //     s.random(40),
        //     s.random(40)
        //   );
        //   // s.rect(0, 0, 50, 50);
        //   s.translate(100, 0);
        //   s.rotate(s.map(s.mouseY, 0, s.height, -0.3, 0.3));
        // }
        /***********************
         * Example 1 End *
         ***********************/
        /***********************
         * Example 2 Start *
         ***********************/
        // s.translate(s.width / 2, s.height / 2);
        // s.colorMode(s.HSB);
        // let clr1 = s.color("#ffd91e");
        // let clr2 = s.color(s.frameCount % 360, 80, 80);
        // s.scale(1 / s.sqrt(s.framCount + 1) * 3);
        // s.angleMode(s.DEGREES);
        // s.rotate(s.frameCount);
        // for (let o = 0; o < 8; o++) {
        //   s.rotate((o / 8) * 360);
        //   s.rotate(s.random(-0.1, 0.1));
        //   s.push();
        //   let scaleDelta = s.random();
        //   for (let i = 0; i < 100; i++) {
        //     let midColor = s.lerpColor(clr1, clr2, i / 60);
        //     s.fill(midColor);
        //     s.ellipse(0, 0, 100, 100);
        //     s.translate(10, 10);
        //     s.scale(scaleDelta);
        //   }
        //   s.pop();
        // for (let i = 0; i < 100; i++) {
        //   let midColor = s.lerpColor(clr1, clr2, i / 30);
        //   s.fill(midColor);
        //   s.ellipse(0, 0, 100, 100);
        //   s.translate(-20, 20);
        //   s.scale(0.95);
        // }
        // }
        /***********************
         * Example 2 End *
         ***********************/

        /***********************
         * Example 3 Start *
         ***********************/
        s.push();
        s.translate(s.width / 2, s.height / 2);
        s.rotate(s.frameCount);
        s.translate(s.frameCount, 0);
        if (s.frameCount % 5 < 3) {
          s.fill(255 - s.random(100), 45, 45);
        } else {
          s.fill(255 - s.random(200), 247, 33);
        }
        s.scale((1 / s.log(s.frameCount + 1)) * 3);
        s.ellipse(0, 0, 50, 50);

        s.pop();

        s.image(graphic, 0, 0);

        /***********************
         * Example 3 End *
         ***********************/

        // s.background(0, 10);
        // s.translate(s.width / 2, s.height / 2);
        // s.shearX(s.map(s.mouseX, 0, s.width, -s.PI / 2, s.PI));
        // s.rect(0, 0, 200, 200);
      };
    };

    this.canvas = new p5(sketch);
  }

  ngOnDestroy(): void {
    const canvas = document.querySelector("canvas");
    document.body.removeChild(canvas);
  }
}
