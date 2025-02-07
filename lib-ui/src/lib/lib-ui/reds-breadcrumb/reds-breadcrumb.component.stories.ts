import type { Meta, StoryObj } from '@storybook/angular';
import { RedsBreadcrumbComponent } from './reds-breadcrumb.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { of } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { TranslateLoader, TranslateModule, TranslatePipe, TranslateService, TranslateStore } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';

const mockBreadcrumbService = {
  breadcrumbs$: of([
    { text: 'Collections', url: '/' },
    { text: 'Collection', url: '/collection' },
    { text: 'Photo', url: '/photo' }
  ])
};

const mockTranslateLoader: TranslateLoader = {
  getTranslation: () => of({})
};

const meta: Meta<RedsBreadcrumbComponent> = {
  component: RedsBreadcrumbComponent,
  title: 'RedsBreadcrumbComponent',
  decorators: [
    () => ({
      moduleMetadata: {
        imports: [
          RouterTestingModule,
          TranslatePipe,
          AsyncPipe,
          TranslateModule.forRoot({
            loader: { provide: TranslateLoader, useValue: mockTranslateLoader }
          })
        ],
        providers: [TranslateStore, TranslateService, { provide: BreadcrumbService, useValue: mockBreadcrumbService }]
      },
      template: `<redsui-breadcrumb></redsui-breadcrumb>`
    })
  ]
};
export default meta;
type Story = StoryObj<RedsBreadcrumbComponent>;

export const DefaultBreadcrumb: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Collections')).toBeTruthy();
    expect(canvas.getByText('Collection')).toBeTruthy();
    expect(canvas.getByText('Photo')).toBeTruthy();
  }
};
