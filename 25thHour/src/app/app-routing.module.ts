import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home-directory',
    loadChildren: () => import('./home-directory/home-directory.module').then( m => m.HomeDirectoryPageModule)
  },
  {
    path: 'ambient-mixer',
    loadChildren: () => import('./ambient-mixer/ambient-mixer.module').then( m => m.AmbientMixerPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'meditate',
    loadChildren: () => import('./meditate/meditate.module').then( m => m.MeditatePageModule)
  },
  {
    path: 'journal',
    loadChildren: () => import('./journal/journal.module').then( m => m.JournalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
