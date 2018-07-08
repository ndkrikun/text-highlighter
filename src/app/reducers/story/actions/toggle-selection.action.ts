import { Action } from '@ngrx/store';
import { StoryState } from 'src/app/reducers/story/story.state';
import { StoryActionTypes } from 'src/app/reducers/story/story.action-types';

export class StoryToggleSelectionAction implements Action {

  public readonly type = StoryActionTypes.TOGGLE_SELECTION;

  public reduce(this: void, state: StoryState): StoryState {
    return {
      ...state,
    };
  }
}
