import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Story1Component } from './story1/story1.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Story1Component],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule
  ],

  exports: [
    Story1Component
  ]

})
export class Story1Module { }
