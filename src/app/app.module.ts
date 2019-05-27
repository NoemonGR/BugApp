import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Story1Module } from './mainFolder/story1/story1.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Story1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
