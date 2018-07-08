import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { filter, take } from 'rxjs/operators';
import { AppState } from 'src/app/app.state';
import { Subscription } from 'rxjs';
import { HighlighterService } from '../../services/highlighter.service';
import { SetHightlighterAction } from '../../reducers/story/actions/set-hightlighter.action';

@Component({
  selector: 'app-story-area',
  templateUrl: './story-area.component.html',
  styleUrls: ['./story-area.component.scss']
})
export class StoryAreaComponent implements OnInit, OnDestroy {
  public text = '';
  public origin = '';

  private subscriptions = new Array<Subscription>();

  constructor(
    private readonly store: Store<AppState>,
    private readonly highlighter: HighlighterService,
  ) {}

  public ngOnInit(): void {
    this.setOriginText();
    this.subscribeTitle();
    this.subscribeSelection();
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  public setOriginText() {
    this.store.pipe(
      select('story', 'origin'),
      take(1),
    ).subscribe(text => this.origin = text);
  }

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

  private subscribeTitle(): void {
    const titleSubscription = this.store.pipe(
      select('story', 'highlighted'),
    ).subscribe(highlighted => {
      this.text = highlighted;
      console.log(this.text);
    });

    this.subscriptions.push(titleSubscription);
  }

}
