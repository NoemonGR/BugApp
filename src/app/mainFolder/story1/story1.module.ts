import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Story1Component } from './story1/story1.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [Story1Component],
  imports: [
    CommonModule,
    HttpClientModule
  ],

  exports: [
    Story1Component
  ]

})
export class Story1Module { }
