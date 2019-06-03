import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Story1Component } from './mainFolder/story1/story1/story1.component';
import { Story2Component } from './mainFolder/story2/story2/story2.component';

const routes: Routes = [
  { path: '', component: Story1Component},
  { path: 'editPage', component: Story2Component},
  { path: 'editPage/:bugId', component: Story2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
