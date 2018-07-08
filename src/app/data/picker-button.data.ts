import { PickerButton } from '../models/picker-button.model';
import { ColorTypeIds, ColorCode } from '../models/color.model';

export const pickerButtonCollection: PickerButton[] = [{
  id: ColorTypeIds.green,
  color: ColorCode.green
}, {
  id: ColorTypeIds.yellow,
  color: ColorCode.yellow
}, {
  id: ColorTypeIds.red,
  color: ColorCode.red
}];
