import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { RedsToolbarComponent } from './reds-toolbar.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { TranslateLoader, TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { of } from 'rxjs';
import { MatOptionModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';

const mockTranslateLoader: TranslateLoader = {
  getTranslation: () => of({})
};

const meta: Meta<RedsToolbarComponent> = {
  component: RedsToolbarComponent,
  title: 'RedsToolbarComponent',
  args: {
    title: 'Redstor Storybook'
  },
  decorators: [
    moduleMetadata({
      imports: [
        TranslatePipe,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useValue: mockTranslateLoader }
        }),
        MatToolbarModule,
        MatFormFieldModule,
        MatSelectModule,
        MatOptionModule,
        BrowserAnimationsModule
      ]
    })
  ]
};
export default meta;
type Story = StoryObj<RedsToolbarComponent>;

export const DefaultToolbar: Story = {
  render: args => {
    return {
      component: RedsToolbarComponent,
      props: {
        ...args
      },
      template: `<redsui-toolbar [title]="title"></redsui-toolbar>`
    };
  }
};
