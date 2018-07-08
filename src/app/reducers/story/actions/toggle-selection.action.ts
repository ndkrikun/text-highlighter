import { Action } from '@ngrx/store';
import { StoryState } from 'src/app/reducers/story/story.state';
import { StoryActionTypes } from 'src/app/reducers/story/story.action-types';
import { Selection, SelectionConfig } from '../../../models/selection.model';

export class StoryToggleSelectionAction implements Action {

  public readonly type = StoryActionTypes.TOGGLE_SELECTION;

  constructor(
    public payload: Selection[],
  ) { }

  public reduce(this: void, state: StoryState, action: StoryToggleSelectionAction): StoryState {
    return {
      ...state,
      selections: action.payload,
    };
  }
}
