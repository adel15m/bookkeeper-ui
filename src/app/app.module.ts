import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestingComponent } from './pages/testing/testing.component';
import { MainComponent } from './pages/main/main.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { PlayComponent } from './pages/play/play.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import {AuthInterceptorInterceptor} from "./services/auth-interceptor.interceptor";
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
// import { DateModalComponent } from './date-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    TestingComponent,
    MainComponent,
    PlayComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
