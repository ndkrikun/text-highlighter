import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PickerButtonComponent } from './picker-button.component';
import { AppConfigureTestingModule } from '../../app.testing';

describe('PickerButtonComponent', () => {
  let component: PickerButtonComponent;
  let fixture: ComponentFixture<PickerButtonComponent>;

  beforeEach(async(() => {
    AppConfigureTestingModule().compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
