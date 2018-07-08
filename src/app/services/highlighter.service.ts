import { Injectable } from '@angular/core';
import { Selection } from 'src/app/models/selection.model';
import { ColorTypeIds, ColorCode } from 'src/app/models/color.model';

/**
 * Service for managing highlighted text
 */
@Injectable({
  providedIn: 'root'
})
export class HighlighterService {
  /**
   * Returns color code by id
   */
  public getColorCode(colorId: ColorTypeIds): ColorCode {
    return ColorCode[colorId];
  }

  /**
   * Returns tag string by color id
   */
  private startTag(colorId: ColorTypeIds): string {
    return `<span style="background-color: ${this.getColorCode(colorId)}">`;
  }

  /**
   * Returns end tag
   */
  private get endTag(): string {
    return `</span>`;
  }

  /**
   * Returns color of index in text if exist
   */
  private getStartColor(index: number, selections: Selection[]): ColorTypeIds | null {
    return selections.reduce((acc, selection) =>
      (selection.areas.some(area => area[0] === index)) ? selection.id : acc,
      null as ColorTypeIds
    );
  }

  /**
   * Tells if index is the end of selection
   */
  private isEnd(index: number, selections: Selection[]): boolean {
    return selections.some(({ areas }) =>
      areas.some(([ _, end ]) => end === index)
    );
  }

  /**
   * Returnes highlighted text
   */
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
