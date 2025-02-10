import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { RedsBreadcrumbComponent, RedsToolbarComponent } from 'lib-ui';

const mockTranslateLoader: TranslateLoader = {
  getTranslation: () => of({})
};

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        RedsToolbarComponent,
        RedsBreadcrumbComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useValue: mockTranslateLoader }
        })
      ],
      declarations: [AppComponent]
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
