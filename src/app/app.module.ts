import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BlackboardComponent } from "./blackboard/blackboard.component";
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from "./header/header.component";
import { StarTrekComponent } from "./star-trek/star-trek.component";
import { FireworkComponent } from "./firework/firework.component";
import { ShapeComponent } from "./classes/shape/shape.component";
import { VariableComponent } from "./classes/variable/variable.component";
import { LoopComponent } from "./classes/loop/loop.component";
import { ColorComponent } from "./classes/color/color.component";
import { OperatorComponent } from './classes/operator/operator.component';

@NgModule({
  declarations: [
    AppComponent,
    BlackboardComponent,
    HeaderComponent,
    StarTrekComponent,
    FireworkComponent,
    ShapeComponent,
    VariableComponent,
    LoopComponent,
    ColorComponent,
    OperatorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
