import { Action } from '@ngrx/store';
import { SelectionFilterActionTypes } from 'src/app/reducers/selection-filter/selection-filter.action-types';
import { ColorTypeIds } from 'src/app/models/color.model';
import { SelectionFilterState } from 'src/app/reducers/selection-filter/selection-filter.state';

/**
 * Sets active selection filter
 */
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
