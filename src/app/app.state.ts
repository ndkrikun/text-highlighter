import { StoryState } from 'src/app/reducers/story/story.state';
import { SelectionFilterState } from 'src/app/reducers/selection-filter/selection-filter.state';

export interface AppState {
  story: StoryState;
  selectionFilter: SelectionFilterState;
}
