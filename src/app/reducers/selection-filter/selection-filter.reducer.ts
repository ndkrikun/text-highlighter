import { SelectionFilterState } from './selection-filter.state';
import { SetSelectionFilterAction } from './actions/set-selection-filter.action';
import { SelectionFilterActionTypes } from './selection-filter.action-types';

const selectionFilterDefaultState: SelectionFilterState = {
  id: null,
};

type SelectionFilterActions = (
  | SetSelectionFilterAction
);

export function selectionFilterReducer(
  this: void,
  state = selectionFilterDefaultState,
  action: SelectionFilterActions,
): SelectionFilterState {
  switch (action.type) {
    case SelectionFilterActionTypes.SET_SELECTION_FILTER: return action.reduce(state, action);
    default: return state;
  }
}
