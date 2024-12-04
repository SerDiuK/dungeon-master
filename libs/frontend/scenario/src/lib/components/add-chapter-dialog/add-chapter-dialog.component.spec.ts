import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddChapterDialogComponent } from './add-chapter-dialog.component';

describe('AddChapterDialogComponent', () => {
  let component: AddChapterDialogComponent;
  let fixture: ComponentFixture<AddChapterDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddChapterDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddChapterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
