import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from 'src/app/app.component';
import { PickerButtonComponent } from 'src/app/components/picker-button/picker-button.component';
import { storyReducer } from 'src/app/reducers/story/story.reducer';
import { AppState } from 'src/app/app.state';
import { StoryAreaComponent } from 'src/app/components/story-area/story-area.component';
import { TextSelectionService } from 'src/app/services/text-selection.service';
import { AreaPickerService } from 'src/app/services/area-picker.service';
import { HighlighterService } from 'src/app/services/highlighter.service';

export const AppConfigureTestingModule = () => {
  return TestBed.configureTestingModule({
    declarations: [
      AppComponent,
      PickerButtonComponent,
      StoryAreaComponent,
    ],
    imports: [
      StoreModule.forRoot<AppState>({
        story: storyReducer
      })
    ],
    providers: [
      TextSelectionService,
      AreaPickerService,
      HighlighterService,
    ],
  });
};
