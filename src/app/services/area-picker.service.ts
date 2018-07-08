import { Injectable } from '@angular/core';
import { SelectionConfig, Selection, SelectionArea } from 'src/app/models/selection.model';

/**
 * Service for managing selection area indexes
 */
@Injectable({
  providedIn: 'root'
})
export class AreaPickerService {
  /**
   * Returns all items form area
   */
  public itemsFormArea([start, end]: SelectionArea): number[] {
    return new Array<number>(end - start).fill(null)
      .map((_, index) => start + index);
  }

  /**
   * Tells if area exists in existing selections
   */
  public areaExist(areas: SelectionArea[], [start, end]: SelectionArea): boolean {
    return areas.some(
      area => (
        this.itemsFormArea(area).includes(start) ||
        this.itemsFormArea(area).includes(end)
      )
    );
  }

  /**
   * Adds area to selection collection
   */
  public pickArea(areas: SelectionArea[], { area }: SelectionConfig): SelectionArea[] {
    if (!this.areaExist(areas, area)) {
      areas.push(area);
    }
    return areas;
  }

  /**
   * Updated selection collection
   */
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


