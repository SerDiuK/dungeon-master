import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateAdventureDialogComponent } from './create-adventure-dialog.component';

describe('FrontendAdventureComponent', () => {
  let component: CreateAdventureDialogComponent;
  let fixture: ComponentFixture<CreateAdventureDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAdventureDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateAdventureDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
