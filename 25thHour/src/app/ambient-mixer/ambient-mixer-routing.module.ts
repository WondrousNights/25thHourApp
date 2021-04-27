import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmbientMixerPage } from './ambient-mixer.page';

const routes: Routes = [
  {
    path: '',
    component: AmbientMixerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmbientMixerPageRoutingModule {}
