import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestingComponent } from './pages/testing/testing.component';
import { MainComponent } from './pages/main/main.component';
import {HttpClientModule} from "@angular/common/http";
import { PlayComponent } from './pages/play/play.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
// import { DateModalComponent } from './date-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    TestingComponent,
    MainComponent,
    PlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
