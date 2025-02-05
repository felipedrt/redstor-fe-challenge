import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { ICollection } from '@app/interfaces';
import { UnsplashService } from '@app/services';
import { CollectionsFacade, CollectionsSelectors, reducers } from '@app/store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, MatToolbarModule, MatProgressBarModule, MatCardModule, AsyncPipe],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  readonly unsplashService: UnsplashService = inject(UnsplashService);
  readonly collectionFacade: CollectionsFacade = inject(CollectionsFacade);
  readonly store = inject(Store);

  isLoading: boolean = false;
  collections: ICollection[] = [];

  collections$: Observable<ICollection[]> = this.store.select(CollectionsSelectors.selectCollections);
  isLoading$: Observable<boolean> = this.store.select(CollectionsSelectors.selectIsLoading);

  ngOnInit(): void {
    // toDo Could we add a pagination?
    this.collectionFacade.loadCollections();
  }
}
