import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Lvl2aPage } from './lvl2a.page';

const routes: Routes = [
  {
    path: '',
    component: Lvl2aPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Lvl2aPage]
})
export class Lvl2aPageModule {}
