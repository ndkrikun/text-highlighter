import { Action } from '@ngrx/store';
import { StoryActionTypes } from 'src/app/reducers/story/story.action-types';
import { StoryState } from 'src/app/reducers/story/story.state';

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
