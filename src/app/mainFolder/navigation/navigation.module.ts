import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavigationComponent]
})
export class NavigationModule { }
