import { TestBed } from '@angular/core/testing';
import { UnsplashService } from '../unsplash.service';
import { createApi } from 'unsplash-js';
import { COLLECTIONS_MOCK_DATA } from '@app/mockData/collections-mock-data';
import { PHOTOS_MOCK_DATA } from '@app/mockData/photos-mock-data';

const mockUnsplashApi = {
  photos: {
    get: jasmine.createSpy('get').and.returnValue(Promise.resolve({ results: PHOTOS_MOCK_DATA[0], total: 1 })),
    list: jasmine.createSpy('list').and.returnValue(Promise.resolve({ results: [], total: 0 })),
    getStats: jasmine.createSpy('getStats').and.returnValue(Promise.resolve({})),
    getRandom: jasmine.createSpy('getRandom').and.returnValue(Promise.resolve({})),
    trackDownload: jasmine.createSpy('trackDownload').and.returnValue(Promise.resolve({ url: 'test-url' }))
  },
  users: {
    getPhotos: jasmine.createSpy('getPhotos').and.returnValue(Promise.resolve({ results: [], total: 0 })),
    getCollections: jasmine.createSpy('getCollections').and.returnValue(Promise.resolve({ results: [], total: 0 })),
    getLikes: jasmine.createSpy('getLikes').and.returnValue(Promise.resolve({ results: [], total: 0 })),
    get: jasmine.createSpy('get').and.returnValue(Promise.resolve({}))
  },
  search: {
    getCollections: jasmine.createSpy('getCollections').and.returnValue(Promise.resolve({})),
    getPhotos: jasmine.createSpy('getPhotos').and.returnValue(Promise.resolve({})),
    getUsers: jasmine.createSpy('getUsers').and.returnValue(Promise.resolve({}))
  },
  collections: {
    getPhotos: jasmine.createSpy('getPhotos').and.returnValue(Promise.resolve({ results: PHOTOS_MOCK_DATA, total: 3 })),
    get: jasmine.createSpy('get').and.returnValue(Promise.resolve({})),
    list: jasmine.createSpy('list').and.returnValue(Promise.resolve({ results: COLLECTIONS_MOCK_DATA, total: 3 })),
    getRelated: jasmine.createSpy('getRelated').and.returnValue(Promise.resolve({ results: [], total: 0 }))
  },
  topics: {
    list: jasmine.createSpy('list').and.returnValue(Promise.resolve({ results: [], total: 0 })),
    get: jasmine.createSpy('get').and.returnValue(Promise.resolve({})),
    getPhotos: jasmine.createSpy('getPhotos').and.returnValue(Promise.resolve({ results: [], total: 0 }))
  }
};

describe('UnsplashService', () => {
  let service: UnsplashService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnsplashService, { provide: createApi, useValue: mockUnsplashApi }]
    });
    service = TestBed.inject(UnsplashService);
    service.api = mockUnsplashApi;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to list collections', done => {
    service.listCollections(1, 3).subscribe(response => {
      expect(response).toEqual(jasmine.objectContaining({ results: COLLECTIONS_MOCK_DATA, total: 3 }));
      expect(mockUnsplashApi.collections.list).toHaveBeenCalledWith({
        page: 1,
        perPage: 3
      });
      done();
    });
  });

  it('should be able to list collection photos', done => {
    service.listCollectionPhotos('123').subscribe(response => {
      expect(response).toEqual(jasmine.objectContaining({ results: PHOTOS_MOCK_DATA, total: 3 }));
      expect(mockUnsplashApi.collections.getPhotos).toHaveBeenCalledWith({
        collectionId: '123'
      });
      done();
    });
  });

  it('should be able to get photo', done => {
    service.getPhoto('123').subscribe(response => {
      expect(response).toEqual(jasmine.objectContaining({ results: PHOTOS_MOCK_DATA[0], total: 1 }));
      expect(mockUnsplashApi.collections.getPhotos).toHaveBeenCalledWith({
        collectionId: '123'
      });
      done();
    });
  });
});
