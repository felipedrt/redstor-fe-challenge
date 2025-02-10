import { TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { BreadcrumbService } from '../breadcrumb.service';

describe('BreadcrumbService', () => {
  let service: BreadcrumbService;
  let routerMock: any;
  let activatedRouteMock: any;
  let eventsSubject: BehaviorSubject<any>;

  beforeEach(() => {
    eventsSubject = new BehaviorSubject<any>(null);

    routerMock = {
      events: eventsSubject.asObservable(),
      navigate: jasmine.createSpy('navigate')
    };

    activatedRouteMock = {
      firstChild: {
        snapshot: {
          url: [{ path: 'test' }],
          data: { breadcrumb: 'Redstor test Page' }
        },
        firstChild: null
      }
    };

    TestBed.configureTestingModule({
      providers: [BreadcrumbService, { provide: Router, useValue: routerMock }, { provide: ActivatedRoute, useValue: activatedRouteMock }]
    });

    service = TestBed.inject(BreadcrumbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('shoud start breadcrumb with start page', done => {
    service.breadcrumbs$.subscribe(breadcrumbs => {
      expect(breadcrumbs.length).toBe(1);
      expect(breadcrumbs[0].text).toBe('breadcrumb.collections');
      expect(breadcrumbs[0].url).toBe('/');
      done();
    });
  });

  it('should update breadcrumbs when route change', done => {
    eventsSubject.next(new NavigationEnd(1, '/test', '/test'));

    service.breadcrumbs$.subscribe(breadcrumbs => {
      expect(breadcrumbs.length).toBe(2);
      expect(breadcrumbs[1].text).toBe('Redstor test Page');
      expect(breadcrumbs[1].url).toBe('/test');
      done();
    });
  });

  it('should ignor route without breadcrumbs', done => {
    activatedRouteMock.firstChild.snapshot.data.breadcrumb = undefined;

    eventsSubject.next(new NavigationEnd(1, '/test', '/test'));

    service.breadcrumbs$.subscribe(breadcrumbs => {
      expect(breadcrumbs.length).toBe(1);
      expect(breadcrumbs[0].text).toBe('breadcrumb.collections');
      done();
    });
  });
});
