import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateScenarioDialogComponent } from './create-scenario-dialog.component';

describe('CreateScenarioDialogComponent', () => {
  let component: CreateScenarioDialogComponent;
  let fixture: ComponentFixture<CreateScenarioDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateScenarioDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateScenarioDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
