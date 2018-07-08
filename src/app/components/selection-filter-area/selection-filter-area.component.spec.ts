import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectionFilterAreaComponent } from './selection-filter-area.component';
import { AppConfigureTestingModule } from '../../app.testing';

describe('SelectionFilterAreaComponent', () => {
  let component: SelectionFilterAreaComponent;
  let fixture: ComponentFixture<SelectionFilterAreaComponent>;

  beforeEach(async(() => {
    AppConfigureTestingModule().compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionFilterAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
