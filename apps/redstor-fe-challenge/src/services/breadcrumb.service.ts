import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

interface IBreadcrumb {
  text: string;
  url: string;
}

@Injectable({ providedIn: 'root' })
export class BreadcrumbService {
  private HOMEPAGE_BRADCRUMB = 'breadcrumb.collections';
  private breadcrumbsSubject = new BehaviorSubject<IBreadcrumb[]>([{ text: this.HOMEPAGE_BRADCRUMB, url: '/' }]);
  breadcrumbs$ = this.breadcrumbsSubject.asObservable();
  // breadcrumbs: IBreadcrumb[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      const breadcrumbs = this.createBreadcrumbs(this.activatedRoute);
      this.breadcrumbsSubject.next([{ text: this.HOMEPAGE_BRADCRUMB, url: '/' }, ...breadcrumbs]);
    });
  }

  private createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadcrumb[] = []): IBreadcrumb[] {
    if (!route.firstChild) {
      return breadcrumbs;
    }

    const child = route.firstChild;
    const routeURL = child.snapshot.url.map(segment => segment.path).join('/');
    if (routeURL) {
      url += `/${routeURL}`;
    }

    const text = child.snapshot.data['breadcrumb'];
    if (text && text !== this.HOMEPAGE_BRADCRUMB) {
      breadcrumbs.push({ text, url });
    }

    return this.createBreadcrumbs(child, url, breadcrumbs);
  }
}
