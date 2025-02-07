import { AsyncPipe } from '@angular/common';
import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { CollectionsFacade, CollectionsSelectors } from '@app/store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { toObservable } from '@angular/core/rxjs-interop';
import { RedsCardComponent } from 'lib-ui/src/lib/lib-ui/reds-card/reds-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, MatToolbarModule, MatProgressBarModule, MatCardModule, AsyncPipe, MatPaginatorModule, RedsCardComponent],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  readonly collectionFacade: CollectionsFacade = inject(CollectionsFacade);
  readonly router: Router = inject(Router);
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

  redirect(id: number) {
    this.router.navigate(['/collection', id]);
  }

  navigate(event: PageEvent) {
    this.pageIndex = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadCollections();
  }
}
