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

  public get(): string {
    return window.getSelection().toString();
  }
}
