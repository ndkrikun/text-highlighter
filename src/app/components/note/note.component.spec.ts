import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoteComponent } from './note.component';
import { AppConfigureTestingModule } from 'src/app/app.testing';

describe('NoteComponent', () => {
  let component: NoteComponent;
  let fixture: ComponentFixture<NoteComponent>;

  beforeEach(async(() => {
    AppConfigureTestingModule().compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
