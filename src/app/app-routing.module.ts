import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';
import { FeelingSelectorComponent } from './feel-selector/feel-selector.component';


const routes: Routes = [
  { path: 'main', component: MainPageComponent },

  { path: 'rage', component: FeelingSelectorComponent },
  { path: 'fear', component: FeelingSelectorComponent },
  { path: 'love', component: FeelingSelectorComponent },
  { path: 'sadness', component: FeelingSelectorComponent },
  { path: 'joy', component: FeelingSelectorComponent },

  { path: '', redirectTo: '/main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
