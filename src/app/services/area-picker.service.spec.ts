import { inject } from '@angular/core/testing';
import { AreaPickerService } from './area-picker.service';
import { AppConfigureTestingModule } from 'src/app/app.testing';

describe('AreaPickerService', () => {
  beforeEach(() => {
    AppConfigureTestingModule().compileComponents();
  });

  it('should be created', inject([AreaPickerService], (service: AreaPickerService) => {
    expect(service).toBeTruthy();
  }));
});
