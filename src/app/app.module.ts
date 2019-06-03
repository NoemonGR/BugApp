import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Story1Module } from './mainFolder/story1/story1.module';
import { Story2Module } from './mainFolder/story2/story2/story2.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { NavigationModule } from './mainFolder/navigation/navigation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes, {useHash: false}),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    Story1Module,
    Story2Module,
    FormsModule,
    NavigationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
