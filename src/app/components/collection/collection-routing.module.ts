import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionComponent } from './collection.component';
import { PhotoComponent } from './photo/photo.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionComponent,
    data: { breadcrumb: '' }
  },
  {
    path: 'photo/:photoId',
    component: PhotoComponent,
    data: { breadcrumb: 'breadcrumb.photo' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionRoutingModule {}
