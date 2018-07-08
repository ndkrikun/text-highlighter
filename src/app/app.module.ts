import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PickerButtonComponent } from './components/picker-button/picker-button.component';
import { StoreModule } from '@ngrx/store';
import { AppState } from './app.state';
import { storyReducer } from './reducers/story/story.reducer';
import { StoryAreaComponent } from './components/story-area/story-area.component';
import { TextSelectionService } from './services/text-selection.service';
import { AreaPickerService } from 'src/app/services/area-picker.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HighlighterService } from 'src/app/services/highlighter.service';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PickerButtonComponent,
    StoryAreaComponent,
    SafeHtmlPipe,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot<AppState>({
      story: storyReducer
    }),
    StoreDevtoolsModule.instrument()
  ],
  providers: [
    TextSelectionService,
    AreaPickerService,
    HighlighterService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
