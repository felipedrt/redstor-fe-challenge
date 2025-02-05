import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CollectionComponent } from './collection.component';
import { MatIconModule } from '@angular/material/icon';
import { RedsToolbarComponent } from '../reds-toolbar/reds-toolbar.component';
import { PhotoComponent } from './photo/photo.component';
import { CollectionRoutingModule } from './collection-routing.module';

@NgModule({
  declarations: [CollectionComponent, PhotoComponent],
  imports: [
    CommonModule,
    RouterModule,
    CollectionRoutingModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatCardModule,
    MatIconModule,
    RedsToolbarComponent
  ],
  exports: [CollectionComponent]
})
export class CollectionModule {}
