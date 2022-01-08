import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { BlackboardComponent } from "./blackboard/blackboard.component";
import { StarTrekComponent } from "./star-trek/star-trek.component";
import { FireworkComponent } from "./firework/firework.component";
import { ShapeComponent } from "./classes/shape/shape.component";
import { VariableComponent } from "./classes/variable/variable.component";
import { LoopComponent } from "./classes/loop/loop.component";
import { ColorComponent } from "./classes/color/color.component";
import { OperatorComponent } from "./classes/operator/operator.component";
const appRoutes: Route[] = [
  { path: "blackboard", component: BlackboardComponent },
  { path: "star-trek", component: StarTrekComponent },
  { path: "firework", component: FireworkComponent },
  {
    path: "classes",
    children: [
      { path: "shape", component: ShapeComponent },
      { path: "variable", component: VariableComponent },
      { path: "loop", component: LoopComponent },
      { path: "color", component: ColorComponent },
      { path: "operator", component: OperatorComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
