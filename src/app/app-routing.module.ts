import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { BlackboardComponent } from './blackboard/blackboard.component';

const appRoutes: Route[] = [
    { path: 'blackboard', component: BlackboardComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {})],
    exports: [RouterModule]
})

export class AppRoutingModule {}