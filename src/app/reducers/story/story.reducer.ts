import { StoryState } from './story.state';
import { storyText } from 'src/app/data/story.data';
import { StoryToggleSelectionAction } from './actions/toggle-selection.action';
import { StoryActionTypes } from './story.action-types';

const storyDefaultState: StoryState = {
  data: storyText,
  selection: [],
};

type StoryActions = (
  | StoryToggleSelectionAction
);

export function storyReducer(
  this: void,
  state = storyDefaultState,
  action: StoryActions,
): StoryState {
  switch (action.type) {
    case StoryActionTypes.TOGGLE_SELECTION: return action.reduce(state);
    default: return state;
  }
}
