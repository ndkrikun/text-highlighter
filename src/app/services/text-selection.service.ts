import { Injectable } from '@angular/core';
import { SelectionArea } from 'src/app/models/selection.model';

/**
 * Service for managing text selection
 */
@Injectable({
  providedIn: 'root'
})
export class TextSelectionService {
  /**
   * Returns area fragment coordinates
   */
  public determitaneArea(text: string, fragment: string): SelectionArea {
    const index = text.indexOf(fragment);
    return [
      index,
      index + fragment.length
    ];
  }

  /**
   * Returns fragment by coorinates
   */
  public determinateFragment([ start, end ]: SelectionArea, text: string): string {
    return text
      .split('')
      .splice(start, end - start)
      .join('');
  }

  /**
   * Returns window selection
   *
   * @todo: return exactly the node element instead of the text
   * to avoid cases of the same text selection on the page
   * @todo: make it works with selections inside textarea or input elements
   */
  public getSelection(): string {
    return window.getSelection().toString();
  }
}
