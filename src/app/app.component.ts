import { Component } from '@angular/core';
import { PickerButton } from 'src/app/models/picker-button.model';
import { pickerButtonCollection } from 'src/app/data/picker-button.data';
import { ColorTypeIds } from 'src/app/models/color.model';
import { Store, select } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { AppState } from 'src/app/app.state';
import { TextSelectionService } from 'src/app/services/text-selection.service';
import { AreaPickerService } from 'src/app/services/area-picker.service';
import { StoryToggleSelectionAction } from 'src/app/reducers/story/actions/toggle-selection.action';
import { SetSelectionFilterAction } from 'src/app/reducers/selection-filter/actions/set-selection-filter.action';

/**
 * Root component
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private readonly store: Store<AppState>,
    private readonly textSelection: TextSelectionService,
    private readonly areaPicker: AreaPickerService,
  ) {}

  /**
   * Returns collection of pick buttons
   */
  public get pickerButtons(): PickerButton[] {
    return pickerButtonCollection;
  }

  /**
   * Highlights fragment
   */
  public highlightFragment(typeId: ColorTypeIds): void {
    this.store.pipe(
      select('story'),
      take(1),
    ).subscribe(({ origin, selections }) => {
      const fragment = this.textSelection.getSelection();
      const fragmentArea = this.textSelection.determitaneArea(origin, fragment);
      const areas = this.areaPicker.updateAreas(
        selections,
        { id: typeId, area: fragmentArea }
      );
      this.store.dispatch(new StoryToggleSelectionAction(areas));
    });
  }

  /**
   * Sets active filter
   */
  public chooseSelection(typeId: ColorTypeIds): void {
    this.store.dispatch(new SetSelectionFilterAction(typeId));
  }
}
