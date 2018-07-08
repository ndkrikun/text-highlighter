import { Injectable } from '@angular/core';
import { SelectionConfig, Selection, SelectionArea } from 'src/app/models/selection.model';

@Injectable({
  providedIn: 'root'
})
export class AreaPickerService {

  constructor() { }

  public areaExist(areas: SelectionArea[], [start, end]: SelectionArea): boolean {
    return areas.some(
      area => (
        area.includes(start) ||
        area.includes(end)
      )
    );
  }

  public pickArea(areas: SelectionArea[], options: SelectionConfig): SelectionArea[] {
    if (!this.areaExist(areas, options.area)) {
      areas.push(options.area);
    }
    return areas;
  }

  public updateAreas(selections: Selection[], options: SelectionConfig): Selection[] {
    return selections.map(selection => {
      if (selection.id === options.id) {
        return {
          ...selection,
          areas: this.pickArea(selection.areas, options),
        };
      }
      return selection;
    });
  }
}


