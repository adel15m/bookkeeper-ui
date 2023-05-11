import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {TestingComponent} from "./pages/testing/testing.component";
import {PlayComponent} from "./pages/play/play.component";
const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'test', component: TestingComponent },
  { path: 'play', component: PlayComponent },
  { path: '',   redirectTo: '/main', pathMatch: 'full' },
  { path: '**', component: TestingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
