import { Action } from '@ngrx/store';
import { StoryActionTypes } from '../story.action-types';
import { StoryState } from '../story.state';

/**
 * Sets hightlighted html
 */
export class SetHightlighterAction implements Action {

  public readonly type = StoryActionTypes.SET_HIGHLIGHTER;

  constructor(
    public payload: string,
  ) { }

  public reduce(this: void, state: StoryState, action: SetHightlighterAction): StoryState {
    return {
      ...state,
      highlighted: action.payload,
    };
  }
}
