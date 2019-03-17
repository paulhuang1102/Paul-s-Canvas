import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlackboardComponent } from './blackboard/blackboard.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { StarTrekComponent } from './star-trek/star-trek.component';

@NgModule({
  declarations: [
    AppComponent,
    BlackboardComponent,
    HeaderComponent,
    StarTrekComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
