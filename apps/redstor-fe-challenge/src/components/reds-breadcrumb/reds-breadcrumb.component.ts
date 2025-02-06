import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-reds-breadcrumb',
  standalone: true,
  imports: [AsyncPipe, RouterLink, TranslatePipe],
  templateUrl: './reds-breadcrumb.component.html',
  styleUrls: ['./reds-breadcrumb.component.scss']
})
export class RedsBreadcrumbComponent {
  breadcrumbService = inject(BreadcrumbService);
  breadcrumbs$ = this.breadcrumbService.breadcrumbs$;
}
