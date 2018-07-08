import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PickerButton } from '../../models/picker-button.model';

@Component({
  selector: 'app-picker-button',
  templateUrl: './picker-button.component.html',
  styleUrls: ['./picker-button.component.scss']
})
export class PickerButtonComponent implements OnInit {
  /**
   * Button configuration
   */
  @Input() public options: PickerButton;

  /**
   * Callback event emitter
   */
  @Output() callback = new EventEmitter<string>();

  /**
   * Life cycle hook
   */
  public ngOnInit(): void {}

  /**
   * Click handler
   */
  public choose(): void {
    this.callback.emit(this.options.id);
  }
}
