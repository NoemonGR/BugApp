import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Story2Component } from './story2.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Story2Component],
  imports: [
    CommonModule,
    FormsModule
  ],

  exports: [
    Story2Component
  ]
})
export class Story2Module { }
