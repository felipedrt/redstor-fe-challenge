import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { UnsplashService } from '@app/services';
import { CollectionsEffects } from '../collections.effects';
import { CollectionsActions } from '../collections.actions';
import { hot, cold } from 'jasmine-marbles';
import { COLLECTIONS_MOCK_DATA } from '@app/mockData/collections-mock-data';

describe('CollectionsEffects', () => {
  let actions$: Observable<any>;
  let effects: CollectionsEffects;
  let unsplashService: jasmine.SpyObj<UnsplashService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('UnsplashService', ['listCollections']);

    TestBed.configureTestingModule({
      providers: [CollectionsEffects, provideMockActions(() => actions$), { provide: UnsplashService, useValue: spy }]
    });

    effects = TestBed.inject(CollectionsEffects);
    unsplashService = TestBed.inject(UnsplashService) as jasmine.SpyObj<UnsplashService>;
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should dispatch loadCollectionsSuccess action', () => {
    const collections = COLLECTIONS_MOCK_DATA;
    const action = CollectionsActions.loadCollections({ page: 1, perPage: 10 });
    const successAction = CollectionsActions.loadCollectionsSuccess(collections);

    actions$ = hot('-a', { a: action });
    unsplashService.listCollections.and.returnValue(cold('-b', { b: { type: 'success', response: { results: collections } } }));

    expect(effects.loadCollections$).toBeObservable(hot('--c', { c: successAction }));
  });

  it('should dispatch loadCollectionsFailure', () => {
    const action = CollectionsActions.loadCollections({ page: 1, perPage: 10 });
    const failureAction = CollectionsActions.loadCollectionsFailure();

    actions$ = hot('-a', { a: action });

    unsplashService.listCollections.and.returnValue(cold('-#', null, 'error'));
    expect(effects.loadCollections$).toBeObservable(hot('--b', { b: failureAction }));
  });
});
