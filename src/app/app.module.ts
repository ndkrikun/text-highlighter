import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PickerButtonComponent } from './components/picker-button/picker-button.component';
import { StoreModule } from '@ngrx/store';
import { AppState } from './app.state';
import { storyReducer } from './reducers/story/story.reducer';

@NgModule({
  declarations: [
    AppComponent,
    PickerButtonComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot<AppState>({
      story: storyReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
