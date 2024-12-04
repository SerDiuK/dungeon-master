import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddEnemyDialogComponent } from './add-enemy-dialog.component';

describe('AddEnemyDialogComponent', () => {
  let component: AddEnemyDialogComponent;
  let fixture: ComponentFixture<AddEnemyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEnemyDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddEnemyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
