import { Injectable } from '@angular/core';
import { SelectionArea } from 'src/app/models/selection.model';

@Injectable({
  providedIn: 'root'
})
export class TextSelectionService {

  constructor() { }

  public determitaneArea(text: string, fragment: string): SelectionArea {
    const index = text.indexOf(fragment);
    return [
      index,
      index + fragment.length
    ];
  }

  public determinateFragment([ start, end ]: SelectionArea, text: string): string {
    return text
      .split('')
      .splice(start, end - start)
      .join('');
  }

  public getSelection(): string {
    return window.getSelection().toString();
  }
}
