import { Routes } from '@angular/router';
import { Story1Component } from './mainFolder/story1/story1/story1.component';
import { Story2Component } from './mainFolder/story2/story2/story2.component';



export const routes: Routes = [
  { path: '', component: Story1Component },
  { path: 'post', component: Story2Component }
   ];
