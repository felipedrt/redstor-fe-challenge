import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { RedsCardPhotoComponent } from './reds-card-photo.component';
import { of } from 'rxjs';
import { TranslateLoader, TranslateModule, TranslatePipe, TranslateService, TranslateStore } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

const mockTranslateLoader: TranslateLoader = {
  getTranslation: () => of({})
};

const meta: Meta<RedsCardPhotoComponent> = {
  component: RedsCardPhotoComponent,
  title: 'RedsCardPhotoComponent',
  args: {
    photo: {
      id: '5_yAP8OtYNc',
      width: 2954,
      height: 4431,
      color: '#594040',
      description: 'Lunar Festival in Philadelphia Chinatown',
      alt_description: 'people in red and brown traditional dress walking on street during daytime',
      urls: {
        raw: 'https://images.unsplash.com/photo-1589803196808-b395a6f32a9a?ixid=M3w3MDQ4MTJ8MHwxfGFsbHx8fHx8fHx8fDE3Mzg5NDUyODh8&ixlib=rb-4.0.3',
        full: 'https://images.unsplash.com/photo-1589803196808-b395a6f32a9a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MDQ4MTJ8MHwxfGFsbHx8fHx8fHx8fDE3Mzg5NDUyODh8&ixlib=rb-4.0.3&q=85',
        regular:
          'https://images.unsplash.com/photo-1589803196808-b395a6f32a9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDQ4MTJ8MHwxfGFsbHx8fHx8fHx8fDE3Mzg5NDUyODh8&ixlib=rb-4.0.3&q=80&w=1080',
        small:
          'https://images.unsplash.com/photo-1589803196808-b395a6f32a9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDQ4MTJ8MHwxfGFsbHx8fHx8fHx8fDE3Mzg5NDUyODh8&ixlib=rb-4.0.3&q=80&w=400',
        thumb:
          'https://images.unsplash.com/photo-1589803196808-b395a6f32a9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDQ4MTJ8MHwxfGFsbHx8fHx8fHx8fDE3Mzg5NDUyODh8&ixlib=rb-4.0.3&q=80&w=200',
        small_s3: 'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1589803196808-b395a6f32a9a'
      },
      links: {
        self: 'https://api.unsplash.com/photos/people-in-red-and-brown-traditional-dress-walking-on-street-during-daytime-5_yAP8OtYNc',
        html: 'https://unsplash.com/photos/people-in-red-and-brown-traditional-dress-walking-on-street-during-daytime-5_yAP8OtYNc',
        download: 'https://unsplash.com/photos/5_yAP8OtYNc/download?ixid=M3w3MDQ4MTJ8MHwxfGFsbHx8fHx8fHx8fDE3Mzg5NDUyODh8',
        download_location: 'https://api.unsplash.com/photos/5_yAP8OtYNc/download?ixid=M3w3MDQ4MTJ8MHwxfGFsbHx8fHx8fHx8fDE3Mzg5NDUyODh8'
      },
      user: {
        id: 'xsGAC4jM5qI',
        username: 'asnowingday',
        name: 'Dyana',
        first_name: 'Dyana',
        last_name: 'Wing So',
        profile_image: {
          large: 'https://images.unsplash.com/profile-1580132610739-6ba9551de7b9image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
          medium: 'https://images.unsplash.com/profile-1580132610739-6ba9551de7b9image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
          small: 'https://images.unsplash.com/profile-1580132610739-6ba9551de7b9image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32'
        },
        portfolio_url: 'string',
        location: 'string'
      },
      likes: 123,
      views: 7011146
    }
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
type Story = StoryObj<RedsCardPhotoComponent>;

export const CardWithAvatar: Story = {
  args: {},

  render: args => {
    const photo = args.photo;
    return {
      component: RedsCardPhotoComponent,
      props: {
        ...args
      },
      template: `
      <div style="width: 400px; height: 400px;">
            <redsui-card-photo [photo]="photo"></redsui-card-photo>
      </div>`
    };
  }
};
