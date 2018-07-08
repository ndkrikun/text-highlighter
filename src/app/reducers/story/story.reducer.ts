import { StoryState } from './story.state';
import { storyText } from 'src/app/data/story.data';
import { StoryToggleSelectionAction } from './actions/toggle-selection.action';
import { StoryActionTypes } from './story.action-types';
import { ColorTypeIds } from '../../models/color.model';
import { SetHightlighterAction } from './actions/set-hightlighter.action';

const storyDefaultState: StoryState = {
  origin: storyText,
  highlighted: storyText,
  selections: [{
    id: ColorTypeIds.green,
    areas: [],
  }, {
    id: ColorTypeIds.yellow,
    areas: [],
  }, {
    id: ColorTypeIds.red,
    areas: []
  }],
};

type StoryActions = (
  | StoryToggleSelectionAction
  | SetHightlighterAction
);

export function storyReducer(
  this: void,
  state = storyDefaultState,
  action: StoryActions,
): StoryState {
  switch (action.type) {
    case StoryActionTypes.TOGGLE_SELECTION: return action.reduce(state, action);
    case StoryActionTypes.SET_HIGHLIGHTER: return action.reduce(state, action);
    default: return state;
  }
}
