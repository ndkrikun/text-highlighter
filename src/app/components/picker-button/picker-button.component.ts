import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PickerButton } from '../../models/picker-button.model';

@Component({
  selector: 'app-picker-button',
  templateUrl: './picker-button.component.html',
  styleUrls: ['./picker-button.component.scss']
})
export class PickerButtonComponent implements OnInit {
  @Input() public options: PickerButton;

  @Output() callback = new EventEmitter<string>();

  public ngOnInit(): void {}

  public choose(): void {
    this.callback.emit(this.options.id);
  }
}
