import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Story1Module } from './mainFolder/story1/story1.module';
import { Story2Module } from './mainFolder/story2/story2/story2.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { NavigationModule } from './mainFolder/navigation/navigation.module';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { bugInterceptor } from './bugInterceptor.service';
import { NavigationComponent } from './mainFolder/navigation/navigation/navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    RouterModule.forRoot(routes, {useHash: false}),
    BrowserModule,
    NavigationModule,
    HttpClientModule,
    AppRoutingModule,
    Story1Module,
    Story2Module,
    FormsModule
  ],
  providers: [
    {
   provide: HTTP_INTERCEPTORS,
   useClass: bugInterceptor,
   multi: true
    }
    ],

  bootstrap: [AppComponent]
})
export class AppModule { }
