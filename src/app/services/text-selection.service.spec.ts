import { inject } from '@angular/core/testing';
import { TextSelectionService } from 'src/app/services/text-selection.service';
import { AppConfigureTestingModule } from 'src/app/app.testing';
import { SelectionArea } from '../models/selection.model';

describe('TextSelectionService', () => {
  beforeEach(() => {
    AppConfigureTestingModule().compileComponents();
  });

  it('should be created', inject([TextSelectionService], (service: TextSelectionService) => {
    expect(service).toBeTruthy();
  }));

  it('determitane area', inject([TextSelectionService], (service: TextSelectionService) => {
    const text = 'Hello, world!';
    const fragment = 'ello';
    expect(
      service.determitaneArea(text, fragment)
    ).toEqual([1, 5]);
  }));

  it('determitane fragment', inject([TextSelectionService], (service: TextSelectionService) => {
    const text = 'Hello, world!';
    const area: SelectionArea = [1, 5];
    expect(
      service.determinateFragment(area, text)
    ).toEqual('ello');
  }));
});
