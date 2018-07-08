import { TestBed, inject } from '@angular/core/testing';
import { HighlighterService } from 'src/app/services/highlighter.service';
import { AppConfigureTestingModule } from 'src/app/app.testing';

describe('HighlighterService', () => {
  beforeEach(() => {
    AppConfigureTestingModule().compileComponents();
  });

  it('should be created', inject([HighlighterService], (service: HighlighterService) => {
    expect(service).toBeTruthy();
  }));
});
