import { Injectable, inject } from '@angular/core';
import { UnsplashService } from '@app/services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CollectionsActions } from './collections.actions';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class CollectionsEffects {
  private readonly actions$: Actions = inject(Actions);
  private readonly unsplash: UnsplashService = inject(UnsplashService);

  loadCollections$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CollectionsActions.loadCollections),
      switchMap(({ page, perPage }) =>
        this.unsplash.listCollections(page, perPage).pipe(
          map(result => {
            return CollectionsActions.loadCollectionsSuccess(result.response?.results || []);
          }),
          catchError(error => {
            return of(CollectionsActions.loadCollectionsFailure());
          })
        )
      )
    )
  );
}
