import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { generate } from 'rxjs';
import { AddComponent } from './pages/add/add.component';
import { EditComponent } from './pages/edit/edit.component';
import { GenerateComponent } from './pages/generate/generate.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { ShowComponent } from './pages/show/show.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'show',
    component:ShowComponent
  },
  {
    path: 'view/:id',
    component:ShowComponent
  },
  {
    path: 'add',
    component:AddComponent
  },
  {
    path: 'search',
    component:SearchComponent
  },
  {
    path: 'edit',
    component:EditComponent
  },
  {
    path: 'generate',
    component:GenerateComponent
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
