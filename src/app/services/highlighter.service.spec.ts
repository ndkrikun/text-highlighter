import { inject } from '@angular/core/testing';
import { HighlighterService } from 'src/app/services/highlighter.service';
import { AppConfigureTestingModule } from 'src/app/app.testing';
import { ColorTypeIds } from 'src/app/models/color.model';
import { Selection } from 'src/app/models/selection.model';

describe('HighlighterService', () => {
  beforeEach(() => {
    AppConfigureTestingModule().compileComponents();
  });

  it('should be created', inject([HighlighterService], (service: HighlighterService) => {
    expect(service).toBeTruthy();
  }));

  it('transform', inject([HighlighterService], (service: HighlighterService) => {
    const origin = 'Hello, world!';
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
    const highlighted = service.transform(origin, selections);
    expect(highlighted).toEqual(origin);
  }));
});
