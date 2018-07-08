import { inject } from '@angular/core/testing';
import { TextSelectionService } from './text-selection.service';
import { AppConfigureTestingModule } from 'src/app/app.testing';

describe('TextSelectionService', () => {
  beforeEach(() => {
    AppConfigureTestingModule().compileComponents();
  });

  it('should be created', inject([TextSelectionService], (service: TextSelectionService) => {
    expect(service).toBeTruthy();
  }));
});
