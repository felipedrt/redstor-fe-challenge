import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { RedsCardComponent } from './reds-card.component';
import { of } from 'rxjs';
import { TranslateLoader, TranslateModule, TranslatePipe, TranslateService, TranslateStore } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

const mockTranslateLoader: TranslateLoader = {
  getTranslation: () => of({})
};

const meta: Meta<RedsCardComponent> = {
  component: RedsCardComponent,
  title: 'RedsCardComponent',
  args: {
    classList: 'gallery-item thumbnails',
    cardTitle: 'Sample Card Title',
    imgSrc:
      'https://plus.unsplash.com/premium_photo-1702635213521-a4555c6792cb?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
    imgDescription: 'studio portrait of a couple in contemporary valentines day aesthetics',
    haveLikes: false,
    likes: 0
  },
  decorators: [
    moduleMetadata({
      imports: [
        MatCardModule,
        MatIconModule,
        TranslatePipe,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useValue: mockTranslateLoader }
        })
      ],
      providers: [TranslateStore, TranslateService]
    })
  ]
};
export default meta;
type Story = StoryObj<RedsCardComponent>;

export const DefaultCard: Story = {
  render: args => {
    return {
      component: RedsCardComponent,
      props: {
        ...args
      },
      template: `
      <div style="width: 400px; height: 400px;">
           <redsui-card
            classList="gallery-item thumbnails"
            [cardTitle]="cardTitle"
            [imgSrc]="imgSrc"
            [imgDescription]="imgDescription"
            [haveLikes]="haveLikes"
            [likes]="likes"
          ></redsui-card>
      </div>`
    };
  }
};
