import { AsyncPipe } from '@angular/common';
import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { CollectionsFacade, CollectionsSelectors } from '@app/store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, MatToolbarModule, MatProgressBarModule, MatCardModule, AsyncPipe, MatPaginatorModule],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  readonly collectionFacade: CollectionsFacade = inject(CollectionsFacade);
  readonly store = inject(Store);

  collections$ = toObservable(this.collectionFacade.collections$);
  isLoading$: Observable<boolean> = this.store.select(CollectionsSelectors.selectIsLoading);
  page$: Observable<number> = this.store.select(CollectionsSelectors.selectPage);
  perPage$: Observable<number> = this.store.select(CollectionsSelectors.selectPerPage);

  pageIndex = 1;
  pageSize = 3;

  ngOnInit(): void {
    this.loadCollections();
  }

  loadCollections() {
    this.collectionFacade.loadCollections(this.pageIndex, this.pageSize);
  }

  navigate(event: PageEvent) {
    this.pageIndex = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadCollections();
  }
}
