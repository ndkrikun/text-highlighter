import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { AppState } from 'src/app/app.state';
import { Subscription } from 'rxjs';
import { HighlighterService } from 'src/app/services/highlighter.service';
import { SetHightlighterAction } from 'src/app/reducers/story/actions/set-hightlighter.action';

@Component({
  selector: 'app-story-area',
  templateUrl: './story-area.component.html',
  styleUrls: ['./story-area.component.scss']
})
export class StoryAreaComponent implements OnInit, OnDestroy {
  /**
   * Text for render
   */
  public text = '';

  /**
   * Origin text
   */
  public origin = '';

  /**
   * Component subscriptions
   */
  private subscriptions = new Array<Subscription>();

  constructor(
    private readonly store: Store<AppState>,
    private readonly highlighter: HighlighterService,
  ) { }

  /**
   * Life cycle hook
   */
  public ngOnInit(): void {
    this.setOriginText();
    this.subscribeTitle();
    this.subscribeSelection();
  }

  /**
   * Life cycle hook
   */
  public ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  /**
   * Sets origin text
   */
  public setOriginText() {
    this.store.pipe(
      select('story', 'origin'),
      take(1),
    ).subscribe(text => this.origin = text);
  }

  /**
   * Subscribes selection changes
   */
  public subscribeSelection(): void {
    const selectionSubscription = this.store.pipe(
      select('story', 'selections'),
    ).subscribe(selections => {
      this.store.dispatch(new SetHightlighterAction(
        this.highlighter.transform(this.origin, selections)
      ));
    });

    this.subscriptions.push(selectionSubscription);
  }

  /**
   * Subscribes highlight changes
   */
  private subscribeTitle(): void {
    const titleSubscription = this.store.pipe(
      select('story', 'highlighted'),
    ).subscribe(highlighted => {
      this.text = highlighted;
    });

    this.subscriptions.push(titleSubscription);
  }

}
