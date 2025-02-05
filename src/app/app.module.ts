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

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
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
    RedsBreadcrumbComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
