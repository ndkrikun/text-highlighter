import { inject } from '@angular/core/testing';
import { AreaPickerService } from './area-picker.service';
import { AppConfigureTestingModule } from '../app.testing';
import { SelectionArea, Selection } from 'src/app/models/selection.model';
import { ColorTypeIds } from '../models/color.model';

describe('AreaPickerService', () => {
  beforeEach(() => {
    AppConfigureTestingModule().compileComponents();
  });

  it('should be created', inject([AreaPickerService], (service: AreaPickerService) => {
    expect(service).toBeTruthy();
  }));

  it('items from area', inject([AreaPickerService], (service: AreaPickerService) => {
    const area: SelectionArea = [1, 10];
    expect(
      service.itemsFormArea(area).length
    ).toEqual(area[1] - area[0]);
  }));

  it('area exist in text', inject([AreaPickerService], (service: AreaPickerService) => {
    const selections: SelectionArea[] = [ [1, 3], [6, 9] ];
    const area: SelectionArea = [2, 5];
    expect(
      service.areaExist(selections, area)
    ).toBeTruthy();
  }));

  it('pick area', inject([AreaPickerService], (service: AreaPickerService) => {
    const selections: SelectionArea[] = [[1, 3], [6, 9]];
    const area: SelectionArea = [4, 5];
    expect(
      service.pickArea(selections, { id: ColorTypeIds.green, area }).length
    ).toBeTruthy(selections.length + 1);
  }));

  it('update areas', inject([AreaPickerService], (service: AreaPickerService) => {
    const selections: Selection[] = [{
      id: ColorTypeIds.green,
      areas: [],
    }, {
      id: ColorTypeIds.yellow,
      areas: [],
    }, {
      id: ColorTypeIds.red,
      areas: []
    }];
    const area: SelectionArea = [4, 5];
    expect(
      service.updateAreas(selections, { id: ColorTypeIds.green, area }) ===
      selections
    ).toBeFalsy();
  }));
});
