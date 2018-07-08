import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoryAreaComponent } from './story-area.component';
import { AppConfigureTestingModule } from '../../app.testing';

describe('StoryAreaComponent', () => {
  let component: StoryAreaComponent;
  let fixture: ComponentFixture<StoryAreaComponent>;

  beforeEach(async(() => {
    AppConfigureTestingModule().compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
