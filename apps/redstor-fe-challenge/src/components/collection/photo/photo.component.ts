import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPhoto } from '@app/interfaces';
import { UnsplashService } from '@app/services';
import { Observable, map, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html'
})
export class PhotoComponent {
  private readonly unsplashService: UnsplashService = inject(UnsplashService);
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  readonly photo$: Observable<IPhoto | null> = this.activatedRoute.params.pipe(
    switchMap(params =>
      this.unsplashService.getPhoto(params['photoId']).pipe(
        map(response => response.response as unknown as IPhoto),
        startWith(null)
      )
    )
  );
  readonly isLoading$: Observable<boolean> = this.photo$.pipe(map(p => !p));
}
