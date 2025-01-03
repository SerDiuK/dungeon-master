import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdventuresComponent } from './adventures.component';

describe('AdventuresComponent', () => {
  let component: AdventuresComponent;
  let fixture: ComponentFixture<AdventuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdventuresComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdventuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
