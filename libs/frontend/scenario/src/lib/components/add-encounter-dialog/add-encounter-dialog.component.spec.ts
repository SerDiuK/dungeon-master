import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddEncounterDialogComponent } from './add-encounter-dialog.component';

describe('AddEncounterDialogComponent', () => {
  let component: AddEncounterDialogComponent;
  let fixture: ComponentFixture<AddEncounterDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEncounterDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddEncounterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
