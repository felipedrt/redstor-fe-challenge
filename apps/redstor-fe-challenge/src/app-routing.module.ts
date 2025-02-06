import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      breadcrumb: 'breadcrumb.collections'
    }
  },
  {
    path: 'collection/:collectionId',
    loadChildren: () => import('./components/collection/collection.module').then(m => m.CollectionModule),
    data: { breadcrumb: 'breadcrumb.collection' }
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
