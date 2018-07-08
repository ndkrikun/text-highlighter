import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../app.state';
import { ColorTypeIds, ColorCode } from '../../models/color.model';
import { Subscription } from 'rxjs/internal/Subscription';
import { combineLatest } from 'rxjs/operators';
import { SelectionArea } from '../../models/selection.model';
import { TextSelectionService } from '../../services/text-selection.service';
import { ParagraphLine } from '../../models/paragraph.model';
import { HighlighterService } from 'src/app/services/highlighter.service';

@Component({
  selector: 'app-selection-area',
  templateUrl: './selection-filter-area.component.html',
  styleUrls: ['./selection-filter-area.component.scss']
})
export class SelectionFilterAreaComponent implements OnInit, OnDestroy {

  public paragrahps = new Array<ParagraphLine>();

  private readonly selections$ = this.store.pipe(
    select('story', 'selections')
  );

  private readonly originText$ = this.store.pipe(
    select('story', 'origin')
  );

  private readonly subscriptions = new Array<Subscription>();

  constructor(
    private readonly store: Store<AppState>,
    private readonly textSelection: TextSelectionService,
    private readonly highlighter: HighlighterService,
  ) { }

  public ngOnInit(): void {
    this.subscribeFilter();
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  public getColorCode(colorId): ColorCode {
    return this.highlighter.getColorCode(colorId);
  }

  private subscribeFilter(): void {
    const selectionSubscription = this.store.pipe(
      select('selectionFilter', 'id'),
      combineLatest(this.selections$, this.originText$)
    ).subscribe(([ id, selections, origin ]) => {
      const areas: SelectionArea[] = selections.reduce(
        (acc, selection) => selection.id === id ? selection.areas : acc,
        []
      );
      this.initParagrahps(id, areas, origin);
    });

    this.subscriptions.push(selectionSubscription);
  }

  private initParagrahps(color: ColorTypeIds, areas: SelectionArea[], origin: string): void {
    this.paragrahps = areas.map(area => {
      return {
        text: this.textSelection.determinateFragment(area, origin),
        color
      };
    });
    console.log(this.paragrahps);
  }

}
