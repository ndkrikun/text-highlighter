import { Injectable } from '@angular/core';
import { Selection } from '../models/selection.model';
import { StoryState } from '../reducers/story/story.state';
import { ColorTypeIds, ColorCode } from '../models/color.model';

@Injectable({
  providedIn: 'root'
})
export class HighlighterService {

  constructor() { }

  private startTag(colorId: ColorTypeIds): string {
    return `<span style="background-color: ${ColorCode[colorId]}">`;
  }

  private get endTag(): string {
    return `</span>`;
  }

  private getStartColor(index: number, selections: Selection[]): ColorTypeIds | null {
    return selections.reduce((acc, selection) =>
      (selection.areas.some(area => area[0] === index)) ? selection.id : acc,
      null as ColorTypeIds
    );
  }

  private isEnd(index: number, selections: Selection[]): boolean {
    return selections.some(({ areas }) =>
      areas.some(([ _, end ]) => end === index)
    );
  }

  public transform(origin: string, selections: Selection[]): string {
    const symbols = origin.split('');

    return symbols.reduce((acc, symbol, index) => {
      const color = this.getStartColor(index, selections);
      const isEnd = this.isEnd(index, selections);

      if (!!color) {
        acc.push(this.startTag(color));
      } else if (isEnd) { acc.push(this.endTag); }

      acc.push(symbol);
      return acc;
    }, []).join('');
  }
}
