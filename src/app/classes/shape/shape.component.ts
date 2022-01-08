import { Component, OnInit } from "@angular/core";
import * as p5 from "p5";

@Component({
  selector: "app-shape",
  templateUrl: "./shape.component.html",
})
export class ShapeComponent implements OnInit {
  constructor() {}
  canvas: HTMLCanvasElement;

  ngOnInit() {
    const sketch = (s: p5) => {
      s.preload = () => {
        // preload code
      };

      s.setup = () => {
        s.createCanvas(s.windowWidth, s.windowHeight - 80);
        s.background(255);
      };

      s.draw = () => {
        const { mouseX, mouseY, frameCount, width, height } = s;
        // s.background(255, 1);

        s.noFill();
        // s.ellipse(width / 2, height / 2, 50, 50);
        s.rectMode(s.CENTER);
        // s.circle(width / 2, height / 2, 50);
        s.noFill();

        // s.fill("red");
        // s.stroke(mouseX);
        // s.strokeWeight(frameCount % 2 ? 5 : 1);

        // Rect
        // s.rect(
        //   width / 2,
        //   height / 2,
        //   100 + frameCount * 20,
        //   100 + frameCount * 20
        // );
        // s.rect(mouseX, mouseY, 100, 100);

        // s.fill("black");
        // s.textSize(50);
        // s.text(s.int(mouseX) + " , " + s.int(mouseY), 50, 50);

        // Triangle
        // s.fill(mouseX, mouseY, 50);
        // s.triangle(
        //   440 + mouseX / 2,
        //   140,
        //   160 + frameCount,
        //   600,
        //   mouseX,
        //   mouseY
        // );

        s.background(255);
        s.fill("black");
        s.textSize(50);
        s.text(s.int(mouseX) + " , " + s.int(mouseY), 50, 150);
        s.beginShape();

        s.vertex(440, 260);
        s.vertex(360, 360);

        s.endShape();
      };
    };
    this.canvas = new p5(sketch);
  }

  ngOnDestroy(): void {
    const canvas = document.querySelector("canvas");
    document.body.removeChild(canvas);
  }
}
