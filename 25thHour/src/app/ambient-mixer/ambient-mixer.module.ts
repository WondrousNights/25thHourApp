import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmbientMixerPageRoutingModule } from './ambient-mixer-routing.module';

import { AmbientMixerPage } from './ambient-mixer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmbientMixerPageRoutingModule
  ],
  declarations: [AmbientMixerPage]
})
export class AmbientMixerPageModule {}
