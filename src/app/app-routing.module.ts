import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home/home.page';
import { Lvl1Page } from './lvl1/lvl1.page';
import { Lvl2Page } from './lvl2/lvl2.page';
import { Lvl2aPage } from './lvl2a/lvl2a.page';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  {
      path: 'home/lvl1',
      component: Lvl1Page,
      children: [
          {
              path: '',
              pathMatch: 'full',
              redirectTo: 'lvl2'
          },
          {
              path: 'lvl2',
              component: Lvl2Page
          },
          {
              path: 'lvl2a',
              component: Lvl2aPage
          }
      ]
  }
];

@NgModule({
  imports: [
      RouterModule.forRoot(
          routes,
          { enableTracing: true }
      ),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
