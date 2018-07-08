import { Component } from '@angular/core';
import { PickerButton } from './models/picker-button.model';
import { pickerButtonCollection } from './data/picker-button.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public get selectionButtons(): PickerButton[] {
    return pickerButtonCollection;
  }
}
