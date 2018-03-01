import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShowComponent } from './show/show.component';
import { LoginComponent } from './admin/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShowComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
