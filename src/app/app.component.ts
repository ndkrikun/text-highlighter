import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './app.state';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = '';

  constructor(
    private readonly store: Store<AppState>,
  ) {
    this.store.pipe(
      select('story'),
      take(1),
    ).subscribe(({ data }) => this.title = data);
  }
}
