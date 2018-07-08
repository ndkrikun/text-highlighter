import { Component, OnInit, Input } from '@angular/core';
import { PickerButton } from '../../models/picker-button.model';
import { TextSelectionService } from '../../services/text-selection.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../app.state';
import { take } from 'rxjs/operators';
import { AreaPickerService } from '../../services/area-picker.service';
import { StoryToggleSelectionAction } from '../../reducers/story/actions/toggle-selection.action';

@Component({
  selector: 'app-picker-button',
  templateUrl: './picker-button.component.html',
  styleUrls: ['./picker-button.component.scss']
})
export class PickerButtonComponent implements OnInit {
  @Input() public options: PickerButton;

  constructor(
    private readonly store: Store<AppState>,
    private readonly textSelection: TextSelectionService,
    private readonly areaPicker: AreaPickerService,
  ) {}

  public ngOnInit(): void {}

  public choose(): void {
    this.store.pipe(
      select('story'),
      take(1),
    ).subscribe(({ origin, selections }) => {
      const fragment = this.textSelection.get();
      const fragmentArea = this.textSelection.determitaneArea(origin, fragment);
      const areas = this.areaPicker.updateAreas(
        selections,
        { id: this.options.id,  area: fragmentArea }
      );
      this.store.dispatch(new StoryToggleSelectionAction(areas));
    });
  }

}
