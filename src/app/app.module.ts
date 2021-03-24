import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EntityDataModule } from '@ngrx/data';
import {entityConfig} from './entity-metadata';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {UserEffects} from './user.effects';
import {userReducer} from './user.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forFeature('users', userReducer),
    EffectsModule.forRoot([UserEffects]),
    // EntityDataModule.forRoot(entityConfig),
    StoreDevtoolsModule.instrument(),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
