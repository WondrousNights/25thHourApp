import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeDirectoryPage } from './home-directory.page';

const routes: Routes = [
  {
    path: '',
    component: HomeDirectoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeDirectoryPageRoutingModule {}
