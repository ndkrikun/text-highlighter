import { TestBed, inject } from '@angular/core/testing';

import { HighlighterService } from './highlighter.service';

describe('HighlighterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HighlighterService]
    });
  });

  it('should be created', inject([HighlighterService], (service: HighlighterService) => {
    expect(service).toBeTruthy();
  }));
});
