import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CollectionsEffects, metaReducers, reducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '@environments/environment';
import { RedsToolbarComponent } from './components/reds-toolbar/reds-toolbar.component';
import { RedsBreadcrumbComponent } from './components/reds-breadcrumb/reds-breadcrumb.component';
import { CollectionModule } from './components/collection/collection.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RedsToolbarComponent,
    CollectionModule,
    // Store
    // toDo Is there a way to load the store just for the module or component in use?
    // yes, I tried using the StoreModule.forFeature() method, but it didn't work because we are using standalone components in the HomeComponent
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([CollectionsEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    RedsBreadcrumbComponent,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
