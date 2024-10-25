import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PlayComponent } from './pages/play/play.component';
import {IsLoggedInGuard} from "./guard/is-logged-in.guard";

const routes: Routes = [
  // todo: if already logged in, redirect to play
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'play', component: PlayComponent, canActivate: [IsLoggedInGuard]},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
