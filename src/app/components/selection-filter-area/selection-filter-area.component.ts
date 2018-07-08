import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { ColorTypeIds, ColorCode } from 'src/app/models/color.model';
import { Subscription } from 'rxjs/internal/Subscription';
import { combineLatest } from 'rxjs/operators';
import { SelectionArea } from 'src/app/models/selection.model';
import { TextSelectionService } from 'src/app/services/text-selection.service';
import { ParagraphLine } from 'src/app/models/paragraph.model';
import { HighlighterService } from 'src/app/services/highlighter.service';

@Component({
  selector: 'app-selection-area',
  templateUrl: './selection-filter-area.component.html',
  styleUrls: ['./selection-filter-area.component.scss']
})
export class SelectionFilterAreaComponent implements OnInit, OnDestroy {
  /**
   * Collection of paragraphs to reneder
   */
  public paragrahps = new Array<ParagraphLine>();

  /**
   * Text selections
   */
  private readonly selections$ = this.store.pipe(
    select('story', 'selections')
  );

  /**
   * Original text
   */
  private readonly originText$ = this.store.pipe(
    select('story', 'origin')
  );

  /**
   * Component subscriptions
   */
  private readonly subscriptions = new Array<Subscription>();

  constructor(
    private readonly store: Store<AppState>,
    private readonly textSelection: TextSelectionService,
    private readonly highlighter: HighlighterService,
  ) { }

  /**
   * Life cycle hook
   */
  public ngOnInit(): void {
    this.subscribeFilter();
  }

  /**
   * Life cycle hook
   */
  public ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  /**
   * Returns color code by color id
   */
  public getColorCode(colorId): ColorCode {
    return this.highlighter.getColorCode(colorId);
  }

  /**
   * Subscribes selection filter changes
   */
  private subscribeFilter(): void {
    const selectionSubscription = this.store.pipe(
      select('selectionFilter', 'id'),
      combineLatest(this.selections$, this.originText$)
    ).subscribe(([ id, selections, origin ]) => {
      const areas: SelectionArea[] = selections.reduce(
        (acc, selection) => selection.id === id ? selection.areas : acc,
        []
      );
      this.setParagrahps(id, areas, origin);
    });

    this.subscriptions.push(selectionSubscription);
  }

  /**
   * Sets collection of paragraphs
   */
  private setParagrahps(color: ColorTypeIds, areas: SelectionArea[], origin: string): void {
    this.paragrahps = areas.map(area => {
      return {
        text: this.textSelection.determinateFragment(area, origin),
        color
      };
    });
  }

}
