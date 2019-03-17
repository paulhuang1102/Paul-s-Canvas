import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { BlackboardComponent } from './blackboard/blackboard.component';
import { StarTrekComponent } from './star-trek/star-trek.component';

const appRoutes: Route[] = [
    { path: 'blackboard', component: BlackboardComponent },
    { path: 'star-trek', component: StarTrekComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {})],
    exports: [RouterModule]
})

export class AppRoutingModule {}