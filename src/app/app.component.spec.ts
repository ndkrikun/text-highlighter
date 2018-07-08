import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from 'src/app/app.component';
import { AppConfigureTestingModule } from 'src/app/app.testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    AppConfigureTestingModule().compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
