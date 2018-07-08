import { Action } from '@ngrx/store';
import { StoryState } from '../story.state';
import { StoryActionTypes } from '../story.action-types';
import { Selection } from '../../../models/selection.model';

/**
 * Toggles selection areas
 */
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
