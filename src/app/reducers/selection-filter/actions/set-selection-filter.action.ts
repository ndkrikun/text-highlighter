import { Action } from '@ngrx/store';
import { SelectionFilterActionTypes } from '../selection-filter.action-types';
import { ColorTypeIds } from '../../../models/color.model';
import { SelectionFilterState } from '../selection-filter.state';

export class SetSelectionFilterAction implements Action {

  public readonly type = SelectionFilterActionTypes.SET_SELECTION_FILTER;

  constructor(
    public payload: ColorTypeIds,
  ) {}

  public reduce(this: void, state: SelectionFilterState, action: SetSelectionFilterAction): SelectionFilterState {
    return {
      ...state,
      id: action.payload
    };
  }
}
