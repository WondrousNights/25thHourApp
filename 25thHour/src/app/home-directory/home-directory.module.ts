import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeDirectoryPageRoutingModule } from './home-directory-routing.module';

import { HomeDirectoryPage } from './home-directory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeDirectoryPageRoutingModule
  ],
  declarations: [HomeDirectoryPage]
})
export class HomeDirectoryPageModule {}
