import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { PickerButtonComponent } from 'src/app/components/picker-button/picker-button.component';
import { StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { storyReducer } from 'src/app/reducers/story/story.reducer';
import { StoryAreaComponent } from 'src/app/components/story-area/story-area.component';
import { TextSelectionService } from 'src/app/services/text-selection.service';
import { AreaPickerService } from 'src/app/services/area-picker.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HighlighterService } from 'src/app/services/highlighter.service';
import { SafeHtmlPipe } from 'src/app/pipes/safe-html.pipe';
import { SelectionFilterAreaComponent } from 'src/app/components/selection-filter-area/selection-filter-area.component';
import { selectionFilterReducer } from 'src/app/reducers/selection-filter/selection-filter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    PickerButtonComponent,
    StoryAreaComponent,
    SafeHtmlPipe,
    SelectionFilterAreaComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot<AppState>({
      story: storyReducer,
      selectionFilter: selectionFilterReducer,

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
